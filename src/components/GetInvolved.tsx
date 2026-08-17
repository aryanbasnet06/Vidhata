import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { HandHeart, Users, Building2, Share2, Mail } from "lucide-react";
import { JOIN_US_FORM, PARTNER_FORM } from "../data/constants";

interface GetInvolvedProps {
  hideHeader?: boolean;
}

export function GetInvolved({ hideHeader = false }: GetInvolvedProps) {
  const opportunities = [
    {
      icon: Users,
      title: "Become a Volunteer",
      description:
        "Join our community of 125+ passionate volunteers making a real difference in students' lives.",
      cta: "Apply to Volunteer",
      link: JOIN_US_FORM,
      color: "bg-[#5B8A8D]",
      hoverColor: "hover:bg-[#4a7174]",
    },
    {
      icon: HandHeart,
      title: "Donate",
      description:
        "Your financial support helps us expand our reach and provide quality learning experiences to more students.",
      cta: "Make a Donation",
      link: JOIN_US_FORM,
      color: "bg-[#EA8166]",
      hoverColor: "hover:bg-[#d97359]",
    },
    {
      icon: Building2,
      title: "Partner With Us",
      description:
        "Join our network of 18 partner organizations to create sustainable impact across Nepal.",
      cta: "Become a Partner",
      link: PARTNER_FORM,
      color: "bg-[#F0C78A]",
      hoverColor: "hover:bg-[#e0b77a]",
    },
    {
      icon: Share2,
      title: "Spread the Word",
      description:
        "Help us reach more students and volunteers by sharing our mission with your network.",
      cta: "Share Our Mission",
      link: JOIN_US_FORM,
      color: "bg-[#5B8A8D]",
      hoverColor: "hover:bg-[#4a7174]",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-vidhata-light to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!hideHeader && (
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-vidhata-teal text-base sm:text-lg mb-3 tracking-wide font-semibold uppercase">
              Get Involved
            </h2>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl text-vidhata-navy font-bold mb-4 sm:mb-6">
              Be Part of the Change
            </h3>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              There are many ways to support our mission and help empower
              underserved students across Nepal.
            </p>
          </div>
        )}

        {/* Opportunities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {opportunities.map((opportunity) => {
            const Icon = opportunity.icon;
            return (
              <Card
                key={opportunity.title}
                className="group hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#EA8166]"
              >
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-16 h-16 sm:w-20 sm:h-20 ${opportunity.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg`}
                  >
                    <Icon className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                  </div>
                  <CardTitle className="text-xl sm:text-2xl mb-3">
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
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-vidhata-teal hover:bg-vidhata-teal-dark text-white px-10 py-4 text-lg rounded-xl shadow-lg mx-auto transition-colors"
          >
            <Mail className="w-6 h-6" />
            Send Message
          </Link>
        </div>
      </div>
    </section>
  );
}
