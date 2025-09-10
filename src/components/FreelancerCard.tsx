import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star, MapPin, User } from "lucide-react";

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
  skills,
  completedProjects,
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

  const status = getAvailabilityStatus();

  return (
    <div className="card-freelancer">
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-start space-x-3">
          <div className="relative">
            <Avatar className="w-12 h-12">
              <AvatarImage src={avatar} alt={name} />
              <AvatarFallback>
                <User className="w-6 h-6" />
              </AvatarFallback>
            </Avatar>
            {isOnline && (
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-success rounded-full border-2 border-white" />
            )}
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2">
              <h3 className="font-semibold text-foreground truncate">{name}</h3>
              {isTopRated && (
                <Badge variant="outline" className="text-xs border-warning text-warning">
                  Top
                </Badge>
              )}
            </div>
            <p className="text-sm text-muted-foreground line-clamp-2">{title}</p>
            <div className="flex items-center space-x-1 mt-1">
              <MapPin className="w-3 h-3 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">{location}</span>
            </div>
          </div>
        </div>

        {/* Rating & Rate */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-warning fill-current" />
            <span className="text-sm font-medium">{rating}</span>
            <span className="text-xs text-muted-foreground">({reviewCount})</span>
          </div>
          
          <div className="text-right">
            <p className="text-sm font-semibold text-primary">{hourlyRate}</p>
            <Badge className={`text-xs ${status.className}`}>
              {status.text}
            </Badge>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-3">
          {description}
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-1">
          {skills.slice(0, 3).map((skill) => (
            <Badge key={skill} variant="secondary" className="text-xs">
              {skill}
            </Badge>
          ))}
          {skills.length > 3 && (
            <Badge variant="secondary" className="text-xs">
              +{skills.length - 3}
            </Badge>
          )}
        </div>

        {/* Action */}
        <Button 
          className="w-full btn-primary" 
          size="sm"
          disabled={availability === 'unavailable'}
        >
          {availability === 'available' ? 'Contratar' : 'Ver Perfil'}
        </Button>
      </div>
    </div>
  );
};

export default FreelancerCard;