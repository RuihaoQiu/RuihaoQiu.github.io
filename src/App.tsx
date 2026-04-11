import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ArticlesSection } from "./components/ArticlesSection";
import { AboutSection } from "./components/AboutSection";

export default function App() {
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
