import { useState } from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Plus, Upload, DollarSign, Clock, AlertCircle, Target, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const PostJob = () => {
  const { toast } = useToast();
  const [jobData, setJobData] = useState({
    title: "",
    description: "",
    category: "",
    budgetType: "fixed",
    budgetMin: "",
    budgetMax: "",
    timeline: "",
    urgency: "normal",
    requiredSkills: [] as string[],
    attachments: [] as string[]
  });

  const [newSkill, setNewSkill] = useState("");

  const categories = [
    "E-commerce & Vendas Online",
    "Automação de Processos", 
    "Dashboards & Relatórios",
    "Sites & Landing Pages",
    "Aplicativos Mobile",
    "Sistemas de Gestão",
    "Integrações & APIs",
    "Consultoria & Auditoria"
  ];

  const popularSkills = [
    "Bubble", "Webflow", "Zapier", "Notion", "Airtable",
    "Make", "Shopify", "WordPress", "Glide", "Adalo"
  ];

  const addSkill = (skill: string) => {
    if (skill && !jobData.requiredSkills.includes(skill)) {
      setJobData({
        ...jobData,
        requiredSkills: [...jobData.requiredSkills, skill]
      });
      setNewSkill("");
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setJobData({
      ...jobData,
      requiredSkills: jobData.requiredSkills.filter(skill => skill !== skillToRemove)
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!jobData.title || !jobData.description || !jobData.category) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Trabalho Publicado!",
      description: "Seu trabalho foi publicado com sucesso. Você receberá propostas em breve.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h1 className="font-heading font-bold text-3xl text-foreground mb-2">Publicar Trabalho</h1>
            <p className="text-muted-foreground">Descreva seu projeto e encontre o freelancer perfeito</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Basic Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="h-5 w-5 text-primary" />
                  <span>Informações Básicas</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="title">Título do Projeto *</Label>
                  <Input
                    id="title"
                    value={jobData.title}
                    onChange={(e) => setJobData({...jobData, title: e.target.value})}
                    placeholder="Ex: Desenvolver dashboard de vendas em Bubble"
                    className="mt-1"
                  />
                  <p className="text-sm text-muted-foreground mt-1">
                    Seja específico e claro sobre o que você precisa
                  </p>
                </div>

                <div>
                  <Label htmlFor="category">Categoria *</Label>
                  <Select onValueChange={(value) => setJobData({...jobData, category: value})}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Selecione a categoria do projeto" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category.toLowerCase().replace(/\s+/g, '-')}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="description">Descrição Detalhada *</Label>
                  <Textarea
                    id="description"
                    value={jobData.description}
                    onChange={(e) => setJobData({...jobData, description: e.target.value})}
                    rows={6}
                    placeholder="Descreva detalhadamente seu projeto, funcionalidades necessárias, integrações, design preferences, etc..."
                    className="mt-1"
                  />
                  <p className="text-sm text-muted-foreground mt-1">
                    Quanto mais detalhes, melhores propostas você receberá
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Budget & Timeline */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <DollarSign className="h-5 w-5 text-success" />
                  <span>Orçamento e Prazo</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label>Tipo de Orçamento</Label>
                  <div className="flex space-x-4 mt-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="fixed"
                        checked={jobData.budgetType === 'fixed'}
                        onCheckedChange={() => setJobData({...jobData, budgetType: 'fixed'})}
                      />
                      <Label htmlFor="fixed">Preço Fixo</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="hourly"
                        checked={jobData.budgetType === 'hourly'}
                        onCheckedChange={() => setJobData({...jobData, budgetType: 'hourly'})}
                      />
                      <Label htmlFor="hourly">Por Hora</Label>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="budgetMin">
                      Orçamento Mínimo (R$) {jobData.budgetType === 'hourly' && '/hora'}
                    </Label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="budgetMin"
                        type="number"
                        value={jobData.budgetMin}
                        onChange={(e) => setJobData({...jobData, budgetMin: e.target.value})}
                        className="pl-10 mt-1"
                        placeholder="500"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="budgetMax">
                      Orçamento Máximo (R$) {jobData.budgetType === 'hourly' && '/hora'}
                    </Label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="budgetMax"
                        type="number"
                        value={jobData.budgetMax}
                        onChange={(e) => setJobData({...jobData, budgetMax: e.target.value})}
                        className="pl-10 mt-1"
                        placeholder="2000"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="timeline">Prazo Esperado</Label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Select onValueChange={(value) => setJobData({...jobData, timeline: value})}>
                        <SelectTrigger className="pl-10 mt-1">
                          <SelectValue placeholder="Selecione o prazo" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-week">Até 1 semana</SelectItem>
                          <SelectItem value="2-weeks">Até 2 semanas</SelectItem>
                          <SelectItem value="1-month">Até 1 mês</SelectItem>
                          <SelectItem value="2-months">Até 2 meses</SelectItem>
                          <SelectItem value="flexible">Flexível</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="urgency">Urgência</Label>
                    <div className="relative">
                      <AlertCircle className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Select onValueChange={(value) => setJobData({...jobData, urgency: value})}>
                        <SelectTrigger className="pl-10 mt-1">
                          <SelectValue placeholder="Normal" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="normal">Normal</SelectItem>
                          <SelectItem value="urgent">Urgente</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Skills & Requirements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-5 w-5 text-secondary" />
                  <span>Habilidades Necessárias</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label>Habilidades Obrigatórias</Label>
                  <div className="flex flex-wrap gap-2 mt-2 mb-4">
                    {jobData.requiredSkills.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="flex items-center space-x-1">
                        <span>{skill}</span>
                        <button 
                          type="button"
                          onClick={() => removeSkill(skill)}
                          className="ml-1 text-xs hover:text-destructive"
                        >
                          ×
                        </button>
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex space-x-2 mb-4">
                    <Input 
                      value={newSkill}
                      onChange={(e) => setNewSkill(e.target.value)}
                      placeholder="Adicionar habilidade..."
                      onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill(newSkill))}
                    />
                    <Button 
                      type="button"
                      variant="outline" 
                      size="icon"
                      onClick={() => addSkill(newSkill)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Habilidades populares:</p>
                    <div className="flex flex-wrap gap-2">
                      {popularSkills.map((skill) => (
                        <Button
                          key={skill}
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => addSkill(skill)}
                          disabled={jobData.requiredSkills.includes(skill)}
                          className="text-xs"
                        >
                          + {skill}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Attachments */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Upload className="h-5 w-5 text-warning" />
                  <span>Anexos (Opcional)</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                  <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground mb-2">
                    Clique para anexar arquivos ou arraste e solte aqui
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Wireframes, referências, documentos (PDF, PNG, JPG até 10MB cada)
                  </p>
                  <Button variant="outline" className="mt-4">
                    Selecionar Arquivos
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Submit */}
            <div className="flex justify-between items-center pt-6">
              <div className="text-sm text-muted-foreground">
                <p>Ao publicar, você concorda com nossos termos de uso</p>
              </div>
              <div className="flex space-x-4">
                <Button variant="outline">
                  Salvar Rascunho
                </Button>
                <Button type="submit" className="btn-hero">
                  Publicar Trabalho
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostJob;