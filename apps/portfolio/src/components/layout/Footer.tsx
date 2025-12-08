import { Link } from "react-router-dom";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Portfolio</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              A comprehensive showcase of my work in software architecture and development.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-foreground transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-foreground transition-colors">About</Link></li>
              <li><Link to="/experience" className="text-gray-600 dark:text-gray-400 hover:text-foreground transition-colors">Experience</Link></li>
              <li><Link to="/projects" className="text-gray-600 dark:text-gray-400 hover:text-foreground transition-colors">Projects</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Technical</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/skills" className="text-gray-600 dark:text-gray-400 hover:text-foreground transition-colors">Skills</Link></li>
              <li><Link to="/architecture" className="text-gray-600 dark:text-gray-400 hover:text-foreground transition-colors">Architecture</Link></li>
              <li><Link to="/microfrontends" className="text-gray-600 dark:text-gray-400 hover:text-foreground transition-colors">Microfrontends</Link></li>
              <li><Link to="/tooling" className="text-gray-600 dark:text-gray-400 hover:text-foreground transition-colors">Tooling</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/blog" className="text-gray-600 dark:text-gray-400 hover:text-foreground transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-foreground transition-colors">Contact</Link></li>
              <li><a href="https://github.com" className="text-gray-600 dark:text-gray-400 hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://linkedin.com" className="text-gray-600 dark:text-gray-400 hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t">
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
            © {currentYear} Portfolio. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </Container>
    </footer>
  );
}
