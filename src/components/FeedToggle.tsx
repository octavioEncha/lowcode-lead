import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, Filter, Grid, Users } from "lucide-react";
import { Input } from "@/components/ui/input";

interface FeedToggleProps {
  activeView: 'projects' | 'freelancers';
  onViewChange: (view: 'projects' | 'freelancers') => void;
}

const FeedToggle = ({ activeView, onViewChange }: FeedToggleProps) => {
  return (
    <div className="sticky top-24 z-40 bg-background/95 backdrop-blur-sm border-b border-border py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          {/* View Toggle */}
          <div className="flex items-center space-x-1 bg-muted p-1 rounded-lg w-fit">
            <Button
              variant={activeView === 'projects' ? 'default' : 'ghost'}
              onClick={() => onViewChange('projects')}
              className={`flex items-center space-x-2 px-6 py-2 rounded-md font-medium transition-all ${
                activeView === 'projects' 
                  ? 'bg-primary text-primary-foreground shadow-sm' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Grid className="h-4 w-4" />
              <span>Ver Projetos</span>
              <span className="bg-primary/20 text-xs px-2 py-1 rounded-full">850</span>
            </Button>
            
            <Button
              variant={activeView === 'freelancers' ? 'default' : 'ghost'}
              onClick={() => onViewChange('freelancers')}
              className={`flex items-center space-x-2 px-6 py-2 rounded-md font-medium transition-all ${
                activeView === 'freelancers' 
                  ? 'bg-primary text-primary-foreground shadow-sm' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Users className="h-4 w-4" />
              <span>Ver Freelancers</span>
              <span className="bg-success/20 text-xs px-2 py-1 rounded-full">145</span>
            </Button>
          </div>

          {/* Search and Filters */}
          <div className="flex items-center space-x-4 flex-1 lg:max-w-2xl">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder={
                  activeView === 'projects' 
                    ? "Buscar projetos... (ex: dashboard Notion, e-commerce Bubble)" 
                    : "Buscar freelancers... (ex: expert Webflow, automação Zapier)"
                } 
                className="pl-10 bg-card border-border"
              />
            </div>
            
            <Button variant="outline" className="flex items-center space-x-2">
              <Filter className="h-4 w-4" />
              <span className="hidden sm:inline">Filtros</span>
            </Button>
          </div>

          {/* Quick Filters */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 lg:pb-0">
            {activeView === 'projects' ? (
              <>
                <Button variant="outline" size="sm" className="whitespace-nowrap">
                  E-commerce
                </Button>
                <Button variant="outline" size="sm" className="whitespace-nowrap">
                  Dashboard
                </Button>
                <Button variant="outline" size="sm" className="whitespace-nowrap">
                  Automação
                </Button>
                <Button variant="outline" size="sm" className="whitespace-nowrap">
                  Mobile App
                </Button>
              </>
            ) : (
              <>
                <Button variant="outline" size="sm" className="whitespace-nowrap status-available">
                  Disponível
                </Button>
                <Button variant="outline" size="sm" className="whitespace-nowrap">
                  Top Rated
                </Button>
                <Button variant="outline" size="sm" className="whitespace-nowrap">
                  R$50-100/h
                </Button>
                <Button variant="outline" size="sm" className="whitespace-nowrap">
                  Bubble Expert
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedToggle;