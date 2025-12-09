import { Link } from 'react-router-dom';
import { Container } from '@/components/ui/Container';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t">
      <Container className="py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Portfolio</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              A comprehensive showcase of my work in software architecture and
              development.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="hover:text-foreground text-gray-600 transition-colors dark:text-gray-400"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-foreground text-gray-600 transition-colors dark:text-gray-400"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/experience"
                  className="hover:text-foreground text-gray-600 transition-colors dark:text-gray-400"
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="hover:text-foreground text-gray-600 transition-colors dark:text-gray-400"
                >
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Technical</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/skills"
                  className="hover:text-foreground text-gray-600 transition-colors dark:text-gray-400"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  to="/architecture"
                  className="hover:text-foreground text-gray-600 transition-colors dark:text-gray-400"
                >
                  Architecture
                </Link>
              </li>
              <li>
                <Link
                  to="/microfrontends"
                  className="hover:text-foreground text-gray-600 transition-colors dark:text-gray-400"
                >
                  Microfrontends
                </Link>
              </li>
              <li>
                <Link
                  to="/tooling"
                  className="hover:text-foreground text-gray-600 transition-colors dark:text-gray-400"
                >
                  Tooling
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/blog"
                  className="hover:text-foreground text-gray-600 transition-colors dark:text-gray-400"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-foreground text-gray-600 transition-colors dark:text-gray-400"
                >
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com"
                  className="hover:text-foreground text-gray-600 transition-colors dark:text-gray-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  className="hover:text-foreground text-gray-600 transition-colors dark:text-gray-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-8">
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} Portfolio. Built with React, TypeScript, and
            Tailwind CSS.
          </p>
        </div>
      </Container>
    </footer>
  );
}
