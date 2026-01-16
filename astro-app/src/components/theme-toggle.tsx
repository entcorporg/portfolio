"use client";
import { useEffect, useState } from "react";

import { Monitor, Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

type Theme = "dark" | "light" | "system";

const STORAGE_KEY = "clairtyx-theme";

// Hook personnalisé pour gérer le thème
const useTheme = () => {
  const [theme, setThemeState] = useState<Theme>("system");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem(STORAGE_KEY) as Theme;
    if (storedTheme) {
      setThemeState(storedTheme);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const root = window.document.documentElement;
    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme);
    }
  }, [theme, mounted]);

  const setTheme = (newTheme: Theme) => {
    localStorage.setItem(STORAGE_KEY, newTheme);
    setThemeState(newTheme);
  };

  return { theme, setTheme, mounted };
};

const ThemeToggle = () => {
  const { theme, setTheme, mounted } = useTheme();

  const themeLabel =
    theme === "light" ? "Clair" : theme === "dark" ? "Sombre" : "Système";

  // Éviter le flash pendant le chargement
  if (!mounted) {
    return (
      <Button variant="outline" size="icon" disabled>
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      </Button>
    );
  }

  return (
    <TooltipProvider>
      <DropdownMenu>
        <Tooltip>
          <TooltipTrigger asChild>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                {theme === "light" && <Sun className="h-[1.2rem] w-[1.2rem]" />}
                {theme === "dark" && <Moon className="h-[1.2rem] w-[1.2rem]" />}
                {theme === "system" && (
                  <Monitor className="h-[1.2rem] w-[1.2rem]" />
                )}
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
          </TooltipTrigger>
          <TooltipContent>
            <p>Thème : {themeLabel}</p>
          </TooltipContent>
        </Tooltip>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setTheme("light")}>
            <Sun className="mr-2 h-4 w-4" />
            Clair
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            <Moon className="mr-2 h-4 w-4" />
            Sombre
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")}>
            <Monitor className="mr-2 h-4 w-4" />
            Système
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </TooltipProvider>
  );
};

// Composant pour le sélecteur de thème mobile (boutons segmentés)
const ThemeToggleMobile = () => {
  const { theme, setTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <div className="bg-muted/50 flex h-10 w-full rounded-lg p-1">
        <div className="flex-1" />
      </div>
    );
  }

  const themes: { value: Theme; icon: typeof Sun; label: string }[] = [
    { value: "light", icon: Sun, label: "Clair" },
    { value: "dark", icon: Moon, label: "Sombre" },
    { value: "system", icon: Monitor, label: "Système" },
  ];

  return (
    <div className="bg-muted flex h-10 w-full rounded-lg p-1">
      {themes.map(({ value, icon: Icon, label }) => (
        <button
          key={value}
          onClick={() => setTheme(value)}
          className={cn(
            "flex flex-1 items-center justify-center gap-1.5 rounded-md text-sm font-medium transition-all",
            theme === value
              ? "bg-background text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          <Icon className="size-4" />
          <span className="max-[400px]:hidden">{label}</span>
        </button>
      ))}
    </div>
  );
};

export { ThemeToggle, ThemeToggleMobile };
