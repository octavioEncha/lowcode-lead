// Types for CodeCraft Platform

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  type: 'freelancer' | 'client' | 'both';
  createdAt: Date;
}

export interface FreelancerProfile extends User {
  title: string;
  location: string;
  hourlyRate: string;
  availability: 'available' | 'busy' | 'unavailable';
  responseTime: string;
  skills: string[];
  languages: string[];
  description: string;
  completedProjects: number;
  rating: number;
  reviewCount: number;
  isTopRated: boolean;
  isOnline: boolean;
  portfolio: PortfolioProject[];
  socialLinks?: {
    website?: string;
    linkedin?: string;
    github?: string;
  };
}

export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  projectType: string;
  timeline: string;
  clientName?: string;
  isPublic: boolean;
  liveUrl?: string;
  stats: {
    views: number;
    likes: number;
    comments: number;
  };
  createdAt: Date;
}

export interface JobPost {
  id: string;
  title: string;
  description: string;
  category: string;
  budget: {
    min: number;
    max: number;
    type: 'fixed' | 'hourly';
  };
  timeline: string;
  urgency: 'normal' | 'urgent';
  requiredSkills: string[];
  clientId: string;
  client: {
    name: string;
    avatar?: string;
    rating: number;
    reviewCount: number;
    verified: boolean;
  };
  status: 'open' | 'in_progress' | 'completed' | 'cancelled';
  proposalCount: number;
  createdAt: Date;
  attachments?: string[];
}

export interface Proposal {
  id: string;
  jobId: string;
  freelancerId: string;
  freelancer: {
    name: string;
    avatar?: string;
    rating: number;
    title: string;
  };
  coverLetter: string;
  proposedBudget: number;
  estimatedTimeline: string;
  milestones?: Milestone[];
  status: 'pending' | 'accepted' | 'rejected' | 'withdrawn';
  createdAt: Date;
}

export interface Milestone {
  id: string;
  title: string;
  description: string;
  amount: number;
  dueDate: Date;
  status: 'pending' | 'in_progress' | 'completed' | 'approved';
}

export interface Contract {
  id: string;
  jobId: string;
  proposalId: string;
  clientId: string;
  freelancerId: string;
  status: 'active' | 'completed' | 'cancelled' | 'disputed';
  totalAmount: number;
  milestones: Milestone[];
  startDate: Date;
  expectedEndDate: Date;
  actualEndDate?: Date;
}

export interface Review {
  id: string;
  contractId: string;
  reviewerId: string;
  revieweeId: string;
  rating: number;
  comment: string;
  createdAt: Date;
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  type: 'text' | 'file' | 'proposal';
  createdAt: Date;
  isRead: boolean;
}