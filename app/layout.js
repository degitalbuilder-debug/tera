import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Script from "next/script";

export const metadata = {
  title: "Teralinkplayer | Watch & Download Terabox Videos Online (No Login)",
  description:
    "Paste your Terabox link and instantly watch or download videos without login. Fast, secure, 100% working Terabox online player & downloader.",
  keywords: [
    "terabox player",
    "terabox downloader",
    "terabox online player",
    "terabox video downloader",
    "terabox link player",
    "watch terabox without login",
    "terabox direct link generator",
    "terabox file player",
  ],
  authors: [{ name: "Teralinkplayer Team" }],
  metadataBase: new URL("https://teralinkplayer.vercel.app"),
  alternates: {
    canonical: "https://teralinkplayer.vercel.app",
  },

  openGraph: {
    title: "Teralinkplayer | Watch Terabox Videos Without Login",
    description:
      "Play or download Terabox videos instantly using Teralinkplayer. No account needed — fast & secure.",
    url: "https://teralinkplayer.vercel.app",
    siteName: "Teralinkplayer",
    images: [
      {
        url: "https://teralinkplayer.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Teralinkplayer Online Terabox Player",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Teralinkplayer | Terabox Online Player",
    description:
      "Paste Terabox link → Watch instantly. No login needed. Fast Terabox video player.",
    images: ["https://teralinkplayer.vercel.app/og-image.png"],
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
            })(window,document,'script','dataLayer','GTM-N2BC5WZF');
          `}
        </Script>

        {/* Google Search Console */}
        <meta
          name="google-site-verification"
          content="a519RGXXnU8_HDFGvb_9NLkro6BAy_BnCXPq8fhFTkY"
        />

        {/* JSON-LD Schema for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Teralinkplayer",
              url: "https://teralinkplayer.vercel.app",
              applicationCategory: "Utility",
              operatingSystem: "All",
              description:
                "Watch and download Terabox videos without login using Teralinkplayer.",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "INR",
              },
            }),
          }}
        />
      </head>

      <body className="bg-background">
        {/* GTM noscript */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N2BC5WZF"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />

        <Navbar />

        <main className="bg-gradient-to-br from-pink-100 via-pink-200 to-orange-100">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
