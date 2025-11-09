import WhatIsTerabox from "@/components/home/WhatIsTerabox";
import WhatIsTeraboxNetlify from "@/components/home/WhatIsTeraboxNetlify";
import HowToDownload from "@/components/home/HowToDownload";
import Disclaimer from "@/components/home/Disclaimer";
import Faq from "@/components/home/Faq";
import Popunder from "@/components/ads/adsterra/Popunder";
import TakeUrl from "@/components/home/TakeUrl";

export const metadata = {
  title: "TeraFetch | Free TeraBox Video & File Downloader (100% Working)",
  description:
    "Download TeraBox videos and files instantly with Terafetch. 100% working, fast, secure, and ad-free TeraBox downloader that generates direct download links in seconds.",
  keywords: [
    "TeraBox downloader",
    "TeraBox video downloader",
    "Terafetch",
    "free terabox download",
    "terabox direct link generator",
    "terabox file downloader",
    "download terabox without login",
    "terabox link generator",
    "terabox premium download",
  ],
  authors: [{ name: "Terafetch Team" }],
  openGraph: {
    title: "Terafetch | Free TeraBox Downloader | Fast & Secure",
    description:
      "Generate direct download links for TeraBox videos and files with Terafetch. Fast, secure, and easy to use — no login required.",
    url: "https://terafetch.netlify.app",
    siteName: "Terafetch",
    images: [
      {
        url: "https://terafetch.netlify.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Terafetch | Free TeraBox Downloader",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terafetch | Free TeraBox Downloader",
    description:
      "Download videos and files from TeraBox instantly using Terafetch | 100% working and secure.",
    images: ["https://terafetch.netlify.app/og-image.png"],
  },
  metadataBase: new URL("https://terafetch.netlify.app"),
  alternates: {
    canonical: "https://terafetch.netlify.app",
  },
};

// ✅ This line ensures the page is built as static HTML and never revalidated
export const dynamic = "force-static";

export default function Home() {
  return (
    <>
      <Popunder />
      <TakeUrl />
      <WhatIsTerabox />
      <WhatIsTeraboxNetlify />
      <HowToDownload />
      <Disclaimer />
      <Faq />
    </>
  );
}
