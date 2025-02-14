'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MarketSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.2, // Trigger animation when 20% of the section is visible
  });
  return (
    <div ref={ref}  className="relative bg-gradient-to-br from-black via-gray-900 to-[#3DFF43]/10 py-24 overflow-hidden">
      {/* Grid Pattern Background */}
      <div 
        className="absolute inset-0 z-0 opacity-30"
        
        style={{
          backgroundImage: `linear-gradient(to right, #0f0f0f 1px, transparent 1px),
                           linear-gradient(to bottom, #0f0f0f 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden border-2 border-[#3DFF43]/20">
              <img
                src="https://s3-alpha-sig.figma.com/img/8d9b/d3f1/f8ad05cd104252f2839a63484815876b?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=tMBdFBuGVUupjL1-yhchODFUZl8lVLBD~okJLtejv6I~G90G~-FnkiV1OQuBF6-CydPg~n-SVaKFC~6iM3J1iPbFbP4aGXkAqGEsvthCkZ83IS9kbL-8JrL6xL-9goRloO5bW~cXLXlHJ55SC16POEfO1ITXuTWek-pZR5~azwmW1cfVhULgkt4zjg4ky3W-IJDU4WhM51Fm6kvDorh0S6pyhaMT~9QuS1LH0N6VO3O57XKo53pyAhwhIL0ufQ6YYutV8WzjsnaunRV~SLQyoOcXI7gBFYtVf4w1AOmvLwiqK27GQSoswHw0HFsgryRd4LpWcGyL17-8cDBEEt582Q__"
                alt="Person wearing VR headset"
                className="w-full h-full object-cover"
              />
              {/* Geometric Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent" />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x:0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Market Opportunities
            </h2>
            <p className="text-gray-300 mb-8">
              Blackrose Club Targets The Most Active And Technology Savvy Target Groups In The DACH Region And Will Later
              Expand To More Top Global Markets.
            </p>

            <div className="space-y-6">
              {/* Market Stats */}
              <div className="space-y-4">
                {[
                  {
                    title: 'Market:',
                    description:
                      'Around 65 Million E-Commerce Customers In The DACH Target Open Space. Multiple Dark Store Test Purchases In Germany, Austria And Switzerland With High Demand For Our Products.',
                  },
                  {
                    title: 'Target Group:',
                    description:
                      'The Percentage Of Internet Users In The EU (91%) Target Group Is Growing Constantly (Growing From 75% 2012). The DACH Region Ownership Of Smartphones Is The Age Group 25 To 34 Years.',
                  },
                  {
                    title: 'Blackrose Club:',
                    description:
                      'Support With Connections, Legal Due And Technical Due Diligence, Strategy, Management Setup, Marketing And 24/7 Access',
                  },
                ].map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y:0 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                  >
                    <span className="text-[#3DFF43] font-bold">•</span>
                    <p className="text-gray-300">
                      <span className="font-semibold text-white">{item.title}</span> {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MarketSection;
