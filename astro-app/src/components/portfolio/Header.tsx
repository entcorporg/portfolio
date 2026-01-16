import * as React from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "../theme-toggle";
import NavigationMenuWithActiveItem from "../customized/navigation-menu/navigation-menu-05";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navItems = [
    { label: "Accueil", href: "#hero" },
    { label: "À propos", href: "#about" },
    { label: "Compétences", href: "#skills" },
    { label: "Projets", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <a href="/" className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
            DP
          </div>
          <span className="font-bold text-xl">Diogo Pires</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          <NavigationMenuWithActiveItem />
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" size="sm" asChild>
            <a href="/cv/CV_Diogo_Pires.pdf" download>
              CV
            </a>
          </Button>
          <Button size="sm" asChild>
            <a href="#contact">Me contacter</a>
          </Button>

          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="flex flex-col space-y-4 p-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="flex flex-col space-y-2 pt-4 border-t">
              <Button variant="outline" size="sm" asChild>
                <a href="/cv/CV_Diogo_Pires.pdf" download>
                  CV
                </a>
              </Button>
              <Button size="sm" asChild>
                <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
                  Me contacter
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
