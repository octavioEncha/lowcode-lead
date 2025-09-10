import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Feed from "@/components/Feed";
import FeaturesSection from "@/components/FeaturesSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <Feed />
        <FeaturesSection />
      </main>
    </div>
  );
};

export default Index;
