import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';
import { useLanguage } from '../i18n';

export function Navbar() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 nav-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <span className="text-lg font-semibold">DONA</span>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
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

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 pt-2 space-y-3">
            <a
              href="#about"
              onClick={closeMenu}
              className="block py-2 hover:text-primary transition-colors"
            >
              {t("Sobre mí", "About")}
            </a>
            <a
              href="#projects"
              onClick={closeMenu}
              className="block py-2 hover:text-primary transition-colors"
            >
              {t("Proyectos", "Projects")}
            </a>
            <a
              href="#experience"
              onClick={closeMenu}
              className="block py-2 hover:text-primary transition-colors"
            >
              {t("Experiencia", "Experience")}
            </a>
            <a
              href="#contact"
              onClick={closeMenu}
              className="block py-2 hover:text-primary transition-colors"
            >
              {t("Contacto", "Contact")}
            </a>
            <div className="flex items-center gap-4 pt-2 border-t border-white/10">
              <ThemeToggle />
              <LanguageToggle />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}