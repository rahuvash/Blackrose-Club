"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Nikolaus Schmiederger",
    position: "Founder / CEO",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    name: "John Smith",
    position: "CTO",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    position: "Head of Marketing",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
  },
  {
    id: 4,
    name: "Michael Chen",
    position: "Lead Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
  },
  {
    id: 5,
    name: "David Wilson",
    position: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80",
  },
];

const TeamSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1));
  };

  const getPosition = (index: number) => {
    const totalMembers = teamMembers.length;
    const radius = 200; // Adjust this value to change the circle size
    const angleStep = (2 * Math.PI) / totalMembers;
    const angle =
      angleStep * ((index - activeIndex + totalMembers) % totalMembers);

    return {
      x: radius * Math.cos(angle - Math.PI / 2),
      y: radius * Math.sin(angle - Math.PI / 2),
      scale: index === activeIndex ? 1.2 : 0.8,
      zIndex: index === activeIndex ? 10 : 1,
    };
  };

  return (
    <div
      className="relative min-h-screen bg-[#0A0A0A] py-24 overflow-hidden "
      style={{
        backgroundImage:
          "url(https://s3-alpha-sig.figma.com/img/9c21/988d/a88e39960cdb3d07194580d6345f6a58?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=j0~uI8iJGjtVIpI8TCly-hLshWS00GsGrsmzj9w5BDXSyo1Q8-98KxSllpytXtjPWCfjClLvtG~3o4sD8ShFoXzqypQNTU2R89frl-eGfKOkEix1QsWsaWp0-WgWDEboXLKmcMUuVGoYWp94tA8On1MaFrMQSHOfrsN8XcLs-wDwlkebY-odTGpG6vGVe-69NDQmLOAWPDfloGehNoZV2LrHQHQ7GvKRSw2z3qPr1pe6LdhplTmz7ADFhdN-bBxVdbO21i4tx4btUNJLf22z7cfQ6wQ~JrF5djnR5yzptSeDIQ7-SAkVKmMD2y8OOWLnIYAlzlg6R6b0U54aICAYKA__",
      }}
    >
      {" "}
      {/* Background Image with Opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center before:absolute before:inset-0 before:bg-black/70"
        style={{
          backgroundImage:
            "url(https://s3-alpha-sig.figma.com/img/9c21/988d/a88e39960cdb3d07194580d6345f6a58?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=j0~uI8iJGjtVIpI8TCly-hLshWS00GsGrsmzj9w5BDXSyo1Q8-98KxSllpytXtjPWCfjClLvtG~3o4sD8ShFoXzqypQNTU2R89frl-eGfKOkEix1QsWsaWp0-WgWDEboXLKmcMUuVGoYWp94tA8On1MaFrMQSHOfrsN8XcLs-wDwlkebY-odTGpG6vGVe-69NDQmLOAWPDfloGehNoZV2LrHQHQ7GvKRSw2z3qPr1pe6LdhplTmz7ADFhdN-bBxVdbO21i4tx4btUNJLf22z7cfQ6wQ~JrF5djnR5yzptSeDIQ7-SAkVKmMD2y8OOWLnIYAlzlg6R6b0U54aICAYKA__",
        }}
      ></div>
      {/* Background Pattern */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-white mb-6">Team Members</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            We Provide A Secure And Efficient Key Management Solution Ensuring
            Convenient Access And Peace Of Mind For Individuals And Businesses.
            Simplify Your Key Handling With Our Reliable Key Duplication,
            Storage, And Tracking Services.
          </p>
        </div>

        {/* Team Circle */}
        <div className="relative h-[600px]">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            {teamMembers.map((member, index) => {
              const pos = getPosition(index);
              return (
                <div
                  key={member.id}
                  className="absolute transition-all duration-500 ease-in-out"
                  style={{
                    transform: `translate(${pos.x}px, ${pos.y}px) scale(${pos.scale})`,
                    zIndex: pos.zIndex,
                  }}
                >
                  <div
                    className={`relative group ${
                      index === activeIndex ? "active" : ""
                    }`}
                  >
                    <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#3DFF43]/20">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {index === activeIndex && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 text-center w-48">
                        <h3 className="text-[#3DFF43] font-semibold">
                          {member.name}
                        </h3>
                        <p className="text-gray-400 text-sm">
                          {member.position}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Buttons Inside the Circle */}
          <div className="absolute left-1/2 top-1/2 -translate-x-[5%] -translate-y-[1%] flex gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrevious}
              className="bg-black/50 border-[#3DFF43]/20 hover:bg-[#3DFF43]/10"
            >
              <ChevronLeft className="h-6 w-6 text-[#3DFF43]" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              className="bg-black/50 border-[#3DFF43]/20 hover:bg-[#3DFF43]/10"
            >
              <ChevronRight className="h-6 w-6 text-[#3DFF43]" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
