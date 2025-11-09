"use client";
import React from "react";
import Script from "next/script";

export default function NativeBanner() {
  return (
    <aside
      className="my-6 mx-auto w-full max-w-[80vw] bg-gray-100 border border-gray-300 rounded-lg shadow-sm p-3 flex flex-col items-center justify-center"
      role="complementary"
      aria-label="Advertisement Section"
      itemScope
      itemType="https://schema.org/WPAdBlock"
    >
      {/* Accessible Ad Label */}
      <div className="w-full text-center mb-2">
        <h4
          className="text-xs uppercase font-semibold tracking-widest text-gray-600"
          itemProp="name"
        >
          Advertisement
        </h4>
        <meta itemProp="description" content="Sponsored advertising content." />
      </div>

      {/* Ad Script */}
      <Script
        id="native-banner-script"
        async
        data-cfasync="false"
        src="//thickmaggot.com/e30d62eb6e7cb2a3aea2261872b65a68/invoke.js"
        strategy="lazyOnload"
      />

      {/* Ad container */}
      <div
        id="container-e30d62eb6e7cb2a3aea2261872b65a68"
        className="w-full flex justify-center items-center"
        role="region"
        aria-label="Ad Content"
      />

      {/* Optional visible tag for user clarity */}
      <p className="text-[10px] text-gray-500 mt-2" aria-hidden="true">
        Sponsored content – supports our website.
      </p>
    </aside>
  );
}
