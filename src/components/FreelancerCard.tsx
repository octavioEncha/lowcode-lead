import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star, MapPin, Clock, User, MessageCircle, Heart } from "lucide-react";

interface FreelancerCardProps {
  name: string;
  avatar: string;
  title: string;
  location: string;
  rating: number;
  reviewCount: number;
  hourlyRate: string;
  availability: 'available' | 'busy' | 'unavailable';
  responseTime: string;
  skills: string[];
  completedProjects: number;
  languages: string[];
  description: string;
  isTopRated?: boolean;
  isOnline?: boolean;
}

const FreelancerCard = ({
  name,
  avatar,
  title,
  location,
  rating,
  reviewCount,
  hourlyRate,
  availability,
  responseTime,
  skills,
  completedProjects,
  languages,
  description,
  isTopRated = false,
  isOnline = false,
}: FreelancerCardProps) => {
  const getAvailabilityStatus = () => {
    switch (availability) {
      case 'available':
        return { text: 'Disponível', className: 'status-available' };
      case 'busy':
        return { text: 'Ocupado', className: 'status-busy' };
      case 'unavailable':
        return { text: 'Indisponível', className: 'status-busy' };
      default:
        return { text: 'Disponível', className: 'status-available' };
    }
  };

  const availabilityStatus = getAvailabilityStatus();

  return (
    <div className="card-freelancer group">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start space-x-4">
          <div className="relative">
            <Avatar className="h-16 w-16">
              <AvatarImage src={avatar} alt={name} />
              <AvatarFallback className="text-lg font-semibold">
                <User className="h-8 w-8" />
              </AvatarFallback>
            </Avatar>
            {isOnline && (
              <div className="absolute -bottom-1 -right-1 h-5 w-5 bg-success border-2 border-white rounded-full"></div>
            )}
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2 mb-1">
              <h3 className="font-heading font-semibold text-lg text-foreground truncate">
                {name}
              </h3>
              {isTopRated && (
                <Badge className="bg-warning/10 text-warning text-xs">
                  Top Rated
                </Badge>
              )}
            </div>
            
            <p className="text-sm text-muted-foreground mb-2 line-clamp-1">
              {title}
            </p>
            
            <div className="flex items-center space-x-4 text-xs text-muted-foreground">
              <div className="flex items-center space-x-1">
                <MapPin className="h-3 w-3" />
                <span>{location}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-3 w-3" />
                <span>Responde em {responseTime}</span>
              </div>
            </div>
          </div>
        </div>

        <Button size="icon" variant="ghost" className="opacity-0 group-hover:opacity-100 transition-opacity">
          <Heart className="h-4 w-4" />
        </Button>
      </div>

      {/* Rating and Pricing */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-warning fill-current" />
            <span className="font-semibold text-foreground">{rating}</span>
            <span className="text-sm text-muted-foreground">({reviewCount})</span>
          </div>
          <span className="text-muted-foreground">•</span>
          <span className="text-sm text-muted-foreground">{completedProjects} projetos</span>
        </div>
        
        <div className="text-right">
          <div className="font-semibold text-foreground">{hourlyRate}</div>
          <div className={availabilityStatus.className}>
            {availabilityStatus.text}
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
        {description}
      </p>

      {/* Skills */}
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {skills.slice(0, 4).map((skill, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {skill}
            </Badge>
          ))}
          {skills.length > 4 && (
            <Badge variant="outline" className="text-xs">
              +{skills.length - 4}
            </Badge>
          )}
        </div>
      </div>

      {/* Languages */}
      <div className="mb-6">
        <div className="text-xs text-muted-foreground mb-1">Idiomas:</div>
        <div className="text-sm text-foreground">
          {languages.join(', ')}
        </div>
      </div>

      {/* Actions */}
      <div className="flex space-x-2 pt-4 border-t border-border">
        <Button 
          variant="outline" 
          size="sm" 
          className="flex-1 flex items-center space-x-2"
        >
          <MessageCircle className="h-4 w-4" />
          <span>Conversar</span>
        </Button>
        
        <Button 
          size="sm" 
          className="flex-1 bg-primary hover:bg-primary-hover text-primary-foreground"
          disabled={availability === 'unavailable'}
        >
          {availability === 'available' ? 'Contratar' : 'Ver Perfil'}
        </Button>
      </div>
    </div>
  );
};

export default FreelancerCard;