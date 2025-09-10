import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star, User } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  author: {
    name: string;
    avatar: string;
    rating: number;
    isAvailable: boolean;
  };
  tags: string[];
  stats: {
    views: number;
    likes: number;
    comments: number;
  };
  projectType: string;
  timeline: string;
  pricing?: string;
}

const ProjectCard = ({ 
  title, 
  description, 
  image, 
  author, 
  tags, 
  projectType, 
  pricing 
}: ProjectCardProps) => {
  return (
    <div className="card-project group">
      {/* Project Image */}
      <div className="relative mb-4 overflow-hidden rounded-lg">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <Badge className="absolute top-3 left-3 bg-black/60 text-white border-0">
          {projectType}
        </Badge>
      </div>

      {/* Content */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-foreground line-clamp-2">
          {title}
        </h3>
        
        <p className="text-sm text-muted-foreground line-clamp-3">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Author & Price */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center space-x-2">
            <Avatar className="w-8 h-8">
              <AvatarImage src={author.avatar} alt={author.name} />
              <AvatarFallback>
                <User className="w-4 h-4" />
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium text-foreground">{author.name}</p>
              <div className="flex items-center space-x-1">
                <Star className="w-3 h-3 text-warning fill-current" />
                <span className="text-xs text-muted-foreground">{author.rating}</span>
              </div>
            </div>
          </div>
          
          {pricing && (
            <div className="text-right">
              <p className="text-sm font-semibold text-primary">{pricing}</p>
            </div>
          )}
        </div>

        <Button className="w-full btn-outline" size="sm">
          Ver Projeto
        </Button>
      </div>
    </div>
  );
};

export default ProjectCard;