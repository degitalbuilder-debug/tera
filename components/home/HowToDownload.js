import React from "react";
import { Link as LinkIcon, ClipboardPaste, Download, Server } from "lucide-react";

function HowToDownload() {
  const steps = [
    {
      icon: <LinkIcon className="w-6 h-6 text-pink-600" />,
      title: "Copy the TeraBox Link",
      desc: "Find the TeraBox link of any video, file, or image you want to download. This could be shared via Telegram, WhatsApp, or any online post.",
      img: "https://res.cloudinary.com/dgp04dpun/image/upload/v1763065820/aktu%20brand/xdpxlnlqaungbxjncjad.png"
    },
    {
      icon: <ClipboardPaste className="w-6 h-6 text-orange-500" />,
      title: "Paste the Link in TeraLinkPlayer",
      desc: "Go to TeraLinkPlayer and paste the copied URL into the input box. Our system instantly detects your file and prepares it for download.",
      img: "https://res.cloudinary.com/dgp04dpun/image/upload/v1763065895/aktu%20brand/ybihrk9175leomxipnwj.png"
    },
    {
      icon: <Download className="w-6 h-6 text-pink-500" />,
      title: "Click Download",
      desc: "Once the file preview appears, click the download button. Your video, image, or file will start downloading directly — fast and hassle-free.",
      img: "https://res.cloudinary.com/dgp04dpun/image/upload/v1763065935/aktu%20brand/qs4uodpnwdtks6n3bakh.png"
    }
  ];

  return (
    <section className="max-w-5xl mx-auto p-8 transition-all">
      {/* Header */}
      <header className="flex items-center gap-3 mb-6">
        <Server className="w-7 h-7 text-pink-600" />
        <h2 className="text-2xl font-bold">
          How to Download Files or Videos from TeraBox using{" "}
          <span className="text-pink-600">TeraLinkPlayer</span>
        </h2>
      </header>

      <p className="mb-6 leading-relaxed text-gray-700">
        <strong className="text-pink-600">TeraLinkPlayer</strong> makes downloading from TeraBox fast, simple, and secure — no login or app installation required. Just follow these easy steps to get your files in seconds:
      </p>

      {/* Steps */}
      <div className="space-y-8">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col md:flex-row items-start gap-6 bg-pink-50 p-5 rounded-xl border border-pink-100 hover:border-pink-300 hover:shadow-pink-200 transition-all">
            <div className="flex-shrink-0 mt-1">{step.icon}</div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-pink-700 mb-2">
                Step {index + 1}: {step.title}
              </h3>
              <p className="text-gray-700 text-sm mb-3">{step.desc}</p>
              <img
                src={step.img}
                alt={step.title}
                className="rounded-lg border border-gray-200 shadow-sm max-w-full"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Help Note */}
      <p className="mt-6 text-sm text-gray-600">
        Facing issues or need guidance? Join our Telegram community:{" "}
        <a
          href="https://t.me/+2fvOF7WT0YBjZDM9"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-600 font-medium hover:underline"
        >
          Join Telegram For Update.
        </a>
      </p>
    </section>
  );
}

export default HowToDownload;
