import React from "react";
import { AlertTriangle, Shield, Mail } from "lucide-react";
import Link from "next/link";

function Disclaimer() {
  return (
    <section className="max-w-5xl mx-auto p-8 transition-all">
      {/* Header */}
      <header className="flex items-center gap-3 mb-6">
        <AlertTriangle className="w-7 h-7 text-pink-600" />
        <h2 className="text-2xl font-bold text-pink-600">Disclaimer</h2>
      </header>

      {/* Content */}
      <div className="space-y-5 leading-relaxed">
        <p>
          <strong className="text-pink-600">TeraLinkPlayer</strong> is a simple online tool that helps you get direct download links from publicly shared <span className="text-orange-500 font-medium">TeraBox</span> files. 
          This site is <strong>not connected</strong> or affiliated with <span className="text-orange-500 font-medium">terabox.app</span> or <span className="text-orange-500 font-medium">Flextech Inc.</span>.
        </p>

        <p>
          We do <strong>not</strong> host, upload, or store any files. Everything you download comes directly from TeraBox servers. Think of us like a “shortcut” — we just help you get the file faster.
        </p>

        {/* Example */}
        <p>
          <strong>Example:</strong> If someone shares a video on TeraBox via Telegram, instead of going through the TeraBox site and logging in, you can paste the link into TeraLinkPlayer and get a direct download link instantly. We never touch the file itself — we just make it easier for you to download.
        </p>

        <p>
          <strong className="text-pink-600">TeraLinkPlayer</strong> respects copyright laws. Only download content you have the right to access.
        </p>

        {/* Contact Section */}
        <div className="flex items-start gap-3 bg-pink-50 border border-pink-100 p-4 rounded-xl hover:border-pink-300 transition-all">
          <Shield className="w-6 h-6 text-orange-500 mt-1" />
          <p className="text-sm text-gray-700">
            Are you a content owner and think this tool may infringe on your rights? Contact us right away via our{" "}
            <Link
              href="https://t.me/+2fvOF7WT0YBjZDM9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-pink-600 font-medium hover:underline"
            >
              Telegram Group <Mail className="w-4 h-4" />
            </Link>
            . We will review and take action immediately.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Disclaimer;
