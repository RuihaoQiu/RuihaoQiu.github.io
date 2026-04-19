import { HashRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ArticlesSection } from "./components/ArticlesSection";
import { AboutSection } from "./components/AboutSection";
import { SmartAppsPage } from "./pages/SmartAppsPage";
import { AIJobsPage } from "./pages/AIJobsPage";
import { WorkforcePlanningPage } from "./pages/WorkforcePlanningPage";
import { AttritionPredictionPage } from "./pages/AttritionPredictionPage";

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
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/smart-apps" element={<SmartAppsPage />} />
        <Route path="/ai-jobs" element={<AIJobsPage />} />
        <Route path="/workforce-planning" element={<WorkforcePlanningPage />} />
        <Route path="/attrition-prediction" element={<AttritionPredictionPage />} />
      </Routes>
    </HashRouter>
  );
}
