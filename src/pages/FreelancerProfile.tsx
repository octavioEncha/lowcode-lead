import { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { 
  Star, 
  MapPin, 
  Clock, 
  User,
  MessageCircle,
  DollarSign,
  Calendar,
  Award,
  Briefcase,
  Link2,
  Eye,
  Heart,
  ExternalLink
} from "lucide-react";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectAutomation from "@/assets/project-automation.jpg";
import developer1 from "@/assets/developer-1.jpg";
import developer2 from "@/assets/developer-2.jpg";

const FreelancerProfile = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("portfolio");

  // Mock freelancer data
  const freelancer = {
    id: "1",
    name: "Maria Silva",
    avatar: developer1,
    title: "Expert em Bubble & Automações Complexas",
    location: "São Paulo, SP",
    rating: 4.9,
    reviewCount: 127,
    hourlyRate: "R$ 85/hora",
    availability: 'available' as const,
    responseTime: "1 hora",
    skills: ["Bubble", "Zapier", "Stripe", "API Integration", "Database Design", "Webflow", "Notion"],
    completedProjects: 89,
    languages: ["Português", "Inglês"],
    description: `Sou especialista em desenvolvimento de aplicações web complexas usando Bubble com mais de 4 anos de experiência. Minha paixão é transformar ideias em produtos funcionais e escaláveis.

Trabalho principalmente com:
• Desenvolvimento de MVPs e aplicações completas em Bubble
• Integrações avançadas com APIs externas (Stripe, WhatsApp, CRM)
• Automações robustas usando Zapier e Make
• Design de banco de dados otimizado para performance
• Consultoria em arquitetura de projetos no-code

Já ajudei mais de 50 empresas desde startups até corporações a digitalizarem seus processos e criar produtos inovadores. Meu foco é sempre entregar soluções que realmente funcionam na prática, com atenção especial à experiência do usuário e performance.`,
    isTopRated: true,
    isOnline: true,
    memberSince: "Janeiro 2020",
    lastActive: "Online agora",
    socialLinks: {
      website: "https://mariasilva.dev",
      linkedin: "https://linkedin.com/in/mariasilva",
    },
    stats: {
      totalEarnings: "R$ 156.000",
      repeatClients: "85%",
      onTimeDelivery: "98%",
      avgProjectValue: "R$ 3.200"
    },
    portfolio: [
      {
        id: "1",
        title: "Dashboard de E-commerce Completo",
        description: "Sistema completo de gerenciamento de e-commerce com painel de vendas, gestão de produtos, relatórios avançados e integrações com Stripe e WhatsApp.",
        image: projectEcommerce,
        tags: ["Bubble", "E-commerce", "Stripe", "Dashboard"],
        projectType: "E-commerce",
        timeline: "3 semanas",
        isPublic: true,
        stats: { views: 1250, likes: 89, comments: 23 },
        clientFeedback: "Excelente trabalho, superou expectativas!"
      },
      {
        id: "2", 
        title: "Sistema de Automação CRM",
        description: "Automação completa que conecta HubSpot, Slack e Notion para gestão de leads e follow-ups automáticos.",
        image: projectAutomation,
        tags: ["Zapier", "HubSpot", "Slack", "Notion"],
        projectType: "Automação",
        timeline: "2 semanas",
        isPublic: true,
        stats: { views: 890, likes: 67, comments: 15 },
        clientFeedback: "Automação perfeita, economizou horas de trabalho manual."
      },
      {
        id: "3",
        title: "Plataforma de Cursos Online",
        description: "Sistema completo para venda de cursos com área do aluno, pagamentos automáticos e certificados.",
        image: projectEcommerce,
        tags: ["Bubble", "Educação", "Stripe", "Memberstack"],
        projectType: "Educação",
        timeline: "4 semanas",
        isPublic: true,
        stats: { views: 2100, likes: 156, comments: 42 },
        clientFeedback: "Plataforma incrível, alunos adoraram a experiência!"
      }
    ],
    reviews: [
      {
        id: "1",
        client: "João Pedro - CEO TechCommerce",
        rating: 5,
        comment: "Maria é excepcional! Entregou o dashboard de e-commerce exatamente como precisávamos. Comunicação clara, prazos cumpridos e qualidade impecável. Já estamos planejando o próximo projeto juntos.",
        project: "Dashboard E-commerce",
        date: "2 semanas atrás",
        avatar: developer1
      },
      {
        id: "2",
        client: "Ana Costa - Diretora StartupXYZ",
        rating: 5,
        comment: "Trabalho fantástico na automação do nosso CRM. Maria entendeu perfeitamente nossa necessidade e criou uma solução que nos economiza 10 horas semanais. Altamente recomendada!",
        project: "Automação CRM",
        date: "1 mês atrás",
        avatar: developer2
      },
      {
        id: "3",
        client: "Carlos Mendes - Founder EduTech",
        rating: 5,
        comment: "A plataforma de cursos ficou perfeita! Maria foi além do que pedimos, sugerindo melhorias que realmente fizeram diferença. Professional top e muito dedicada.",
        project: "Plataforma de Cursos",
        date: "2 meses atrás",
        avatar: developer1
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Profile Header */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                <div className="flex items-start space-x-6">
                  <div className="relative">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src={freelancer.avatar} alt={freelancer.name} />
                      <AvatarFallback>
                        <User className="h-12 w-12" />
                      </AvatarFallback>
                    </Avatar>
                    {freelancer.isOnline && (
                      <div className="absolute -bottom-1 -right-1 h-6 w-6 bg-success border-2 border-white rounded-full"></div>
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h1 className="font-heading font-bold text-3xl text-foreground">{freelancer.name}</h1>
                      {freelancer.isTopRated && (
                        <Badge className="bg-warning/10 text-warning">
                          <Award className="h-3 w-3 mr-1" />
                          Top Rated
                        </Badge>
                      )}
                      <Badge className="status-available">Disponível</Badge>
                    </div>
                    
                    <p className="text-xl text-muted-foreground mb-4">{freelancer.title}</p>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{freelancer.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-warning fill-current" />
                        <span className="font-medium text-foreground">{freelancer.rating}</span>
                        <span>({freelancer.reviewCount} avaliações)</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Briefcase className="h-4 w-4" />
                        <span>{freelancer.completedProjects} projetos concluídos</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>Responde em {freelancer.responseTime}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {freelancer.skills.slice(0, 6).map((skill, index) => (
                        <Badge key={index} variant="outline">
                          {skill}
                        </Badge>
                      ))}
                      {freelancer.skills.length > 6 && (
                        <Badge variant="outline">+{freelancer.skills.length - 6} mais</Badge>
                      )}
                    </div>

                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span>Membro desde {freelancer.memberSince}</span>
                      <span>•</span>
                      <span className="text-success">{freelancer.lastActive}</span>
                    </div>
                  </div>
                </div>

                {/* Right side - Price and CTA */}
                <div className="lg:w-80 space-y-4">
                  <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl font-bold text-foreground mb-1">
                        {freelancer.hourlyRate}
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">Taxa por hora</p>
                      
                      <div className="space-y-3">
                        <Button className="w-full btn-hero">
                          <MessageCircle className="h-4 w-4 mr-2" />
                          Conversar Agora
                        </Button>
                        <Button variant="outline" className="w-full">
                          Solicitar Orçamento
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-3 text-center">
                    <div className="p-3 bg-muted/30 rounded-lg">
                      <div className="font-semibold text-foreground">{freelancer.stats.onTimeDelivery}</div>
                      <div className="text-sm text-muted-foreground">Entrega no prazo</div>
                    </div>
                    <div className="p-3 bg-muted/30 rounded-lg">
                      <div className="font-semibold text-foreground">{freelancer.stats.repeatClients}</div>
                      <div className="text-sm text-muted-foreground">Clientes recorrentes</div>
                    </div>
                  </div>

                  {/* Social Links */}
                  {freelancer.socialLinks && (
                    <div className="flex space-x-2">
                      {freelancer.socialLinks.website && (
                        <Button variant="outline" size="icon" asChild>
                          <a href={freelancer.socialLinks.website} target="_blank" rel="noopener noreferrer">
                            <Link2 className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                      {freelancer.socialLinks.linkedin && (
                        <Button variant="outline" size="icon" asChild>
                          <a href={freelancer.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                            <Link2 className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Content Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="portfolio">Portfólio ({freelancer.portfolio.length})</TabsTrigger>
              <TabsTrigger value="about">Sobre</TabsTrigger>
              <TabsTrigger value="reviews">Avaliações ({freelancer.reviews.length})</TabsTrigger>
            </TabsList>

            <TabsContent value="portfolio" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {freelancer.portfolio.map((project) => (
                  <Card key={project.id} className="group cursor-pointer card-hover">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <div className="absolute top-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button size="icon" variant="secondary" className="h-8 w-8 bg-white/90 hover:bg-white">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>

                      <div className="absolute top-3 left-3">
                        <Badge variant="secondary" className="bg-white/90 text-foreground">
                          {project.projectType}
                        </Badge>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2 line-clamp-1 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.slice(0, 3).map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>{project.timeline}</span>
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center space-x-1">
                            <Eye className="h-4 w-4" />
                            <span>{project.stats.views}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Heart className="h-4 w-4" />
                            <span>{project.stats.likes}</span>
                          </div>
                        </div>
                      </div>
                      
                      {project.clientFeedback && (
                        <div className="mt-4 pt-4 border-t border-border">
                          <p className="text-sm italic text-muted-foreground">
                            "{project.clientFeedback}"
                          </p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="about" className="mt-8">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Sobre Maria</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="prose prose-slate max-w-none">
                        {freelancer.description.split('\n').map((paragraph, index) => (
                          <p key={index} className="mb-4 text-muted-foreground leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Habilidades</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {freelancer.skills.map((skill, index) => (
                          <Badge key={index} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Estatísticas</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Total Faturado</span>
                        <span className="font-semibold">{freelancer.stats.totalEarnings}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Valor Médio/Projeto</span>
                        <span className="font-semibold">{freelancer.stats.avgProjectValue}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Clientes Recorrentes</span>
                        <span className="font-semibold">{freelancer.stats.repeatClients}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Entrega no Prazo</span>
                        <span className="font-semibold">{freelancer.stats.onTimeDelivery}</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Idiomas</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {freelancer.languages.map((language, index) => (
                          <div key={index} className="flex justify-between">
                            <span>{language}</span>
                            <span className="text-sm text-muted-foreground">Fluente</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="reviews" className="mt-8">
              <div className="space-y-6">
                {freelancer.reviews.map((review) => (
                  <Card key={review.id}>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={review.avatar} alt={review.client} />
                          <AvatarFallback>
                            <User className="h-6 w-6" />
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <h4 className="font-semibold">{review.client}</h4>
                              <p className="text-sm text-muted-foreground">{review.project} • {review.date}</p>
                            </div>
                            <div className="flex items-center space-x-1">
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  className={`h-4 w-4 ${i < review.rating ? 'text-warning fill-current' : 'text-muted-foreground'}`} 
                                />
                              ))}
                            </div>
                          </div>
                          <p className="text-muted-foreground leading-relaxed">{review.comment}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default FreelancerProfile;