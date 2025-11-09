import React from "react";

export default function LoadingVideo() {
  return (
    <div className="w-full h-[50vh] border border-black flex items-center justify-center rounded-2xl bg-gradient-to-br from-gray-200/70 to-gray-300/50 dark:from-gray-800/60 dark:to-gray-700/40 relative overflow-hidden">
      <div className="absolute inset-0 animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="flex flex-col items-center gap-3 z-10 text-center">
        <div className="w-14 h-14 rounded-full border-4 border-gray-400/40 border-t-gray-600 dark:border-t-gray-100 animate-spin" />
        <p className="text-gray-600 dark:text-gray-300 text-lg font-semibold tracking-wide">
          Loading your video... 🎥
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          Please wait a moment
        </p>
      </div>

      
    </div>
  );
}
