import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Index from "./pages/Index";
import CaseStudy from "./pages/CaseStudy";
import NotFound from "./pages/NotFound";
import Motion from "./components/Motion";
import PageMetadata from "./components/PageMetadata";

const queryClient = new QueryClient();
function PagePosition() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (hash) document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "instant" });
      else window.scrollTo({ top: 0, behavior: "instant" });
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);
  return null;
}
export default function App() {
  return <QueryClientProvider client={queryClient}><TooltipProvider><Toaster /><Sonner />
    <BrowserRouter basename="/mohamed-webdev-Portfolio"><PagePosition /><PageMetadata />
      <Routes><Route path="/" element={<Index />} /><Route path="/work/:slug" element={<CaseStudy />} /><Route path="*" element={<NotFound />} /></Routes>
      <Motion />
    </BrowserRouter>
  </TooltipProvider></QueryClientProvider>;
}
