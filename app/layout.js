import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Script from "next/script";

export const metadata = {
  title: "TeraFetch",
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MGJPM53M');
          `}
        </Script>

        {/* Google Search Console Verification */}
        <meta
          name="google-site-verification"
          content="a519RGXXnU8_HDFGvb_9NLkro6BAy_BnCXPq8fhFTkY"
        />
      </head>

      <body className="bg-background">
        {/* Google Tag Manager (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MGJPM53M"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        {/* End Google Tag Manager (noscript) */}

        <Navbar />
        <main className="bg-gradient-to-br from-pink-100 via-pink-200 to-orange-100">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
