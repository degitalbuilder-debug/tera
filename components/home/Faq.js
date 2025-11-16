import { HelpCircle } from "lucide-react";

export default function Faq() {
  const faqs = [
    {
      q: "How can I download Terabox videos without login?",
      a: "Just copy the public Terabox link and paste it into TeraLinkPlayer. It instantly generates a direct download link — no login or app needed. For example, if someone shares a 2GB video via Telegram, you can get the download link in seconds."
    },
    {
      q: "Why is my Terabox link not loading?",
      a: "Make sure the link is public and not password-protected. TeraLinkPlayer only works with publicly accessible links. Private or expired links won’t work."
    },
    {
      q: "Does TeraLinkPlayer work with Terabox premium downloads?",
      a: "Yes! As long as the shared link allows it, TeraLinkPlayer can fetch high-quality or premium files without any hassle."
    },
    {
      q: "Is it safe to use TeraLinkPlayer?",
      a: "Absolutely. TeraLinkPlayer never stores your files or tracks your personal data. All downloads come straight from Terabox servers, so your privacy is protected."
    },
    {
      q: "Can I download videos, images, and documents?",
      a: "Yes! TeraLinkPlayer supports all common file types — videos, photos, documents, ZIP files, and more. For example, you can download a shared presentation or a vacation video with just one click."
    }
  ];

  return (
    <section className="max-w-5xl mx-auto p-6 text-white transition-all">
      {/* Header */}
      <header className="flex items-center gap-3 mb-6">
        <HelpCircle className="w-7 h-7 text-pink-500" />
        <h2 className="text-2xl font-bold text-pink-600">
          Frequently Asked Questions (FAQ)
        </h2>
      </header>

      {/* FAQ List */}
      <div className="space-y-4">
        {faqs.map((item, index) => (
          <details
            key={index}
            className="group bg-white/20 border border-pink-200 rounded-xl overflow-hidden shadow-sm hover:border-pink-400 hover:shadow-pink-300/20 transition-all duration-300"
          >
            <summary className="cursor-pointer flex items-center justify-between p-4 text-left font-medium text-pink-600 hover:bg-white/10 transition-colors">
              {item.q}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-pink-400 group-open:rotate-180 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>
            <div className="px-4 pb-4 text-sm text-black leading-relaxed animate-fadeIn">
              {item.a}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
