import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { HandHeart, Users, Building2, Share2, Mail } from "lucide-react";

export function GetInvolved() {
  const volunteerForm =
    "https://docs.google.com/forms/d/e/1FAIpQLScv_6fRDRiEsQXGr45T3pJVbA-kop2gEB3Dhkte1DnF55Vwcg/viewform?usp=dialog";

  const partnerForm = "https://forms.gle/bStA2ruSWQuLZ3sK9";

  const opportunities = [
    {
      icon: Users,
      title: "Become a Volunteer",
      description:
        "Join our community of 125+ passionate volunteers making a real difference in students' lives.",
      cta: "Apply to Volunteer",
      link: volunteerForm,
      color: "bg-[#5B8A8D]",
      hoverColor: "hover:bg-[#4a7174]",
    },
    {
      icon: HandHeart,
      title: "Donate",
      description:
        "Your financial support helps us expand our reach and provide quality learning experiences to more students.",
      cta: "Make a Donation",
      link: volunteerForm,
      color: "bg-[#EA8166]",
      hoverColor: "hover:bg-[#d97359]",
    },
    {
      icon: Building2,
      title: "Partner With Us",
      description:
        "Join our network of 18 partner organizations to create sustainable impact across Nepal.",
      cta: "Become a Partner",
      link: partnerForm, // ✅ Correct partner link
      color: "bg-[#F0C78A]",
      hoverColor: "hover:bg-[#e0b77a]",
    },
    {
      icon: Share2,
      title: "Spread the Word",
      description:
        "Help us reach more students and volunteers by sharing our mission with your network.",
      cta: "Share Our Mission",
      link: volunteerForm,
      color: "bg-[#5B8A8D]",
      hoverColor: "hover:bg-[#4a7174]",
    },
  ];

  return (
    <section
      id="get-involved"
      className="py-20 bg-gradient-to-b from-[#F0F9F9] to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[#5B8A8D] text-lg mb-3 tracking-wide">
            GET INVOLVED
          </h2>
          <h3 className="text-4xl sm:text-5xl text-gray-900 mb-6">
            Be Part of the Change
          </h3>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            There are many ways to support our mission and help empower
            underserved students across Nepal.
          </p>
        </div>

        {/* Opportunities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {opportunities.map((opportunity) => {
            const Icon = opportunity.icon;
            return (
              <Card
                key={opportunity.title}
                className="group hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#EA8166]"
              >
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-20 h-20 ${opportunity.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg`}
                  >
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl mb-3">
                    {opportunity.title}
                  </CardTitle>
                  <CardDescription className="text-base text-gray-600">
                    {opportunity.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="text-center">
                  <Button
                    onClick={() => window.open(opportunity.link, "_blank")}
                    className={`${opportunity.color} ${opportunity.hoverColor} text-white w-full sm:w-auto px-8 py-6 text-base shadow-lg hover:shadow-xl transition-all`}
                  >
                    {opportunity.cta}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Send Message */}
        <div className="text-center">
          <Button
            onClick={() => window.open(volunteerForm, "_blank")}
            className="bg-[#5B8A8D] hover:bg-[#4a7174] text-white px-10 py-6 text-lg rounded-xl shadow-lg flex items-center gap-3 mx-auto"
          >
            <Mail className="w-6 h-6" />
            Send Message
          </Button>
        </div>
      </div>
    </section>
  );
}
