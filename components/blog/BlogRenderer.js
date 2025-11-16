"use client";

import Image from "next/image";
import DOMPurify from "dompurify";
import { marked } from "marked";

// Configure marked to make links open in new tab and be safe
const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  const titleAttr = title ? ` title="${title}"` : "";
  // target="_blank" and rel for safety
  return `<a href="${href}"${titleAttr} target="_blank" rel="noopener noreferrer nofollow">${text}</a>`;
};

marked.setOptions({
  renderer,
  gfm: true,
  breaks: true,
  headerIds: false,
});

export default function BlogRenderer({ data }) {
  const { title, coverImage, blocks } = data ?? {};

  const toSafeHtml = (mdOrHtml) => {
    if (!mdOrHtml) return "";
    // If the text already looks like HTML (contains tags), we'll not run through marked again
    const probablyHtml = /<\/?[a-z][\s\S]*>/i.test(mdOrHtml);
    const html = probablyHtml ? mdOrHtml : marked.parse(mdOrHtml);
    // Sanitize: allow common tags and attributes
    return DOMPurify.sanitize(html, {
      ALLOWED_TAGS: [
        "a",
        "b",
        "i",
        "strong",
        "em",
        "u",
        "p",
        "br",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "ul",
        "ol",
        "li",
        "blockquote",
        "pre",
        "code",
        "img",
        "figure",
        "figcaption",
        "table",
        "thead",
        "tbody",
        "tr",
        "th",
        "td",
        "hr",
        "span",
      ],
      ALLOWED_ATTR: ["href", "target", "rel", "src", "alt", "title", "class", "width", "height"],
    });
  };

  return (
    <article className="max-w-3xl mx-auto px-4 py-10 prose prose-lg dark:prose-invert leading-relaxed">
      {/* Cover Image */}
      {coverImage && (
        <div className="mb-8">
          <img
            src={coverImage}
            width={1200}
            height={600}
            alt={title || "cover"}
            className="rounded-xl shadow-lg"
            priority
          />
        </div>
      )}

      {/* Title */}
      {title && <h1 className="text-4xl font-bold mb-6">{title}</h1>}

      {/* Blocks */}
      {blocks?.map((block, index) => {
        const key = `block-${index}-${block.type}`;

        switch (block.type) {
          case "heading": {
            const html = toSafeHtml(block.text);
            if (block.level === 2) return <h2 key={key} dangerouslySetInnerHTML={{ __html: html }} />;
            if (block.level === 3) return <h3 key={key} dangerouslySetInnerHTML={{ __html: html }} />;
            return <h4 key={key} dangerouslySetInnerHTML={{ __html: html }} />;
          }

          case "paragraph": {
            const html = toSafeHtml(block.text);
            return <p key={key} dangerouslySetInnerHTML={{ __html: html }} />;
          }

          case "image": {
            // prefer next/image for performance; if external domain, ensure it's in next.config.js domains
            return (
              <figure key={key} className="my-6">
                <img
                  src={block.src}
                  width={block.width || 900}
                  height={block.height || 500}
                  alt={block.caption || block.alt || "blog image"}
                  className="rounded-xl shadow"
                />
                {block.caption && (
                  <figcaption className="text-sm text-gray-500 mt-2 text-center">{block.caption}</figcaption>
                )}
              </figure>
            );
          }

          case "blockquote": {
            const html = toSafeHtml(block.text);
            return (
              <blockquote key={key} className="border-l-4 pl-5 italic" dangerouslySetInnerHTML={{ __html: html }} />
            );
          }

          case "list": {
            if (block.style === "ordered") {
              return (
                <ol key={key} className="list-decimal ml-5">
                  {block.items.map((item, idx) => (
                    <li key={`${key}-li-${idx}`} dangerouslySetInnerHTML={{ __html: toSafeHtml(item) }} />
                  ))}
                </ol>
              );
            } else {
              return (
                <ul key={key} className="list-disc ml-5">
                  {block.items.map((item, idx) => (
                    <li key={`${key}-li-${idx}`} dangerouslySetInnerHTML={{ __html: toSafeHtml(item) }} />
                  ))}
                </ul>
              );
            }
          }

          case "code": {
            // code blocks should remain as plain text inside <code>
            return (
              <pre key={key} className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
                <code>{block.text}</code>
              </pre>
            );
          }

          default:
            return null;
        }
      })}
    </article>
  );
}
