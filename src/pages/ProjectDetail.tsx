import { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { 
  Heart, 
  Eye, 
  MessageCircle, 
  ExternalLink, 
  Star, 
  User,
  Clock,
  DollarSign,
  Share,
  Bookmark
} from "lucide-react";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import developer1 from "@/assets/developer-1.jpg";

const ProjectDetail = () => {
  const { id } = useParams();
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  // Mock project data
  const project = {
    id: "1",
    title: "Dashboard de E-commerce Completo (Bubble)",
    description: "Sistema completo de gerenciamento de e-commerce desenvolvido em Bubble, incluindo painel de vendas em tempo real, gestão avançada de produtos com categorização automática, relatórios detalhados com gráficos interativos e integrações robustas com Stripe para pagamentos e WhatsApp Business para atendimento ao cliente.\n\nO sistema conta com funcionalidades avançadas como:\n\n• Dashboard executivo com métricas em tempo real\n• Gestão completa de produtos e estoque\n• Sistema de pedidos com rastreamento\n• Relatórios financeiros e operacionais\n• Integrações com APIs externas\n• Sistema de notificações automatizadas\n• Interface responsiva e otimizada\n\nDesenvolvido seguindo as melhores práticas de UX/UI, com foco em performance e escalabilidade.",
    image: projectEcommerce,
    author: {
      name: "Maria Silva",
      avatar: developer1,
      rating: 4.9,
      reviewCount: 127,
      completedProjects: 89,
      responseTime: "1 hora",
      isAvailable: true,
      title: "Expert em Bubble & Automações Complexas",
      memberSince: "Janeiro 2022"
    },
    tags: ["Bubble", "E-commerce", "Stripe", "Dashboard", "API Integration", "WhatsApp", "Analytics"],
    stats: { views: 1250, likes: 89, comments: 23 },
    projectType: "E-commerce",
    timeline: "3 semanas",
    pricing: "R$ 3.500",
    completedAt: "Dezembro 2023",
    clientTestimonial: {
      text: "Maria entregou exatamente o que precisávamos. O dashboard ficou incrível e as integrações funcionam perfeitamente. Comunicação excelente durante todo o projeto.",
      client: "João Pedro - CEO TechCommerce",
      rating: 5
    },
    technologies: [
      { name: "Bubble", description: "Plataforma principal de desenvolvimento" },
      { name: "Stripe API", description: "Processamento de pagamentos" },
      { name: "WhatsApp Business API", description: "Atendimento automatizado" },
      { name: "Chart.js", description: "Gráficos e visualizações" },
      { name: "Zapier", description: "Automações e integrações" }
    ],
    similarProjects: [
      {
        id: "2",
        title: "Sistema CRM + Automações",
        image: projectEcommerce,
        price: "R$ 2.800"
      },
      {
        id: "3", 
        title: "Plataforma de Cursos Online",
        image: projectEcommerce,
        price: "R$ 4.200"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-4">
                  <Badge variant="secondary">{project.projectType}</Badge>
                  <Badge variant="outline">{project.completedAt}</Badge>
                </div>
                <h1 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">
                  {project.title}
                </h1>
                <div className="flex items-center space-x-6 text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Eye className="h-4 w-4" />
                    <span>{project.stats.views.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Heart className={`h-4 w-4 ${isLiked ? 'fill-current text-warning' : ''}`} />
                    <span>{project.stats.likes}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MessageCircle className="h-4 w-4" />
                    <span>{project.stats.comments}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={() => setIsLiked(!isLiked)}
                >
                  <Heart className={`h-4 w-4 ${isLiked ? 'fill-current text-warning' : ''}`} />
                </Button>
                <Button variant="outline" size="icon">
                  <Share className="h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={() => setIsBookmarked(!isBookmarked)}
                >
                  <Bookmark className={`h-4 w-4 ${isBookmarked ? 'fill-current' : ''}`} />
                </Button>
                <Button variant="outline">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Ver Live
                </Button>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Project Image */}
              <div className="relative rounded-xl overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Description */}
              <Card>
                <CardHeader>
                  <CardTitle>Sobre o Projeto</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose prose-slate max-w-none">
                    {project.description.split('\n').map((paragraph, index) => (
                      <p key={index} className="mb-4 text-muted-foreground leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Technologies */}
              <Card>
                <CardHeader>
                  <CardTitle>Tecnologias Utilizadas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {project.technologies.map((tech, index) => (
                      <div key={index} className="flex items-start space-x-3 p-4 bg-muted/30 rounded-lg">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <div>
                          <h4 className="font-semibold">{tech.name}</h4>
                          <p className="text-sm text-muted-foreground">{tech.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Client Testimonial */}
              <Card>
                <CardHeader>
                  <CardTitle>Depoimento do Cliente</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-warning fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-lg italic text-muted-foreground">
                      "{project.clientTestimonial.text}"
                    </blockquote>
                    <cite className="text-sm font-medium">
                      — {project.clientTestimonial.client}
                    </cite>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Author Card */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-6">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={project.author.avatar} alt={project.author.name} />
                      <AvatarFallback>
                        <User className="h-8 w-8" />
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-lg">{project.author.name}</h3>
                      <p className="text-muted-foreground text-sm">{project.author.title}</p>
                      <div className="flex items-center space-x-1 mt-1">
                        <Star className="h-4 w-4 text-warning fill-current" />
                        <span className="text-sm font-medium">{project.author.rating}</span>
                        <span className="text-sm text-muted-foreground">({project.author.reviewCount})</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Projetos Concluídos</span>
                      <span className="font-medium">{project.author.completedProjects}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Tempo de Resposta</span>
                      <span className="font-medium">{project.author.responseTime}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Membro desde</span>
                      <span className="font-medium">{project.author.memberSince}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Status</span>
                      {project.author.isAvailable ? (
                        <Badge className="status-available text-xs">Disponível</Badge>
                      ) : (
                        <Badge className="status-busy text-xs">Ocupado</Badge>
                      )}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button className="w-full btn-hero">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Conversar
                    </Button>
                    <Button variant="outline" className="w-full">
                      Ver Perfil Completo
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Project Info */}
              <Card>
                <CardHeader>
                  <CardTitle>Detalhes do Projeto</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <DollarSign className="h-4 w-4 text-success" />
                      <span className="text-sm text-muted-foreground">Valor do Projeto</span>
                    </div>
                    <span className="font-semibold text-lg">{project.pricing}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="text-sm text-muted-foreground">Prazo de Execução</span>
                    </div>
                    <span className="font-medium">{project.timeline}</span>
                  </div>

                  <Separator />

                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Tags do Projeto</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Similar Projects */}
              <Card>
                <CardHeader>
                  <CardTitle>Projetos Similares</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {project.similarProjects.map((similar, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
                      <img 
                        src={similar.image} 
                        alt={similar.title}
                        className="w-12 h-12 object-cover rounded"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{similar.title}</p>
                        <p className="text-sm text-muted-foreground">{similar.price}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* CTA */}
              <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-lg mb-2">Gostou do projeto?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Solicite um orçamento para um projeto similar
                  </p>
                  <Button className="w-full btn-hero">
                    Solicitar Orçamento
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;