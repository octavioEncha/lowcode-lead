import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Profile from "./pages/Profile";
import PostJob from "./pages/PostJob";
import ProjectDetail from "./pages/ProjectDetail";
import FreelancerProfile from "./pages/FreelancerProfile";
import Dashboard from "./pages/Dashboard";
import Proposals from "./pages/Proposals";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/post-job" element={<PostJob />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/freelancer/:id" element={<FreelancerProfile />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/proposals" element={<Proposals />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
