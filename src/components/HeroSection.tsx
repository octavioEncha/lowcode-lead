import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-codecraft.jpg";

const HeroSection = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-primary/5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium">
                <TrendingUp className="h-4 w-4" />
                <span>Plataforma em crescimento exponencial</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-heading font-bold text-foreground leading-tight">
                O marketplace que conecta 
                <span className="gradient-primary bg-clip-text text-transparent"> talentos</span>
                <br />
                <span className="text-secondary">low-code</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                Showcaseie seus projetos incríveis e conecte-se com clientes que precisam de soluções em 
                <strong className="text-primary"> Bubble, Webflow, Zapier, Notion</strong> e muito mais.
              </p>
            </div>

            {/* Dual CTA */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="btn-hero text-lg px-8 py-4 h-auto">
                  Começar como Freelancer
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button className="btn-outline-hero text-lg px-8 py-4 h-auto">
                  Contratar Desenvolvedores
                </Button>
              </div>
              
              <p className="text-sm text-muted-foreground">
                ✨ Cadastro gratuito • ⚡ Comece em 2 minutos • 🚀 Sem taxas iniciais
              </p>
            </div>

            {/* Social Proof */}
            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">2.5k+</div>
                <div className="text-sm text-muted-foreground">Desenvolvedores</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">850+</div>
                <div className="text-sm text-muted-foreground">Projetos</div>
              </div>
              <div className="text-center">
                <div className="flex items-center space-x-1">
                  <span className="text-2xl font-bold text-foreground">4.9</span>
                  <Star className="h-5 w-5 text-warning fill-current" />
                </div>
                <div className="text-sm text-muted-foreground">Avaliação média</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="CodeCraft Marketplace - Desenvolvedores Low-Code" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Stats Cards */}
            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-lg border border-border">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-success/10 rounded-lg">
                  <Users className="h-5 w-5 text-success" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">145 freelancers</div>
                  <div className="text-xs text-muted-foreground">online agora</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-card p-4 rounded-xl shadow-lg border border-border">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-warning/10 rounded-lg">
                  <TrendingUp className="h-5 w-5 text-warning" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">R$ 2.3M+</div>
                  <div className="text-xs text-muted-foreground">pagos aos freelancers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;