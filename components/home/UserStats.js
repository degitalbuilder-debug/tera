import React from "react";
import { Users, Activity, Star } from "lucide-react";

export default function UserStats() {
  const stats = [
    {
      icon: <Users className="w-6 h-6 text-pink-500" />,
      value: "300+",
      label: "Daily Visitors"
    },
    {
      icon: <Activity className="w-6 h-6 text-orange-500" />,
      value: "2k+",
      label: "Daily Downloads"
    },
    {
      icon: <Star className="w-6 h-6 text-yellow-400" />,
      value: "5k+",
      label: "Happy Users"
    },
    {
      icon: <Users className="w-6 h-6 text-pink-400" />,
      value: "10k+",
      label: "Monthly Active Users"
    }
  ];

  return (
    <section className="max-w-5xl mx-auto p-8 transition-all">
      <header className="flex items-center gap-3 mb-6">
        <Star className="w-7 h-7 text-yellow-400" />
        <h2 className="text-2xl font-bold text-pink-600">User Testimonials & Stats</h2>
      </header>

      <p className="mb-6 text-gray-700 leading-relaxed">
        Thousands of users trust <strong className="text-pink-600">TeraLinkPlayer</strong> every day to download files from TeraBox quickly and securely. Here’s a glimpse of our daily impact:
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center p-5 bg-white/20 rounded-2xl border border-pink-100 hover:shadow-pink-200 transition-all"
          >
            <div className="mb-3">{stat.icon}</div>
            <h3 className="text-2xl font-bold text-pink-600">{stat.value}</h3>
            <p className="text-gray-700 font-medium">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 text-gray-700 text-sm text-center">
        Join thousands of satisfied users who rely on TeraLinkPlayer for fast, hassle-free downloads every day!
      </div>
    </section>
  );
}
