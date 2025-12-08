import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import { HomePage } from "@/pages/HomePage";
import { AboutPage } from "@/pages/AboutPage";
import { ExperiencePage } from "@/pages/ExperiencePage";
import { SkillsPage } from "@/pages/SkillsPage";
import { ProjectsPage } from "@/pages/ProjectsPage";
import { ArchitecturePage } from "@/pages/ArchitecturePage";
import { MicrofrontendsPage } from "@/pages/MicrofrontendsPage";
import { ToolingPage } from "@/pages/ToolingPage";
import { BlogPage } from "@/pages/BlogPage";
import { ContactPage } from "@/pages/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/architecture" element={<ArchitecturePage />} />
          <Route path="/microfrontends" element={<MicrofrontendsPage />} />
          <Route path="/tooling" element={<ToolingPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
