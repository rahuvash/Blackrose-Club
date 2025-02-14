'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { User, Settings, DollarSign, Share2 } from 'lucide-react';

const ServicesSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.2, // Trigger animation when 20% of the section is visible
  });

  return (
    <div ref={ref} className="relative min-h-screen bg-[#0A0A0A] py-24 overflow-hidden">
      {/* Curved Line SVG */}
      <motion.div
        className="absolute left-1/4 top-1/2 w-1/2 h-1/2 opacity-20"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1.5 }}
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M 10,50 C 40,10 90,90 140,50 C 190,10 140,150 190,150"
            stroke="#3DFF43"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          {/* Left Column - Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Key Services
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              We provide a secure and efficient key management solution, ensuring convenient access and peace of
              mind for individuals and businesses. Simplify your key handling with our reliable key duplication,
              storage, and tracking services.
            </p>
            <Button className="bg-[#3DFF43] text-black hover:bg-[#32CC36] transition-colors">
              Explore Services
            </Button>
          </div>

          {/* Right Column - Service Cards */}
          <div className="space-y-6">
            {[
              { title: 'Individualization', icon: <User />, delay: 0 },
              { title: 'User Created Content', icon: <Settings />, delay: 0.2 },
              { title: 'Income Opportunities', icon: <DollarSign />, delay: 0.4 },
              { title: 'Social Media', icon: <Share2 />, delay: 0.6 },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-black/40 border border-gray-800 rounded-lg p-6 backdrop-blur-sm hover:border-green-500/30 transition-colors"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: service.delay }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-white/5 rounded-lg text-[#3DFF43]">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-400">
                      Unlock limitless possibilities in the Metaverse - a space merging business and leisure. Be among
                      the pioneers.
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesSection;
