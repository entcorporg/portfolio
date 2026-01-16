import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Home, User, Lightbulb, Briefcase, Mail } from "lucide-react";
import { useEffect, useState } from "react";

const navigationMenuItems = [
  { label: "Accueil", href: "#hero", icon: Home },
  { label: "À propos", href: "#about", icon: User },
  { label: "Compétences", href: "#skills", icon: Lightbulb },
  { label: "Projets", href: "#projects", icon: Briefcase },
  { label: "Contact", href: "#contact", icon: Mail },
];

export default function NavigationMenuWithActiveItem() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationMenuItems
        .map((item) => {
          const sectionId = item.href.replace("#", "");
          const element = document.getElementById(sectionId);
          if (element) {
            const rect = element.getBoundingClientRect();
            return {
              id: sectionId,
              top: rect.top,
              bottom: rect.bottom,
            };
          }
          return null;
        })
        .filter(
          (section): section is { id: string; top: number; bottom: number } =>
            section !== null
        );

      // Trouve la section la plus visible dans le viewport
      const viewportMiddle = window.innerHeight / 2;

      if (sections.length === 0) return;

      let closestSection = sections[0];
      let minDistance = Math.abs(closestSection.top - viewportMiddle);

      sections.forEach((section) => {
        const distance = Math.abs(section.top - viewportMiddle);
        if (
          distance < minDistance &&
          section.top < viewportMiddle &&
          section.bottom > 0
        ) {
          minDistance = distance;
          closestSection = section;
        }
      });

      if (closestSection.id !== activeSection) {
        setActiveSection(closestSection.id);
      }
    };

    // Appel initial
    handleScroll();

    // Écoute le scroll
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  return (
    <NavigationMenu>
      <NavigationMenuList className="space-x-8">
        {navigationMenuItems.map((item) => {
          const sectionId = item.href.replace("#", "");
          const isActive = activeSection === sectionId;

          return (
            <NavigationMenuItem key={item.label}>
              <NavigationMenuLink
                className={cn(
                  "relative group inline-flex h-9 w-max items-center justify-center px-0.5 py-2 text-sm font-medium",
                  "before:absolute before:bottom-0 before:inset-x-0 before:h-0.5 before:bg-primary before:scale-x-0 before:transition-transform",
                  "hover:before:scale-x-100 hover:text-accent-foreground",
                  "focus:before:scale-x-100 focus:text-accent-foreground focus:outline-hidden",
                  "disabled:pointer-events-none disabled:opacity-50",
                  "data-active:before:scale-x-100 data-[state=open]:before:scale-x-100",
                  "hover:bg-transparent active:bg-transparent focus:bg-transparent"
                )}
                asChild
                active={isActive}
              >
                <a href={item.href} className="flex-row items-center gap-2.5">
                  <item.icon className="h-5 w-5 shrink-0" />
                  {item.label}
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
