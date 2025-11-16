import WhatIsTerabox from "@/components/home/WhatIsTerabox";
import WhatIsTeraLinkPlayer from "@/components/home/WhatIsTeraLinkPlayer";
import HowToDownload from "@/components/home/HowToDownload";
import Disclaimer from "@/components/home/Disclaimer";
import Faq from "@/components/home/Faq";
import Popunder from "@/components/ads/adsterra/Popunder";
import TakeUrl from "@/components/home/TakeUrl";
import UserStats from "@/components/home/UserStats"
export const metadata = {
  title: "TeraLinkPlayer | Free Terabox Video Downloader (No Login Needed)",
  description:
    "Download Terabox videos and files instantly with TeraLinkPlayer. 100% working, fast, secure Terabox downloader that generates direct video links without login.",
  keywords: [
    "Terabox downloader",
    "Terabox video downloader",
    "TeraLinkPlayer",
    "free terabox download",
    "terabox direct link generator",
    "terabox file downloader",
    "download terabox without login",
    "terabox link generator",
    "terabox premium download",
  ],
  authors: [{ name: "TeraLinkPlayer Team" }],
  openGraph: {
    title: "TeraLinkPlayer | Free Terabox Downloader | Fast & Secure",
    description:
      "Generate direct Terabox video and file download links with TeraLinkPlayer — fast, secure, and no login required.",
    url: "https://teralinkplayer.vercel.app",
    siteName: "TeraLinkPlayer",
    images: [
      {
        url: "https://teralinkplayer.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "TeraLinkPlayer | Free Terabox Downloader",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TeraLinkPlayer | Free Terabox Downloader",
    description:
      "Instant Terabox downloader that generates video and file download links. No signup required.",
    images: ["https://teralinkplayer.vercel.app/og-image.png"],
  },
  metadataBase: new URL("https://teralinkplayer.vercel.app"),
  alternates: {
    canonical: "https://teralinkplayer.vercel.app",
  },
};

// ✅ This line ensures the page is built as static HTML and never revalidated
export const dynamic = "force-static";

export default function Home() {
  return (
    <>
      <Popunder />
      <TakeUrl />
      <UserStats/>
      <WhatIsTerabox />
      <WhatIsTeraLinkPlayer />
      <HowToDownload />
      <Disclaimer />
      <Faq />
    </>
  );
}
