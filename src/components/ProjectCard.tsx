import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Eye, MessageCircle, ExternalLink, User } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

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
  stats, 
  projectType, 
  timeline, 
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Overlay buttons */}
        <div className="absolute top-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button size="icon" variant="secondary" className="h-8 w-8 bg-white/90 hover:bg-white">
            <ExternalLink className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="secondary" className="h-8 w-8 bg-white/90 hover:bg-white">
            <Heart className="h-4 w-4" />
          </Button>
        </div>

        {/* Project Type Badge */}
        <div className="absolute top-3 left-3">
          <Badge variant="secondary" className="bg-white/90 text-foreground">
            {projectType}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4">
        <div>
          <h3 className="font-heading font-semibold text-lg text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-2">
            {description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.slice(0, 3).map((tag, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
          {tags.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{tags.length - 3}
            </Badge>
          )}
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Eye className="h-4 w-4" />
              <span>{stats.views}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Heart className="h-4 w-4" />
              <span>{stats.likes}</span>
            </div>
            <div className="flex items-center space-x-1">
              <MessageCircle className="h-4 w-4" />
              <span>{stats.comments}</span>
            </div>
          </div>
          <div className="text-xs text-muted-foreground">
            {timeline}
          </div>
        </div>

        {/* Author & CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center space-x-3">
            <Avatar className="h-8 w-8">
              <AvatarImage src={author.avatar} alt={author.name} />
              <AvatarFallback>
                <User className="h-4 w-4" />
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-foreground">{author.name}</span>
                {author.isAvailable && (
                  <div className="status-available text-xs px-2 py-0.5">
                    Disponível
                  </div>
                )}
              </div>
              <div className="flex items-center space-x-1">
                <div className="flex text-warning">
                  {'★'.repeat(Math.floor(author.rating))}
                </div>
                <span className="text-xs text-muted-foreground">({author.rating})</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-end space-y-1">
            {pricing && (
              <div className="text-sm font-semibold text-foreground">{pricing}</div>
            )}
            <Button size="sm" className="bg-primary hover:bg-primary-hover text-primary-foreground">
              Contratar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;