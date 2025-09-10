import { Shield, Zap, Users, TrendingUp, Star, Clock } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Pagamentos Seguros",
      description: "Sistema de escrow que protege tanto freelancers quanto clientes em todas as transações."
    },
    {
      icon: Zap,
      title: "Projetos Verificados",
      description: "Portfolio verificado por clientes reais, garantindo a qualidade dos trabalhos showcaseados."
    },
    {
      icon: Users,
      title: "Matching Inteligente",
      description: "Algoritmo que conecta freelancers aos projetos perfeitos baseado em skills e histórico."
    },
    {
      icon: TrendingUp,
      title: "Analytics Completo",
      description: "Dashboards detalhados para acompanhar performance, earnings e crescimento profissional."
    },
    {
      icon: Star,
      title: "Sistema de Avaliações",
      description: "Reviews bidirecionais que constroem reputação e confiança na comunidade."
    },
    {
      icon: Clock,
      title: "Entrega Garantida",
      description: "Sistema de marcos e prazos que garante entregas pontuais e qualidade nos projetos."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">
            Porque escolher o CodeCraft?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A plataforma mais completa para conectar talentos low-code/no-code com projetos incríveis
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-card p-6 rounded-xl border border-border card-hover h-full">
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-card p-8 rounded-2xl border border-border max-w-2xl mx-auto">
            <h3 className="font-heading font-bold text-2xl text-foreground mb-4">
              Pronto para começar?
            </h3>
            <p className="text-muted-foreground mb-6">
              Junte-se a mais de 2.500 desenvolvedores que já encontraram sucesso na nossa plataforma
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-hero px-8 py-3">
                Criar Conta Gratuita
              </button>
              <button className="btn-outline-hero px-8 py-3">
                Explorar Projetos
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;