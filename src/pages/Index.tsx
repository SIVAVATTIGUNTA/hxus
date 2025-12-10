import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustSection } from "@/components/home/TrustSection";
import { PlatformSection } from "@/components/home/PlatformSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { SolutionsSection } from "@/components/home/SolutionsSection";
import { WhyUsSection } from "@/components/home/WhyUsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { ShowcaseSection } from "@/components/home/ShowcaseSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <TrustSection />
      <ShowcaseSection />
      <PlatformSection />
      <ServicesSection />
      <SolutionsSection />
      <WhyUsSection />
      <TestimonialsSection />
    </Layout>
  );
};

export default Index;
