"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // List all blog files by slug-matching JSON names
    const blogFiles = [
      "/blog/download-terabox-videos-fast.json",
      "/blog/secure-terabox-downloads.json",
      "/blog/terabox-fast-download-guide.json"
    ];

    Promise.all(blogFiles.map(file => fetch(file).then(res => res.json())))
      .then(data => setBlogs(data))
      .catch(err => console.error("Failed to load blogs", err));
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {blogs.map(blog => (
        <Link key={blog.slug} href={`/blog/${blog.slug}`}>
          <a className="block border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200">
            {blog.seo?.ogImage && (
              <img
                src={blog.seo.ogImage}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
              <p className="text-gray-500 text-sm">{blog.date}</p>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
}
