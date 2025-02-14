"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-[#0A0A0A] overflow-hidden">
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        style={{
          backgroundImage: `url(
            "https://s3-alpha-sig.figma.com/img/be12/ec29/2e8ccd32114acb6620dd808bf800d5f2?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fEqZ63xtRodNEsJPi5IUgV7wYuyPdRt4hricBtToyV6YbvVPHLd2~FlQtqLbj9gEA8ueDJodHk5qp04mSFsZ98tEnryxsRY7Yhpq-9q19Ebb7VmWgLg-dhXv7IH5QPEbDlnKaB0~QpHY9ipm-ZqNwIC8LPuGg1auFHpT3~ICWIZTK46pgMcrqSt3btPHh-6ptsetvAgfIn6G4CXqEQlfCVCUS~virStRjvKiKP5bZtv5cy~BWUCJxkN-uUgLjFBu7qYF72CO2f93-izEi4szhrcaZ1UdJOesUsi8qCwl99ZVy5yYRsvhppebMjXLexzyHGg8nn16qmBibCAA-jw-xA__"
          )`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Green Gradient Circle Background */}
        <motion.div
          className="absolute inset-0 flex justify-center items-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div className="w-96 h-96 md:w-[500px] md:h-[500px] bg-green-500 opacity-30 rounded-full blur-3xl" />
        </motion.div>

        {/* Hero Text */}
        <motion.div
          className="relative text-center mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Seize Early <br />
            Opportunities In The{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
              Metaverses
            </span>{" "}
            For <br />
            Business & Leisure
          </h1>
          <p className="text-gray-300 max-w-3xl mx-auto mb-8">
            You Can Shop Your Favorite Products, Join And Organize Culture And
            Sports Events, Sell Your Products In Your Own Metaverse, And Join
            Web3 In An Innovative Growth Market
          </p>
          <div className="flex justify-center gap-4">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button className="bg-[#3DFF43] text-black hover:bg-[#32CC36] transition-colors">
                Explore Services
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="outline"
                className="text-white border-white hover:bg-white/10"
              >
                Contact us
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Membership Cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 p-10 rounded-lg"
          style={{
            backgroundImage: `url('https://s3-alpha-sig.figma.com/img/1d53/4b92/a73b992edcf25d3fb193e3c073918f88?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=JOakyac6mvGadeE2ZA7VMYG68FuJUsybz7FjqgtArqc~W~vBE3Kty5Ao2RKlBtMqE96QedX-oVF26c8mdV~c1V8AhjKUVCZgRUSnv2bseN8aBWaYr5G7pyyuJtZbILHL4olvC14MLym-TLcFyFOypMZQwVACUkBd7-GfkbXhBvpClKB2DnzmWxRhvdV-3pucRcjNtCdPhvWItn55~s8VHY9JdSIKk2yJrCuY6rcSQ07JS8igEwvQerKYiwR3DGeptrY2dKPyuOI6qI3K621ClddtAoV3y7DCRa~UlUxDkDISAxjHTx6300EHr154EGSgvZHiiPoc1traTX6zHMDZAg__')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {[
            {
              title: "Become an Investor",
              desc: "Discuss investment opportunities with us.",
            },
            {
              title: "Become a Club Member",
              desc: "Exclusive benefits for club members.",
            },
            {
              title: "Become a Shop Owner",
              desc: "Sell your products in the metaverse.",
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
            >
              <Card className="bg-black/60 border border-green-500/20 p-6 backdrop-blur-sm text-white hover:scale-105 transition-transform h-72 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-4">{card.title}</h3>
                  <p className="text-sm text-gray-400">{card.desc}</p>
                </div>
                <Button
                  variant="link"
                  className="text-[#3DFF43] p-0 h-auto font-semibold"
                >
                  See Explained <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
