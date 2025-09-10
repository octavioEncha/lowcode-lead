import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface FeedToggleProps {
  activeView: 'projects' | 'freelancers';
  onViewChange: (view: 'projects' | 'freelancers') => void;
}

const FeedToggle = ({ activeView, onViewChange }: FeedToggleProps) => {
  return (
    <div className="border-b border-border bg-card/50 sticky top-16 z-10">
      <div className="container mx-auto px-4 py-6">
        <div className="max-w-4xl mx-auto space-y-4">
          {/* Toggle Buttons */}
          <div className="flex justify-center">
            <div className="inline-flex bg-muted rounded-lg p-1">
              <Button
                variant={activeView === 'projects' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => onViewChange('projects')}
                className="px-6"
              >
                Projetos
              </Button>
              <Button
                variant={activeView === 'freelancers' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => onViewChange('freelancers')}
                className="px-6"
              >
                Freelancers
              </Button>
            </div>
          </div>

          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder={
                activeView === 'projects' 
                  ? "Buscar projetos..." 
                  : "Buscar freelancers..."
              }
              className="pl-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedToggle;