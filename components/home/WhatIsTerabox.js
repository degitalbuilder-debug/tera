 
import React from "react";
import {
  Cloud,
  ShieldCheck,
  Share2,
  FolderOpen,
  MessageSquare,
} from "lucide-react";

function WhatIsTerabox() {
  return (
    <section className="w-full max-w-5xl mx-auto p-6 md:p-10 transition-all duration-300">
      {/* 🌥️ Heading */}
      <div className="flex items-center gap-3 mb-6">
        <Cloud className="w-8 h-8 text-pink-500" />
        <h2 className="text-3xl md:text-4xl font-bold text-pink-600">
          What is TeraBox?
        </h2>
      </div>

      {/* 📄 Description */}
      <p className="leading-relaxed mb-4 text-gray-700">
        <strong className="text-pink-600">TeraBox</strong> is a free cloud storage platform that gives you <strong className="text-orange-500">up to 1TB of secure storage</strong> for all your files — photos, videos, documents, and more. It’s like having a personal locker in the cloud that you can access from any device, anytime.
      </p>

      <p className="leading-relaxed mb-4 text-gray-700">
        Unlike other cloud services, TeraBox makes it easy to organize your files, back them up automatically, and share them with friends or colleagues with just a few clicks. Your data stays <strong className="text-pink-500">safe</strong>, <strong className="text-orange-500">organized</strong>, and <strong className="text-pink-600">always accessible</strong>.
      </p>

      {/* 💡 Example */}
      <p className="leading-relaxed mb-8 text-gray-700">
        <strong>Example:</strong> Imagine you have a 5GB video saved on TeraBox and you want to share it with a friend. Normally, you’d need to send them the TeraBox link, and they’d have to navigate the website to download it. With <strong className="text-pink-600">Terabox Link Player</strong>, you can instantly convert that link into a <strong>direct download URL</strong>, so your friend can download it with just one click — no login, no hassle.
      </p>

      {/* ✨ Features Section */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
        <div className="flex flex-col items-center text-center gap-3 p-5 bg-gradient-to-br from-pink-50 to-white border border-pink-200 rounded-2xl hover:shadow-md transition-all">
          <ShieldCheck className="w-8 h-8 text-pink-500" />
          <p className="font-semibold text-gray-700">Secure 1TB Cloud Storage</p>
        </div>

        <div className="flex flex-col items-center text-center gap-3 p-5 bg-gradient-to-br from-orange-50 to-white border border-orange-200 rounded-2xl hover:shadow-md transition-all">
          <FolderOpen className="w-8 h-8 text-orange-500" />
          <p className="font-semibold text-gray-700">Smart File Organization</p>
        </div>

        <div className="flex flex-col items-center text-center gap-3 p-5 bg-gradient-to-br from-pink-50 to-white border border-pink-200 rounded-2xl hover:shadow-md transition-all">
          <Share2 className="w-8 h-8 text-pink-500" />
          <p className="font-semibold text-gray-700">Instant File Sharing</p>
        </div>

        <div className="flex flex-col items-center text-center gap-3 p-5 bg-gradient-to-br from-orange-50 to-white border border-orange-200 rounded-2xl hover:shadow-md transition-all">
          <Cloud className="w-8 h-8 text-orange-500" />
          <p className="font-semibold text-gray-700">Access Anywhere, Anytime</p>
        </div>
      </div>

      {/* 💬 Help Section */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-3 p-5 bg-pink-50 border border-pink-200 rounded-2xl hover:shadow-sm transition-all">
        <MessageSquare className="w-6 h-6 text-pink-600 mt-1" />
        <p className="text-gray-700 text-sm leading-relaxed">
          Got questions or need help converting links? Join our{" "}
          <a
            href="https://t.me/+2fvOF7WT0YBjZDM9"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 font-medium hover:underline"
          >
            Telegram Community
          </a>{" "}
          to chat, share tips, or get the latest updates on TeraBox downloads.
        </p>
      </div>
    </section>
  );
}

export default WhatIsTerabox;
