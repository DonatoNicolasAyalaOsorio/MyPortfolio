import React from 'react';
import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';
import { useLanguage } from '../i18n';

export function Navbar() {
  const { t } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 nav-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <span className="text-lg font-semibold">DONA</span>
          <div className="flex items-center gap-8">
            <a href="#about" className="hover:text-primary transition-colors">
              {t("Sobre mí", "About")}
            </a>
            <a href="#projects" className="hover:text-primary transition-colors">
              {t("Proyectos", "Projects")}
            </a>
            <a href="#experience" className="hover:text-primary transition-colors">
              {t("Experiencia", "Experience")}
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              {t("Contacto", "Contact")}
            </a>
            <ThemeToggle />
            <LanguageToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}