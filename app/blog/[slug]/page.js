import { notFound } from "next/navigation";
import Link from "next/link";

// Static paths based on JSON file names
export async function generateStaticParams() {
  return [
    { slug: "download-terabox-videos-fast" },
    { slug: "secure-terabox-downloads" },
    { slug: "terabox-fast-download-guide" }
  ];
}

// SEO metadata for each blog
export async function generateMetadata({ params }) {
  try {
    const blog = require(`../../../public/blog/${params.slug}.json`);
    return {
      title: blog.seo?.title || blog.title,
      description: blog.description,
      keywords: blog.seo?.keywords || "",
      openGraph: {
        title: blog.seo?.title || blog.title,
        description: blog.description,
        images: blog.seo?.ogImage ? [blog.seo?.ogImage] : []
      },
      twitter: {
        card: "summary_large_image",
        title: blog.seo?.title || blog.title,
        description: blog.description,
        images: blog.seo?.ogImage ? [blog.seo?.ogImage] : []
      }
    };
  } catch {
    return {};
  }
}

// --- Helper function to parse text formatting ---
function renderText(text) {
  if (!text) return null;

  const elements = [];

  // Regex for links [text](url)
  const linkRegex = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g;
  // Regex for bold **text**
  const boldRegex = /\*\*([^*]+)\*\*/g;
  // Regex for italic *text*
  const italicRegex = /\*([^*]+)\*/g;

  let remaining = text;

  while (remaining.length > 0) {
    // Find earliest match among link, bold, italic
    const linkMatch = linkRegex.exec(remaining);
    const boldMatch = boldRegex.exec(remaining);
    const italicMatch = italicRegex.exec(remaining);

    const matches = [linkMatch, boldMatch, italicMatch].filter(Boolean);
    if (matches.length === 0) {
      elements.push(remaining);
      break;
    }

    // Find the earliest match
    const earliest = matches.reduce((prev, curr) => {
      return curr.index < prev.index ? curr : prev;
    });

    // Push text before match
    if (earliest.index > 0) {
      elements.push(remaining.slice(0, earliest.index));
    }

    // Push formatted element
    if (earliest === linkMatch) {
      elements.push(
        <Link key={elements.length} href={linkMatch[2]} target="_blank" className="text-blue-600 underline">
          {linkMatch[1]}
        </Link>
      );
    } else if (earliest === boldMatch) {
      elements.push(<strong key={elements.length}>{boldMatch[1]}</strong>);
    } else if (earliest === italicMatch) {
      elements.push(<em key={elements.length}>{italicMatch[1]}</em>);
    }

    // Update remaining text
    remaining = remaining.slice(earliest.index + earliest[0].length);

    // Reset regex lastIndex for next loop
    linkRegex.lastIndex = 0;
    boldRegex.lastIndex = 0;
    italicRegex.lastIndex = 0;
  }

  return elements;
}

export default async function BlogPage({ params }) {
  try {
    const blog = require(`../../../public/blog/${params.slug}.json`);

    return (
      <main className="max-w-3xl min-h-screen mx-auto p-6">
        <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
        <p className="text-gray-500 mb-6">By {blog.author} • {blog.date}</p>

        {blog.content.map((block, idx) => {
          if (block.type === "paragraph") {
            return <p key={idx} className="mb-4">{renderText(block.text)}</p>;
          }

          if (block.type === "list") {
            return (
              <ul key={idx} className="list-disc list-inside mb-4">
                {block.items.map((item, i) => (
                  <li key={i}>{renderText(item)}</li>
                ))}
              </ul>
            );
          }

          if (block.type === "image") {
            return (
              <div key={idx} className="my-4 p-4 border rounded bg-gray-50 text-gray-700">
                <em>{block.text}</em>
              </div>
            );
          }

          return null;
        })}
      </main>
    );
  } catch (err) {
    console.error(err);
    notFound();
  }
}
