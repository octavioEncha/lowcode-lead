import { useState } from "react";
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  MessageCircle, 
  Clock, 
  DollarSign, 
  User,
  Send,
  Star,
  FileText,
  CheckCircle,
  XCircle,
  AlertCircle
} from "lucide-react";
import developer1 from "@/assets/developer-1.jpg";
import developer2 from "@/assets/developer-2.jpg";

const Proposals = () => {
  const [selectedProposal, setSelectedProposal] = useState<string | null>(null);
  const [proposalForm, setProposalForm] = useState({
    coverLetter: "",
    proposedBudget: "",
    timeline: "",
    milestones: [{ title: "", description: "", amount: "", dueDate: "" }]
  });

  const receivedProposals = [
    {
      id: "1",
      jobTitle: "Dashboard E-commerce Avançado",
      freelancer: {
        name: "Carlos Oliveira",
        avatar: developer2,
        rating: 4.8,
        title: "Expert Webflow & Design Systems",
        completedProjects: 67
      },
      proposedBudget: 3200,
      estimatedTimeline: "3 semanas",
      coverLetter: "Olá! Vi seu projeto de dashboard e tenho experiência extensa em Bubble. Já desenvolvi sistemas similares para e-commerce com integrações Stripe, gestão de produtos e relatórios avançados. Posso entregar uma solução completa e otimizada.",
      status: "pending",
      submittedAt: "2 horas atrás",
      milestones: [
        { title: "Setup inicial e prototipagem", amount: 800, dueDate: "1 semana" },
        { title: "Desenvolvimento core features", amount: 1600, dueDate: "2 semanas" },
        { title: "Integrações e testes finais", amount: 800, dueDate: "3 semanas" }
      ]
    },
    {
      id: "2",
      jobTitle: "Dashboard E-commerce Avançado", 
      freelancer: {
        name: "Ana Santos",
        avatar: developer1,
        rating: 5.0,
        title: "Consultora Notion & Automação",
        completedProjects: 156
      },
      proposedBudget: 2800,
      estimatedTimeline: "4 semanas",
      coverLetter: "Oi! Sua proposta me chamou atenção. Trabalho com Bubble há 3 anos e tenho um portfólio sólido em e-commerce. Minha abordagem foca em UX intuitiva e performance otimizada. Posso incluir algumas funcionalidades extras sem custo adicional.",
      status: "pending",
      submittedAt: "5 horas atrás",
      milestones: [
        { title: "Análise e planejamento", amount: 700, dueDate: "1 semana" },
        { title: "UI/UX e funcionalidades básicas", amount: 1400, dueDate: "2.5 semanas" },
        { title: "Funcionalidades avançadas", amount: 700, dueDate: "4 semanas" }
      ]
    }
  ];

  const sentProposals = [
    {
      id: "3",
      jobTitle: "Sistema de Automação CRM",
      client: "TechCorp",
      proposedBudget: 1500,
      status: "accepted",
      submittedAt: "1 dia atrás",
      lastUpdate: "Aceita pelo cliente"
    },
    {
      id: "4", 
      jobTitle: "Site Institucional Webflow",
      client: "AgênciaPro",
      proposedBudget: 2200,
      status: "rejected",
      submittedAt: "3 dias atrás",
      lastUpdate: "Cliente escolheu outra proposta"
    },
    {
      id: "5",
      jobTitle: "App Mobile com Glide",
      client: "StartupXYZ", 
      proposedBudget: 1800,
      status: "pending",
      submittedAt: "2 dias atrás",
      lastUpdate: "Aguardando resposta do cliente"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return <Badge className="bg-warning/10 text-warning"><Clock className="h-3 w-3 mr-1" />Pendente</Badge>;
      case 'accepted':
        return <Badge className="bg-success/10 text-success"><CheckCircle className="h-3 w-3 mr-1" />Aceita</Badge>;
      case 'rejected':
        return <Badge className="bg-destructive/10 text-destructive"><XCircle className="h-3 w-3 mr-1" />Rejeitada</Badge>;
      case 'withdrawn':
        return <Badge variant="outline"><AlertCircle className="h-3 w-3 mr-1" />Retirada</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const ProposalDetail = ({ proposal }: { proposal: any }) => (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src={proposal.freelancer.avatar} alt={proposal.freelancer.name} />
              <AvatarFallback><User className="h-6 w-6" /></AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold text-lg">{proposal.freelancer.name}</h3>
              <p className="text-muted-foreground">{proposal.freelancer.title}</p>
              <div className="flex items-center space-x-2 mt-1">
                <Star className="h-4 w-4 text-warning fill-current" />
                <span className="text-sm font-medium">{proposal.freelancer.rating}</span>
                <span className="text-sm text-muted-foreground">•</span>
                <span className="text-sm text-muted-foreground">{proposal.freelancer.completedProjects} projetos</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-foreground mb-1">
              R$ {proposal.proposedBudget.toLocaleString()}
            </div>
            <div className="text-sm text-muted-foreground">{proposal.estimatedTimeline}</div>
            {getStatusBadge(proposal.status)}
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div>
          <h4 className="font-semibold mb-2">Carta de Apresentação</h4>
          <p className="text-muted-foreground leading-relaxed">{proposal.coverLetter}</p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Marcos do Projeto</h4>
          <div className="space-y-3">
            {proposal.milestones.map((milestone: any, index: number) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div>
                  <div className="font-medium">{milestone.title}</div>
                  <div className="text-sm text-muted-foreground">Prazo: {milestone.dueDate}</div>
                </div>
                <div className="font-semibold">R$ {milestone.amount}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center pt-4 border-t">
          <div className="text-sm text-muted-foreground">
            Enviada {proposal.submittedAt}
          </div>
          <div className="flex space-x-3">
            <Button variant="outline">
              <MessageCircle className="h-4 w-4 mr-2" />
              Conversar
            </Button>
            <Button variant="outline" className="text-destructive hover:text-destructive">
              Rejeitar
            </Button>
            <Button className="bg-success hover:bg-success/90 text-success-foreground">
              Aceitar Proposta
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="font-heading font-bold text-3xl text-foreground mb-2">Propostas</h1>
          <p className="text-muted-foreground">Gerencie propostas recebidas e enviadas</p>
        </div>

        <Tabs defaultValue="received" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="received" className="flex items-center space-x-2">
              <FileText className="h-4 w-4" />
              <span>Recebidas ({receivedProposals.length})</span>
            </TabsTrigger>
            <TabsTrigger value="sent" className="flex items-center space-x-2">
              <Send className="h-4 w-4" />
              <span>Enviadas ({sentProposals.length})</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="received">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Propostas para "Dashboard E-commerce Avançado"</h2>
                <Badge variant="outline">{receivedProposals.length} propostas recebidas</Badge>
              </div>
              
              {receivedProposals.map((proposal) => (
                <ProposalDetail key={proposal.id} proposal={proposal} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="sent">
            <div className="space-y-4">
              {sentProposals.map((proposal) => (
                <Card key={proposal.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-1">{proposal.jobTitle}</h3>
                        <p className="text-muted-foreground mb-2">Cliente: {proposal.client}</p>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span>R$ {proposal.proposedBudget.toLocaleString()}</span>
                          <span>•</span>
                          <span>Enviada {proposal.submittedAt}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{proposal.lastUpdate}</p>
                      </div>
                      <div className="text-right space-y-2">
                        {getStatusBadge(proposal.status)}
                        <div>
                          <Button size="sm" variant="outline">
                            Ver Detalhes
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              {sentProposals.length === 0 && (
                <Card>
                  <CardContent className="p-12 text-center">
                    <Send className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="font-semibold text-lg mb-2">Nenhuma proposta enviada ainda</h3>
                    <p className="text-muted-foreground mb-4">
                      Explore trabalhos disponíveis e envie suas primeiras propostas
                    </p>
                    <Button className="btn-hero">
                      Explorar Trabalhos
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Proposals;