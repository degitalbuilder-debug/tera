import React from "react";
import { DownloadCloud, Globe, Database } from "lucide-react";

export default function WhatIsTeraLinkPlayer() {
  const hosts = [
    "www.mirrobox.com",
    "www.nephobox.com",
    "freeterabox.com",
    "www.freeterabox.com",
    "1024tera.com",
    "4funbox.co",
    "www.4funbox.com",
    "terabox.com",
    "and many more..."
  ];

  return (
    <section className="max-w-5xl mx-auto p-8 text-gray-800 transition-all duration-300">
      {/* Header */}
      <header className="flex items-start gap-4 mb-6">
        <DownloadCloud className="w-8 h-8 text-pink-600 shrink-0" />
        <div>
          <h2 className="text-2xl font-bold">
            What is <span className="text-pink-600">TeraLinkPlayer</span>?
          </h2>
          <p className="text-gray-600 mt-1 text-sm">
            A simple, fast, and secure online tool that converts TeraBox and mirror links into direct download URLs — no login, no software, just click and download.
          </p>
        </div>
      </header>

      {/* Description */}
      <div className="space-y-4 mb-6 leading-relaxed text-base">
        <p>
          <strong className="text-pink-600">TeraLinkPlayer</strong> is designed to save you time. Instead of signing in or installing the TeraBox app, you can copy any shared TeraBox link and instantly get a <strong className="text-orange-500">direct download URL</strong> — ready for your device.
        </p>

        <p className="flex items-start gap-2">
          <Database className="w-5 h-5 text-orange-500 mt-1 shrink-0" />
          <span>
            <strong className="text-orange-500">Privacy first:</strong> We don’t store your files or track your downloads. TeraLinkPlayer simply proxies the request to give you secure, fast access to your files.
          </span>
        </p>

        {/* Example */}
        <p className="text-gray-700">
          <strong>Example:</strong> Suppose a friend shares a 3GB TeraBox video link with you. Normally, downloading would require logging in and navigating the TeraBox interface. With TeraLinkPlayer, you paste the link into our tool and get a direct download URL immediately — one click, no hassle.
        </p>
      </div>

      {/* Supported Hosts */}
      <div className="border-t border-gray-200 pt-5">
        <div className="flex items-center gap-2 mb-3">
          <Globe className="w-5 h-5 text-pink-600" />
          <h3 className="font-semibold text-gray-800">Supported TeraBox Domains</h3>
        </div>

        <ul className="flex flex-wrap gap-2">
          {hosts.map((host, i) => (
            <li
              key={i}
              className="px-3 py-1.5 bg-pink-50 rounded-full text-pink-700 text-sm border border-pink-200 hover:bg-pink-100 transition-all"
            >
              {host}
            </li>
          ))}
        </ul>
      </div>

      {/* SEO-friendly Closing Note */}
      <p className="mt-6 text-sm text-gray-600 text-center">
        <strong>TeraLinkPlayer</strong> makes downloading from TeraBox and its mirror sites faster, easier, and secure. Works with MirroBox, FreeTeraBox, NephoBox, and more — your files, your way.
      </p>
    </section>
  );
}
