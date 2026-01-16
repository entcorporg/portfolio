import * as React from "react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/entcorporg", label: "GitHub" },
  ];

  const quickLinks = [
    { label: "Accueil", href: "#hero" },
    { label: "À propos", href: "#about" },
    { label: "Compétences", href: "#skills" },
    { label: "Projets", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <a href="/" className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
                DP
              </div>
              <span className="font-bold text-xl">Diogo Pires</span>
            </a>
            <p className="text-muted-foreground text-sm max-w-xs">
              Développeur Web en formation DWWM, passionné par la création
              d'applications web optimisées et performantes.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((social, index) => (
                <Button key={index} variant="ghost" size="icon" asChild>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Navigation</h3>
            <nav className="flex flex-col space-y-2">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold">Contact</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>diogo@clairtyx.com</p>
              <p>Vendée, France</p>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Diogo Pires. Tous droits réservés.</p>
          <p className="flex items-center gap-1">
            Fait avec <Heart className="h-4 w-4 text-red-500 fill-red-500" /> et
            beaucoup de café
          </p>
        </div>
      </div>
    </footer>
  );
}
