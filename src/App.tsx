import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ArticlesSection } from "./components/ArticlesSection";
import { AboutSection } from "./components/AboutSection";
import { SmartAppsPage } from "./pages/SmartAppsPage";
import { AIJobsPage } from "./pages/AIJobsPage";

function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProjectsSection />
        <ArticlesSection />
        <AboutSection />
      </main>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/smart-apps" element={<SmartAppsPage />} />
        <Route path="/ai-jobs" element={<AIJobsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
