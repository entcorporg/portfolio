import * as React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowRight, Download, Github, Mail } from "lucide-react";
import { TextShimmer } from "@/components/ui/text-shimmer";
import { FadeIn } from "@/components/ui/fade-in";
import { AnimatedGradient } from "@/components/ui/animated-gradient";
import { ScaleIn } from "@/components/ui/scale-in";

export function Hero() {
  const [greeting, setGreeting] = React.useState("Bonjour");

  React.useEffect(() => {
    const hour = new Date().getHours();
    setGreeting(hour < 12 ? "Bonjour" : "Bonsoir");
  }, []);

  return (
    <section id="hero" className="relative overflow-hidden min-h-dvh">
      {/* Animated Background gradient */}
      <AnimatedGradient className="absolute inset-0 -z-10" />

      <div className="container mx-auto px-4 py-24 md:py-32 lg:py-40">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Status Badge */}
          <FadeIn delay={0.1}>
            <Badge
              variant="secondary"
              className="px-4 py-1.5 text-sm whitespace-normal"
            >
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success/75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
              </span>
              En formation DWWM - Ouvert à l'alternance Bachelor
            </Badge>
          </FadeIn>

          {/* Main Content */}
          <FadeIn delay={0.3} className="space-y-4 max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              {greeting}, je suis{" "}
              <TextShimmer className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Diogo Pires
              </TextShimmer>
            </h1>
            <p className="text-xl text-muted-foreground md:text-2xl max-w-2xl mx-auto">
              Développeur Web en formation DWWM, passionné par la création
              d'applications web optimisées et performantes.
            </p>
          </FadeIn>

          {/* CTA Buttons */}
          <FadeIn delay={0.4} className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="gap-2" asChild>
              <a href="#projects">
                Voir mes projets
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="gap-2" asChild>
              <a href="/cv/CV_Diogo_Pires.pdf" download>
                <Download className="h-4 w-4" />
                Télécharger CV
              </a>
            </Button>
          </FadeIn>

          {/* Social Links */}
          <FadeIn delay={0.5} className="flex items-center gap-4 pt-4">
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://github.com/entcorporg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:diogo@clairtyx.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
