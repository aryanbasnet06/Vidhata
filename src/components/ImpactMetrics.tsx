"use client";

import { useState, useEffect } from "react";
import { Users, Building2, Heart, Clock } from "lucide-react";

export function ImpactMetrics() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Make it sticky after scrolling down 100vh (full screen height)
      setIsSticky(window.scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const metrics = [
    {
      icon: Users,
      value: "5600+",
      label: "Students Reached",
      color: "bg-[#EA8166]",
    },
    {
      icon: Building2,
      value: "18",
      label: "Partner Organizations",
      color: "bg-[#5B8A8D]",
    },
    {
      icon: Heart,
      value: "128",
      label: "Volunteers Engaged",
      color: "bg-[#F0C78A]",
    },
    {
      icon: Clock,
      value: "450+",
      label: "Lecture Hours",
      color: "bg-[#EA8166]",
    },
  ];

  return (
    <div
      className={`${
        isSticky ? "fixed top-0" : "absolute bottom-0"
      } left-0 right-0 z-30 bg-white/98 backdrop-blur-md border-t border-gray-200 shadow-lg transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <div
                key={metric.label}
                className="flex items-center justify-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-all"
              >
                <div
                  className={`w-10 h-10 ${metric.color} rounded-full flex items-center justify-center flex-shrink-0`}
                >
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-2xl text-[#5B8A8D]">{metric.value}</div>
                  <div className="text-gray-700 text-xs">{metric.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
