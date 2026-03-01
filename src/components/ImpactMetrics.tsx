"use client";

import { Users, Building2, Heart, Clock } from "lucide-react";

export function ImpactMetrics() {
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
    <div className="absolute bottom-0 left-0 right-0 z-30 bg-white/98 backdrop-blur-md border-t border-gray-200 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6">
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {metrics.map((metric) => {
            const Icon = metric.icon;

            return (
              <div
                key={metric.label}
                className="flex items-center justify-center sm:justify-start gap-3 p-3 sm:p-4 rounded-lg hover:bg-gray-50 transition-all"
              >
                {/* Icon */}
                <div
                  className={`w-10 h-10 sm:w-11 sm:h-11 ${metric.color} rounded-full flex items-center justify-center flex-shrink-0`}
                >
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>

                {/* Text */}
                <div className="text-center sm:text-left">
                  <div className="text-xl sm:text-2xl lg:text-2xl text-[#5B8A8D] font-medium leading-tight">
                    {metric.value}
                  </div>
                  <div className="text-gray-700 text-xs sm:text-sm">
                    {metric.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
