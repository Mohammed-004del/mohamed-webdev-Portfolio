import { useEffect, useRef } from "react";
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
  const previousPath = useRef<string | null>(null);
  useEffect(() => {
    const samePage = previousPath.current === pathname;
    previousPath.current = pathname;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const frame = requestAnimationFrame(() => {
      if (hash) {
        document.getElementById(hash.slice(1))?.scrollIntoView({
          behavior: samePage && !reducedMotion ? "smooth" : "instant",
          block: "start",
        });
      } else {
        window.scrollTo({ top: 0, behavior: "instant" });
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);
  return null;
}
function PageScene() {
  const { pathname } = useLocation();
  return <div key={pathname} className="page-scene">
    <Routes><Route path="/" element={<Index />} /><Route path="/work/:slug" element={<CaseStudy />} /><Route path="*" element={<NotFound />} /></Routes>
  </div>;
}
export default function App() {
  return <QueryClientProvider client={queryClient}><TooltipProvider><Toaster /><Sonner />
    <BrowserRouter basename="/mohamed-webdev-Portfolio/"><PagePosition /><PageMetadata />
      <PageScene /><Motion />
    </BrowserRouter>
  </TooltipProvider></QueryClientProvider>;
}
