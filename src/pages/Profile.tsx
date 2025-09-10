import { useState } from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Plus, Upload, User, Settings, FileText, DollarSign, Clock, MapPin, Link2, Save } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectAutomation from "@/assets/project-automation.jpg";
import developer1 from "@/assets/developer-1.jpg";

const Profile = () => {
  const [isAvailable, setIsAvailable] = useState(true);
  const [profileData, setProfileData] = useState({
    name: "Maria Silva",
    title: "Expert em Bubble & Automações Complexas",
    location: "São Paulo, SP",
    hourlyRate: "85",
    responseTime: "1 hora",
    description: "Especialista em desenvolvimento de aplicações web complexas usando Bubble. Tenho experiência com integrações avançadas, automações e sistemas de pagamento.",
    skills: ["Bubble", "Zapier", "Stripe", "API Integration", "Database Design"],
    languages: ["Português", "Inglês"],
    website: "",
    linkedin: "",
    github: ""
  });

  const [portfolioProjects] = useState([
    {
      id: "1",
      title: "Dashboard de E-commerce Completo",
      description: "Sistema completo de gerenciamento de e-commerce com painel de vendas, gestão de produtos, relatórios avançados e integrações com Stripe e WhatsApp.",
      image: projectEcommerce,
      tags: ["Bubble", "E-commerce", "Stripe", "Dashboard"],
      projectType: "E-commerce",
      timeline: "3 semanas",
      isPublic: true,
      stats: { views: 1250, likes: 89, comments: 23 }
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
      stats: { views: 890, likes: 67, comments: 15 }
    }
  ]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="font-heading font-bold text-3xl text-foreground mb-2">Meu Perfil</h1>
            <p className="text-muted-foreground">Configure seu perfil profissional e portfólio</p>
          </div>

          <Tabs defaultValue="basic" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="basic" className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>Básico</span>
              </TabsTrigger>
              <TabsTrigger value="portfolio" className="flex items-center space-x-2">
                <FileText className="h-4 w-4" />
                <span>Portfólio</span>
              </TabsTrigger>
              <TabsTrigger value="pricing" className="flex items-center space-x-2">
                <DollarSign className="h-4 w-4" />
                <span>Preços</span>
              </TabsTrigger>
              <TabsTrigger value="settings" className="flex items-center space-x-2">
                <Settings className="h-4 w-4" />
                <span>Configurações</span>
              </TabsTrigger>
            </TabsList>

            {/* Basic Info Tab */}
            <TabsContent value="basic">
              <Card>
                <CardHeader>
                  <CardTitle>Informações Básicas</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Profile Picture */}
                  <div className="flex items-center space-x-6">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src={developer1} alt="Profile" />
                      <AvatarFallback>
                        <User className="h-12 w-12" />
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <Button variant="outline" className="flex items-center space-x-2">
                        <Upload className="h-4 w-4" />
                        <span>Alterar Foto</span>
                      </Button>
                      <p className="text-sm text-muted-foreground mt-2">JPG, PNG até 2MB</p>
                    </div>
                  </div>

                  {/* Basic Fields */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Nome Completo</Label>
                      <Input 
                        id="name"
                        value={profileData.name}
                        onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="title">Título Profissional</Label>
                      <Input 
                        id="title"
                        value={profileData.title}
                        onChange={(e) => setProfileData({...profileData, title: e.target.value})}
                        placeholder="Ex: Expert em Bubble & Automações"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="description">Descrição Profissional</Label>
                    <Textarea 
                      id="description"
                      value={profileData.description}
                      onChange={(e) => setProfileData({...profileData, description: e.target.value})}
                      rows={4}
                      placeholder="Descreva sua experiência, especialidades e o que você oferece..."
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="location">Localização</Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input 
                          id="location"
                          value={profileData.location}
                          onChange={(e) => setProfileData({...profileData, location: e.target.value})}
                          className="pl-10"
                          placeholder="Ex: São Paulo, SP"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="responseTime">Tempo de Resposta</Label>
                      <div className="relative">
                        <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Select>
                          <SelectTrigger className="pl-10">
                            <SelectValue placeholder="Selecione o tempo" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="30min">Até 30 minutos</SelectItem>
                            <SelectItem value="1h">Até 1 hora</SelectItem>
                            <SelectItem value="2h">Até 2 horas</SelectItem>
                            <SelectItem value="24h">Até 24 horas</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Skills */}
                  <div>
                    <Label>Habilidades</Label>
                    <div className="flex flex-wrap gap-2 mt-2 mb-4">
                      {profileData.skills.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="flex items-center space-x-1">
                          <span>{skill}</span>
                          <button className="ml-1 text-xs hover:text-destructive">×</button>
                        </Badge>
                      ))}
                    </div>
                    <div className="flex space-x-2">
                      <Input placeholder="Adicionar habilidade..." />
                      <Button variant="outline" size="icon">
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="space-y-4">
                    <Label>Links Profissionais</Label>
                    <div className="space-y-3">
                      <div className="relative">
                        <Link2 className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input 
                          value={profileData.website}
                          onChange={(e) => setProfileData({...profileData, website: e.target.value})}
                          className="pl-10"
                          placeholder="Website/Portfólio"
                        />
                      </div>
                      <div className="relative">
                        <Link2 className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input 
                          value={profileData.linkedin}
                          onChange={(e) => setProfileData({...profileData, linkedin: e.target.value})}
                          className="pl-10"
                          placeholder="LinkedIn"
                        />
                      </div>
                    </div>
                  </div>

                  <Button className="btn-hero flex items-center space-x-2">
                    <Save className="h-4 w-4" />
                    <span>Salvar Alterações</span>
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Portfolio Tab */}
            <TabsContent value="portfolio">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Meu Portfólio</CardTitle>
                  <Button className="btn-hero flex items-center space-x-2">
                    <Plus className="h-4 w-4" />
                    <span>Adicionar Projeto</span>
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    {portfolioProjects.map((project) => (
                      <div key={project.id} className="card-project">
                        <div className="relative mb-4 overflow-hidden rounded-lg">
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-48 object-cover"
                          />
                          <div className="absolute top-3 right-3 flex space-x-2">
                            <Button size="sm" variant="secondary" className="bg-white/90">
                              Editar
                            </Button>
                          </div>
                          <div className="absolute top-3 left-3">
                            <Badge variant="secondary" className="bg-white/90 text-foreground">
                              {project.projectType}
                            </Badge>
                          </div>
                        </div>
                        
                        <div className="space-y-3">
                          <h3 className="font-semibold text-lg">{project.title}</h3>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {project.description}
                          </p>
                          
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          
                          <div className="flex items-center justify-between text-sm text-muted-foreground pt-3 border-t">
                            <span>{project.timeline}</span>
                            <div className="flex items-center space-x-3">
                              <span>{project.stats.views} views</span>
                              <span>{project.stats.likes} likes</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Pricing Tab */}
            <TabsContent value="pricing">
              <Card>
                <CardHeader>
                  <CardTitle>Preços e Disponibilidade</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                    <div>
                      <h3 className="font-semibold">Disponível para projetos</h3>
                      <p className="text-sm text-muted-foreground">Outros usuários podem te encontrar e solicitar orçamentos</p>
                    </div>
                    <Switch 
                      checked={isAvailable}
                      onCheckedChange={setIsAvailable}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="hourlyRate">Taxa por Hora (R$)</Label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input 
                          id="hourlyRate"
                          value={profileData.hourlyRate}
                          onChange={(e) => setProfileData({...profileData, hourlyRate: e.target.value})}
                          className="pl-10"
                          placeholder="85"
                        />
                      </div>
                    </div>
                    <div>
                      <Label>Tipo de Projetos</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="both">Fixo e Por Hora</SelectItem>
                          <SelectItem value="fixed">Apenas Fixo</SelectItem>
                          <SelectItem value="hourly">Apenas Por Hora</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Button className="btn-hero flex items-center space-x-2">
                    <Save className="h-4 w-4" />
                    <span>Salvar Configurações</span>
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Settings Tab */}
            <TabsContent value="settings">
              <Card>
                <CardHeader>
                  <CardTitle>Configurações da Conta</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                      <div>
                        <h3 className="font-semibold">Notificações por Email</h3>
                        <p className="text-sm text-muted-foreground">Receber emails sobre propostas e mensagens</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                      <div>
                        <h3 className="font-semibold">Perfil Público</h3>
                        <p className="text-sm text-muted-foreground">Permitir que outros vejam seu perfil completo</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                      <div>
                        <h3 className="font-semibold">Mostrar Status Online</h3>
                        <p className="text-sm text-muted-foreground">Exibir quando você está online</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>

                  <div className="pt-6 border-t">
                    <Button variant="destructive">
                      Desativar Conta
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Profile;