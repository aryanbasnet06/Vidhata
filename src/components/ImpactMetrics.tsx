import { useEffect, useRef, useState } from "react";
import { Users, Building2, Heart, Clock } from "lucide-react";

function AnimatedCounter({
  target,
  duration = 2000,
}: {
  target: number;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTime: number | null = null;

          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeOut * target));
            if (progress < 1) requestAnimationFrame(animate);
            else setCount(target);
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

interface ImpactMetricsProps {
  variant?: "section" | "compact";
  className?: string;
}

export function ImpactMetrics({ variant = "section", className = "" }: ImpactMetricsProps) {
  const metrics = [
    {
      icon: Users,
      value: 12000,
      suffix: "+",
      label: "Students Reached",
      iconBg: "bg-vidhata-coral",
    },
    {
      icon: Building2,
      value: 30,
      suffix: "",
      label: "Partner Organizations",
      iconBg: "bg-vidhata-teal",
    },
    {
      icon: Heart,
      value: 128,
      suffix: "",
      label: "Volunteers Engaged",
      iconBg: "bg-vidhata-yellow",
    },
    {
      icon: Clock,
      value: 450,
      suffix: "+",
      label: "Lecture Hours",
      iconBg: "bg-vidhata-coral",
    },
  ];

  if (variant === "compact") {
    return (
      <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 ${className}`}>
        {metrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <div key={metric.label} className="text-center p-4">
              <div
                className={`w-11 h-11 ${metric.iconBg} rounded-full flex items-center justify-center mx-auto mb-3`}
              >
                <Icon className="h-5 w-5 text-white" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-vidhata-teal">
                <AnimatedCounter target={metric.value} />
                {metric.suffix}
              </div>
              <div className="text-gray-600 text-sm mt-1">{metric.label}</div>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <section className={`py-12 sm:py-16 lg:py-20 bg-white ${className}`} aria-label="Impact metrics">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={metric.label}
                className="group flex flex-col items-center text-center p-4 sm:p-6 rounded-2xl hover:bg-vidhata-light/50 transition-colors duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`w-14 h-14 sm:w-16 sm:h-16 ${metric.iconBg} rounded-full flex items-center justify-center mb-4 sm:mb-5 shadow-md group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                </div>

                <div className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-vidhata-teal leading-none mb-2">
                  <AnimatedCounter target={metric.value} />
                  {metric.suffix}
                </div>

                <div className="text-gray-700 text-sm sm:text-base font-medium">
                  {metric.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
