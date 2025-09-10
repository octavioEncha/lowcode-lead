import { useState } from "react";
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { 
  DollarSign, 
  TrendingUp, 
  Users, 
  Clock, 
  Star, 
  MessageCircle, 
  FileText, 
  CheckCircle,
  AlertCircle,
  User,
  Eye,
  Heart
} from "lucide-react";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import developer1 from "@/assets/developer-1.jpg";
import developer2 from "@/assets/developer-2.jpg";

const Dashboard = () => {
  const [userType] = useState<'freelancer' | 'client'>('freelancer'); // Simulate user type

  const freelancerStats = {
    totalEarnings: "R$ 12.450",
    monthlyEarnings: "R$ 3.200",
    activeProjects: 3,
    completedProjects: 15,
    rating: 4.9,
    responseTime: "1h",
    profileViews: 234,
    proposalsSent: 12
  };

  const clientStats = {
    totalSpent: "R$ 8.750",
    activeProjects: 2,
    completedProjects: 8,
    postedJobs: 5,
    applicationsReceived: 47,
    avgProjectCost: "R$ 2.100"
  };

  const recentProposals = [
    {
      id: "1",
      title: "Dashboard E-commerce Avançado",
      client: "TechCorp",
      budget: "R$ 3.500",
      status: "pending",
      submittedAt: "2 horas atrás",
      responses: 5
    },
    {
      id: "2", 
      title: "Automação CRM + WhatsApp",
      client: "StartupXYZ",
      budget: "R$ 1.200",
      status: "accepted",
      submittedAt: "1 dia atrás",
      responses: 12
    },
    {
      id: "3",
      title: "Site Institucional Webflow",
      client: "AgênciaPro",
      budget: "R$ 2.800",
      status: "rejected",
      submittedAt: "3 dias atrás",
      responses: 8
    }
  ];

  const activeProjects = [
    {
      id: "1",
      title: "Sistema de Gestão de Projetos",
      client: "Maria Santos",
      clientAvatar: developer1,
      progress: 75,
      deadline: "Em 5 dias",
      status: "in_progress",
      value: "R$ 4.200"
    },
    {
      id: "2",
      title: "E-commerce Bubble Completo", 
      client: "Carlos Silva",
      clientAvatar: developer2,
      progress: 40,
      deadline: "Em 12 dias",
      status: "in_progress",
      value: "R$ 6.800"
    }
  ];

  const portfolioStats = [
    {
      project: "Dashboard Analytics",
      views: 1250,
      likes: 89,
      comments: 23
    },
    {
      project: "Automação CRM",
      views: 890,
      likes: 67,
      comments: 15
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return <Badge className="bg-warning/10 text-warning">Pendente</Badge>;
      case 'accepted':
        return <Badge className="bg-success/10 text-success">Aceita</Badge>;
      case 'rejected':
        return <Badge className="bg-destructive/10 text-destructive">Rejeitada</Badge>;
      case 'in_progress':
        return <Badge className="bg-primary/10 text-primary">Em Andamento</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="font-heading font-bold text-3xl text-foreground mb-2">Dashboard</h1>
          <p className="text-muted-foreground">
            {userType === 'freelancer' 
              ? 'Gerencie seus projetos e acompanhe seu desempenho' 
              : 'Acompanhe seus projetos contratados e busque novos talentos'
            }
          </p>
        </div>

        {userType === 'freelancer' ? (
          <>
            {/* Freelancer Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2">
                    <div className="p-2 bg-success/10 rounded-lg">
                      <DollarSign className="h-5 w-5 text-success" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Ganhos Totais</p>
                      <p className="text-2xl font-bold text-foreground">{freelancerStats.totalEarnings}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <TrendingUp className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Este Mês</p>
                      <p className="text-2xl font-bold text-foreground">{freelancerStats.monthlyEarnings}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2">
                    <div className="p-2 bg-warning/10 rounded-lg">
                      <Users className="h-5 w-5 text-warning" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Projetos Ativos</p>
                      <p className="text-2xl font-bold text-foreground">{freelancerStats.activeProjects}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2">
                    <div className="p-2 bg-secondary/10 rounded-lg">
                      <Star className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Avaliação</p>
                      <p className="text-2xl font-bold text-foreground">{freelancerStats.rating}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="projects" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="projects">Projetos Ativos</TabsTrigger>
                <TabsTrigger value="proposals">Propostas</TabsTrigger>
                <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
              </TabsList>

              <TabsContent value="projects">
                <div className="space-y-6">
                  {activeProjects.map((project) => (
                    <Card key={project.id}>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-4">
                            <Avatar className="h-12 w-12">
                              <AvatarImage src={project.clientAvatar} alt={project.client} />
                              <AvatarFallback>
                                <User className="h-6 w-6" />
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <h3 className="font-semibold text-lg">{project.title}</h3>
                              <p className="text-muted-foreground">Cliente: {project.client}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-lg">{project.value}</p>
                            {getStatusBadge(project.status)}
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Progresso</span>
                            <span>{project.progress}%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div 
                              className="bg-primary h-2 rounded-full transition-all" 
                              style={{ width: `${project.progress}%` }}
                            ></div>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-muted-foreground">{project.deadline}</span>
                            <div className="flex space-x-2">
                              <Button size="sm" variant="outline">
                                <MessageCircle className="h-4 w-4 mr-2" />
                                Chat
                              </Button>
                              <Button size="sm" className="bg-primary hover:bg-primary-hover">
                                Ver Detalhes
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="proposals">
                <div className="space-y-4">
                  {recentProposals.map((proposal) => (
                    <Card key={proposal.id}>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg mb-1">{proposal.title}</h3>
                            <p className="text-muted-foreground mb-2">Cliente: {proposal.client}</p>
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                              <span>Orçamento: {proposal.budget}</span>
                              <span>•</span>
                              <span>{proposal.responses} propostas</span>
                              <span>•</span>
                              <span>{proposal.submittedAt}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            {getStatusBadge(proposal.status)}
                            <div className="mt-2">
                              <Button size="sm" variant="outline">
                                Ver Detalhes
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="portfolio">
                <div className="grid md:grid-cols-2 gap-6">
                  {portfolioStats.map((item, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="font-semibold">{item.project}</h3>
                          <Button size="sm" variant="outline">Editar</Button>
                        </div>
                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div className="flex flex-col items-center">
                            <Eye className="h-5 w-5 text-primary mb-1" />
                            <span className="text-2xl font-bold">{item.views}</span>
                            <span className="text-xs text-muted-foreground">Views</span>
                          </div>
                          <div className="flex flex-col items-center">
                            <Heart className="h-5 w-5 text-warning mb-1" />
                            <span className="text-2xl font-bold">{item.likes}</span>
                            <span className="text-xs text-muted-foreground">Likes</span>
                          </div>
                          <div className="flex flex-col items-center">
                            <MessageCircle className="h-5 w-5 text-success mb-1" />
                            <span className="text-2xl font-bold">{item.comments}</span>
                            <span className="text-xs text-muted-foreground">Comments</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="analytics">
                <div className="grid md:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Performance</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <span>Taxa de Aprovação</span>
                          <span className="font-semibold">85%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Tempo Médio de Resposta</span>
                          <span className="font-semibold">{freelancerStats.responseTime}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Projetos Concluídos</span>
                          <span className="font-semibold">{freelancerStats.completedProjects}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Visibilidade</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <span>Views do Perfil</span>
                          <span className="font-semibold">{freelancerStats.profileViews}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Propostas Enviadas</span>
                          <span className="font-semibold">{freelancerStats.proposalsSent}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Taxa de Conversão</span>
                          <span className="font-semibold">42%</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Próximos Passos</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-success" />
                          <span className="text-sm">Perfil 100% completo</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <AlertCircle className="h-4 w-4 text-warning" />
                          <span className="text-sm">Adicionar mais projetos ao portfólio</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <AlertCircle className="h-4 w-4 text-warning" />
                          <span className="text-sm">Solicitar mais avaliações</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </>
        ) : (
          // Client Dashboard would go here
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold mb-4">Dashboard do Cliente</h2>
            <p className="text-muted-foreground">Funcionalidade em desenvolvimento...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;