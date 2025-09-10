import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-codecraft.jpg";

const HeroSection = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <div className="space-y-8">
          <h1 className="text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight">
            Conecte talentos 
            <span className="gradient-primary bg-clip-text text-transparent"> low-code</span>
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Plataforma onde desenvolvedores showcaseiam projetos e conectam-se com clientes
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-hero px-8 py-3">
              Sou Freelancer
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button className="btn-outline-hero px-8 py-3">
              Quero Contratar
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;