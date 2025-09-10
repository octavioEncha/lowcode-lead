import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, Bell, User, Menu, X } from "lucide-react";
import { Input } from "@/components/ui/input";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="gradient-primary text-white font-bold text-2xl px-3 py-1 rounded-lg">
              CC
            </div>
            <div>
              <h1 className="font-heading font-bold text-xl text-foreground">CodeCraft</h1>
              <p className="text-xs text-muted-foreground">Low-Code Marketplace</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-foreground hover:text-primary font-medium transition-colors">
              Explorar
            </a>
            <a href="/dashboard" className="text-foreground hover:text-primary font-medium transition-colors">
              Dashboard
            </a>
            <a href="/post-job" className="text-foreground hover:text-primary font-medium transition-colors">
              Postar Trabalho
            </a>
            <a href="/profile" className="text-foreground hover:text-primary font-medium transition-colors">
              Meu Perfil
            </a>
          </nav>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex items-center space-x-4 flex-1 max-w-md mx-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Buscar projetos ou freelancers..." 
                className="pl-10 bg-muted/50 border-border"
              />
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-warning text-warning-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </Button>
            
            <a href="/entrar" className="text-foreground hover:text-primary font-medium transition-colors">
              Entrar
            </a>
            
            <Button className="btn-hero">
              Cadastrar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              {/* Mobile Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Buscar projetos ou freelancers..." 
                  className="pl-10 bg-muted/50 border-border"
                />
              </div>
              
              {/* Mobile Navigation */}
              <nav className="flex flex-col space-y-2">
                <a href="/" className="text-foreground hover:text-primary font-medium py-2 transition-colors">
                  Explorar
                </a>
                <a href="/dashboard" className="text-foreground hover:text-primary font-medium py-2 transition-colors">
                  Dashboard
                </a>
                <a href="/post-job" className="text-foreground hover:text-primary font-medium py-2 transition-colors">
                  Postar Trabalho
                </a>
                <a href="/profile" className="text-foreground hover:text-primary font-medium py-2 transition-colors">
                  Meu Perfil
                </a>
              </nav>
              
              {/* Mobile Actions */}
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                <Button variant="outline" className="font-medium w-full">
                  Entraraaaaa
                </Button>
               
                <Button className="btn-hero w-full">
                  Cadastraraa
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;