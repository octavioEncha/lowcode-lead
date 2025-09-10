import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-codecraft.jpg";

const HeroSection = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <div className="space-y-8">
          <h1 className="text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight">
            Encontre Especialistas 
            <span className="gradient-primary bg-clip-text text-transparent"> Para Desenvolver Seu Projeto</span>
          </h1>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;