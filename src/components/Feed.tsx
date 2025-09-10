import { useState } from "react";
import FeedToggle from "./FeedToggle";
import ProjectCard from "./ProjectCard";
import FreelancerCard from "./FreelancerCard";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectAutomation from "@/assets/project-automation.jpg";
import developer1 from "@/assets/developer-1.jpg";
import developer2 from "@/assets/developer-2.jpg";

const Feed = () => {
  const [activeView, setActiveView] = useState<'projects' | 'freelancers'>('projects');

  // Mock data para projetos
  const mockProjects = [
    {
      title: "Dashboard de E-commerce Completo (Bubble)",
      description: "Sistema completo de gerenciamento de e-commerce com painel de vendas, gestão de produtos, relatórios avançados e integrações com Stripe e WhatsApp.",
      image: projectEcommerce,
      author: {
        name: "Maria Silva",
        avatar: developer1,
        rating: 4.9,
        isAvailable: true
      },
      tags: ["Bubble", "E-commerce", "Stripe", "Dashboard", "API Integration"],
      stats: { views: 1250, likes: 89, comments: 23 },
      projectType: "E-commerce",
      timeline: "3 semanas",
      pricing: "R$ 3.500"
    },
    {
      title: "Automação Completa HubSpot + Slack + Notion",
      description: "Automação que sincroniza leads do HubSpot, notifica equipe no Slack e organiza dados no Notion. Inclui relatórios automáticos e follow-ups.",
      image: projectAutomation,
      author: {
        name: "Carlos Oliveira",
        avatar: developer2,
        rating: 4.8,
        isAvailable: true
      },
      tags: ["Zapier", "HubSpot", "Slack", "Notion", "Automação"],
      stats: { views: 890, likes: 67, comments: 15 },
      projectType: "Automação",
      timeline: "1 semana",
      pricing: "R$ 1.200"
    },
    {
      title: "Plataforma de Cursos Online (Webflow)",
      description: "Site responsivo para venda de cursos com área do aluno, sistema de pagamentos, certificados automáticos e integração com ferramentas de email marketing.",
      image: projectEcommerce,
      author: {
        name: "Ana Santos",
        avatar: developer1,
        rating: 5.0,
        isAvailable: false
      },
      tags: ["Webflow", "Cursos", "Memberstack", "Loom", "Email Marketing"],
      stats: { views: 2100, likes: 156, comments: 42 },
      projectType: "Educação",
      timeline: "4 semanas",
      pricing: "R$ 5.000"
    },
    {
      title: "Sistema de Gestão de Projetos (Notion)",
      description: "Workspace completo no Notion para gestão de projetos, clientes, financeiro e time. Inclui templates, automações e dashboards executivos.",
      image: projectAutomation,
      author: {
        name: "Pedro Costa",
        avatar: developer2,
        rating: 4.7,
        isAvailable: true
      },
      tags: ["Notion", "Gestão", "Templates", "Dashboards", "Produtividade"],
      stats: { views: 756, likes: 43, comments: 12 },
      projectType: "Produtividade",
      timeline: "2 semanas",
      pricing: "R$ 800"
    }
  ];

  // Mock data para freelancers
  const mockFreelancers = [
    {
      name: "Maria Silva",
      avatar: developer1,
      title: "Expert em Bubble & Automações Complexas",
      location: "São Paulo, SP",
      rating: 4.9,
      reviewCount: 127,
      hourlyRate: "R$ 85/hora",
      availability: 'available' as const,
      responseTime: "1 hora",
      skills: ["Bubble", "Zapier", "Stripe", "API Integration", "Database Design"],
      completedProjects: 89,
      languages: ["Português", "Inglês"],
      description: "Especialista em desenvolvimento de aplicações web complexas usando Bubble. Tenho experiência com integrações avançadas, automações e sistemas de pagamento.",
      isTopRated: true,
      isOnline: true
    },
    {
      name: "Carlos Oliveira",
      avatar: developer2,
      title: "Especialista Webflow & Design Systems",
      location: "Rio de Janeiro, RJ",
      rating: 4.8,
      reviewCount: 95,
      hourlyRate: "R$ 75/hora",
      availability: 'available' as const,
      responseTime: "30 min",
      skills: ["Webflow", "Design Systems", "CMS", "Animações", "SEO"],
      completedProjects: 67,
      languages: ["Português", "Inglês", "Espanhol"],
      description: "Desenvolvedor Webflow focado em criar sites responsivos e performáticos. Especializado em design systems e otimização para conversão.",
      isTopRated: true,
      isOnline: true
    },
    {
      name: "Ana Santos",
      avatar: developer1,
      title: "Consultora Notion & Automação de Processos",
      location: "Belo Horizonte, MG",
      rating: 5.0,
      reviewCount: 78,
      hourlyRate: "R$ 60/hora",
      availability: 'busy' as const,
      responseTime: "2 horas",
      skills: ["Notion", "Airtable", "Zapier", "Process Design", "Treinamentos"],
      completedProjects: 156,
      languages: ["Português"],
      description: "Especialista em organização e automação de processos empresariais. Crio workspaces Notion e sistemas Airtable que realmente funcionam na prática.",
      isTopRated: false,
      isOnline: false
    },
    {
      name: "Pedro Costa",
      avatar: developer2,
      title: "Desenvolvedor Full-Stack Low-Code",
      location: "Florianópolis, SC",
      rating: 4.7,
      reviewCount: 112,
      hourlyRate: "R$ 90/hora",
      availability: 'available' as const,
      responseTime: "45 min",
      skills: ["Bubble", "Webflow", "Zapier", "Supabase", "Mobile Apps"],
      completedProjects: 73,
      languages: ["Português", "Inglês"],
      description: "Desenvolvedor versátil com expertise em múltiplas plataformas no-code. Especializado em soluções completas desde MVP até produtos escaláveis.",
      isTopRated: true,
      isOnline: true
    }
  ];

  return (
    <div className="bg-background">
      <FeedToggle activeView={activeView} onViewChange={setActiveView} />
      
      <div className="container mx-auto px-4 py-12">
        {activeView === 'projects' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {mockProjects.slice(0, 4).map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {mockFreelancers.slice(0, 4).map((freelancer, index) => (
              <FreelancerCard key={index} {...freelancer} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Feed;