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
import { LiveProjectsPage } from "./pages/LiveProjectsPage";
import { AutoReportPage } from "./pages/AutoReportPage";
import { FiberXPage } from "./pages/FiberXPage";
import { MLMaterialsPage } from "./pages/MLMaterialsPage";
import { AutomationPotentialsPage } from "./pages/AutomationPotentialsPage";
import { LLMExtractionPage } from "./pages/LLMExtractionPage";
import { LLMEvalsPage } from "./pages/LLMEvalsPage";
import { StrategicWorkforcePlanningPage } from "./pages/StrategicWorkforcePlanningPage";

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
        <Route path="/live-projects" element={<LiveProjectsPage />} />
        <Route path="/auto-report" element={<AutoReportPage />} />
        <Route path="/fiberx" element={<FiberXPage />} />
        <Route path="/ml-materials" element={<MLMaterialsPage />} />
        <Route path="/automation-potentials" element={<AutomationPotentialsPage />} />
        <Route path="/llm-extraction" element={<LLMExtractionPage />} />
        <Route path="/llm-evals" element={<LLMEvalsPage />} />
        <Route path="/strategic-workforce-planning" element={<StrategicWorkforcePlanningPage />} />
      </Routes>
    </HashRouter>
  );
}
