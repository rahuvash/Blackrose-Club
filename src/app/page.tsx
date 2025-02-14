import DocumentsSection from "@/components/DocumentsSection";
import HeroSection from '@/components/HeroSection';
import MarketSection from '@/components/MarketSection';
import ServicesSection from '@/components/ServicesSection';
import TeamSection from '@/components/TeamSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection/>
      <MarketSection/>
      <TeamSection/>
     <DocumentsSection/>

    </main>
  );
}