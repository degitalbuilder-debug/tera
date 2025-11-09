"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { MdDelete } from "react-icons/md";

export default function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("videoHistory")) || [];
    setHistory(saved);
  }, []);

  // ✅ Delete a single history item
  const handleDelete = (index) => {
    const updated = history.filter((_, i) => i !== index);
    setHistory(updated);
    localStorage.setItem("videoHistory", JSON.stringify(updated));
  };

  // ✅ Delete all history (with confirmation)
  const handleClearAll = () => {
    const confirmed = window.confirm("Are you sure you want to delete all history?");
    if (confirmed) {
      localStorage.removeItem("videoHistory");
      setHistory([]);
    }
  };

  if (history.length === 0) {
    return (
      <div className="text-center py-10 text-gray-600 dark:text-gray-400">
        No download history yet.
      </div>
    );
  }

  return (
    <div id="history" className="max-w-6xl bg-red-300 rounded-md mt-10 mx-auto px-4 py-10">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
        <h2 className="text-3xl font-bold text-center sm:text-left">Download History</h2>
        <button
          onClick={handleClearAll}
          className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-red-600 hover:bg-red-700 text-white font-medium transition-all duration-200 shadow-sm"
        >
          <MdDelete className="text-lg" /> Clear All
        </button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {history.map((item, index) => (
          <div
            key={index}
            className="relative border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800"
          >
            {/* Delete Button for single item */}
            <button
              onClick={(e) => {
                e.preventDefault();
                handleDelete(index);
              }}
              className="absolute bottom-2 right-2 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full shadow-sm transition-all duration-200"
              title="Delete from history"
            >
              <MdDelete className="text-lg" />
            </button>

            {/* Clickable Card */}
            <Link
              href={`/download?url=${encodeURIComponent(item.url)}`}
              className="block"
            >
              <div className="aspect-video bg-gray-100 dark:bg-gray-700">
                {item.thumbnail ? (
                  <img
                    src={item.thumbnail}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-400 text-sm">
                    No preview
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 truncate">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  {new Date(item.date).toLocaleString()}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
