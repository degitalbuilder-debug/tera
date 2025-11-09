"use client";
import React, { useEffect, useRef } from "react";

export default function Banner728x90() {
  const adRef = useRef(null);

  useEffect(() => {
    // Define ad options globally
    window.atOptions = {
      key: "7a7e33e0fd7ab3534750ac1e8574b0bb",
      format: "iframe",
      height: 90,
      width: 728,
      params: {},
    };

    // Create script dynamically
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "//thickmaggot.com/7a7e33e0fd7ab3534750ac1e8574b0bb/invoke.js";
    script.async = true;

    // Append to the placeholder div
    if (adRef.current) {
      adRef.current.innerHTML = "";
      adRef.current.appendChild(script);
    }

    // Cleanup on unmount
    return () => {
      if (adRef.current) adRef.current.innerHTML = "";
    };
  }, []);

  return (
    <aside
      className="hidden lg:flex flex-col items-center justify-center mx-auto mt-6 p-3 bg-gray-100 border border-gray-300 rounded-lg shadow-sm"
      role="complementary"
      aria-label="Advertisement Banner"
      itemScope
      itemType="https://schema.org/WPAdBlock"
      style={{
        width: "min(728px, 80vw)",
        height: "auto",
        minHeight: "120px",
      }}
    >
      {/* Label for SEO + user clarity */}
      <h4
        className="text-xs uppercase font-semibold tracking-widest text-gray-600 mb-2"
        itemProp="name"
      >
        Advertisement
      </h4>
      <meta itemProp="description" content="Sponsored advertising banner content." />

      {/* Ad placeholder */}
      <div
        ref={adRef}
        id="banner-728x90"
        role="region"
        aria-label="Ad Content"
        className="flex justify-center items-center"
        style={{
          width: "min(728px, 80vw)",
          
        }}
      />

      {/* Optional small note for transparency */}
      <p className="text-[10px] text-gray-500 mt-2" aria-hidden="true">
        Sponsored – supports our website.
      </p>
    </aside>
  );
}
