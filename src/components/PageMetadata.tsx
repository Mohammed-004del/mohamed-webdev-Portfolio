import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { projects } from "@/data/projects";

export default function PageMetadata() {
  const { pathname } = useLocation();
  useEffect(() => {
    const project = projects.find(item => pathname.replace(/\/$/, "") === `/work/${item.slug}`);
    const title = project ? `${project.name} — Case Study | Mohammed Mahmood` : "Mohammed Mahmood | Frontend Developer & ORVEN Co-Founder";
    const description = project?.summary ?? "Mohammed Mahmood, Frontend Developer and Co-Founder at ORVEN. Explore Spiky and AL-Araby Oils, responsive websites, and practical web interfaces.";
    const canonical = `https://mohammed-004del.github.io/mohamed-webdev-Portfolio/${project ? `work/${project.slug}/` : ""}`;
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", description);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", title);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", description);
    document.querySelector('meta[property="og:url"]')?.setAttribute("content", canonical);
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", canonical);
  }, [pathname]);
  return null;
}
