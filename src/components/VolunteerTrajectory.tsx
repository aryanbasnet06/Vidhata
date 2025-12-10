import { FileText, MessageSquare, Rocket, ArrowRight } from "lucide-react";

export function VolunteerTrajectory() {
  const steps = [
    {
      icon: FileText,
      number: "01",
      title: "Fill Out Application",
      description:
        "Complete our simple Google Form with your details, interests, and availability.",
      color: "from-[#5B8A8D] to-[#4a7174]",
      iconBg: "bg-[#5B8A8D]",
    },
    {
      icon: MessageSquare,
      number: "02",
      title: "Interview Response",
      description:
        "Receive a response for an interview within 48 hours of submitting your application.",
      color: "from-[#EA8166] to-[#d97359]",
      iconBg: "bg-[#EA8166]",
    },
    {
      icon: Rocket,
      number: "03",
      title: "Start Your Journey",
      description:
        "Get matched with a project and start making an impact in students' lives right away.",
      color: "from-[#F0C78A] to-[#e0b77a]",
      iconBg: "bg-[#F0C78A]",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#F0F9F9] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-[#5B8A8D] text-lg mb-3 tracking-wide">
            VOLUNTEER TRAJECTORY
          </h2>
          <h3 className="text-4xl sm:text-5xl text-gray-900 mb-6">
            Your Journey to Making an Impact
          </h3>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Join our community of dedicated volunteers in just three simple
            steps. We make it easy for you to start transforming lives.
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative">
          <div
            className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-[#5B8A8D] via-[#EA8166] to-[#F0C78A] opacity-30"
            style={{ left: "16.66%", right: "16.66%" }}
          />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="relative">
                  <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-t-4 border-transparent hover:border-[#5B8A8D] group h-full">
                    {/* Step Number Badge */}
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-[#5B8A8D] to-[#4a7174] rounded-full flex items-center justify-center text-white shadow-lg">
                      <span className="text-lg">{step.number}</span>
                    </div>

                    {/* Icon */}
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg mx-auto`}
                    >
                      <Icon className="h-10 w-10 text-white" />
                    </div>

                    {/* Content */}
                    <h4 className="text-2xl text-gray-900 mb-4 text-center">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 text-center leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow Between Steps */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-24 -right-6 lg:-right-6 z-10">
                      <ArrowRight className="h-8 w-8 text-[#5B8A8D] opacity-40" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-[#5B8A8D] to-[#4a7174] rounded-2xl p-10 sm:p-12 shadow-2xl">
          <h4 className="text-3xl text-white mb-4">Ready to Get Started?</h4>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Fill out our volunteer application form today and begin your journey
            to making a meaningful difference in students' lives across Nepal.
          </p>

          {/* Apply Now Button (Linked to Google Form) */}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScv_6fRDRiEsQXGr45T3pJVbA-kop2gEB3Dhkte1DnF55Vwcg/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#EA8166] hover:bg-[#d97359] text-white px-10 py-4 rounded-lg text-lg transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2"
          >
            Apply Now
            <ArrowRight className="h-5 w-5" />
          </a>

          <p className="text-white/75 text-sm mt-4">
            ⏱️ You'll hear back from us within 48 hours
          </p>
        </div>
      </div>
    </section>
  );
}
