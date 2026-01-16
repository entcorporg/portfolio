import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { Badge } from "@/components/ui/badge";
import { Button, ButtonShine } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { ScaleIn } from "@/components/ui/scale-in";
import { Separator } from "@/components/ui/separator";
import {
  Github,
  Globe,
  Code2,
  Zap,
  CheckCircle2,
  Rocket,
  BarChart3,
  Target,
  Sparkles,
} from "lucide-react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  TabsHighlight,
  TabsHighlightItem,
  TabsContents,
} from "@/components/animate-ui/primitives/animate/tabs";
import { CodeBlock } from "@/components/animate-ui/primitives/animate/code-block";
import {
  Code,
  CodeHeader,
} from "@/components/animate-ui/components/animate/code";
import { HoleBackground as Hole } from "@/components/animate-ui/components/backgrounds/hole";
import { Button as AnimatedButton } from "@/components/animate-ui/components/buttons/button";
import { librarieIndependanteData } from "@/content/data/librairie-independante";

interface ProjectDetailProps {
  slug: string;
}

export function ProjectDetail({ slug }: ProjectDetailProps) {
  // Données du projet
  const projectsData: Record<string, any> = {
    "librairie-independante": {
      title: "Librairie L'indépendante",
      description:
        "Site vitrine d'une librairie indépendante avec optimisation poussée des performances web. Projet éducatif démontrant l'excellence technique en HTML5, CSS3 et JavaScript vanilla, avec des scores Lighthouse parfaits et des techniques d'optimisation avancées. Architecture component-based, images responsives avec srcset, WebP moderne, et déploiement Docker professionnel.",
      image:
        "https://raw.githubusercontent.com/entcorporg/cour_Se_Perfectionner_en_HTML-CSS/main/docs/img/bandeau.webp",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Docker",
        "Apache",
        "WebP",
        "Performance",
        "SEO",
        "Responsive",
        "Component Architecture",
      ],
      githubUrl:
        "https://github.com/entcorporg/cour_Se_Perfectionner_en_HTML-CSS",
      liveUrl: "https://cour-se-perfectionner-en-html-css.clairtyx.com/",
      featured: true,
      date: "Janvier 2026",
      overview:
        "Ce projet démontre l'excellence en optimisation web avec un focus sur la performance, l'accessibilité et les bonnes pratiques modernes. Le site atteint un score parfait de 100/100 en Performance et Best Practices sur Google Lighthouse grâce à une série d'optimisations techniques avancées : images WebP avec srcset responsive (réduction de 82% sur mobile), preload des ressources critiques, inline CSS pour le rendu immédiat, architecture component-based en JavaScript vanilla, et déploiement Docker avec configuration Apache optimale. Le projet démontre qu'il est possible d'atteindre des performances exceptionnelles sans framework lourd, en maîtrisant les fondamentaux du web.",
      challenges: [
        "Atteindre un score de 100/100 en Performance sur Google Lighthouse avec LCP < 1.5s",
        "Optimiser les images avec conversion WebP automatique et génération de multiples tailles (480w, 768w, 960w)",
        "Implémenter une architecture component-based en JavaScript vanilla sans framework",
        "Assurer une accessibilité WCAG 2.1 niveau AA (score 92/100)",
        "Containerisation Docker complète avec Apache optimisé (Gzip, cache stratégique, headers de sécurité)",
        "Maintenir un CLS de 0.02 avec réservation d'espace pour les images et fonts",
        "Configurer un système de build avec scripts bash pour l'optimisation automatique des assets",
      ],
      metrics: [
        { label: "Performance", value: "100", icon: Rocket },
        { label: "Accessibilité", value: "92", icon: Target },
        { label: "Meilleures pratiques", value: "100", icon: CheckCircle2 },
        { label: "SEO", value: "100", icon: BarChart3 },
      ],
      features: [
        {
          title: "Performance 100/100 Lighthouse",
          description:
            "Score Lighthouse parfait obtenu grâce au preload des ressources critiques, inline CSS, compression WebP (48% de réduction), et optimisation LCP de 1.4s. Images responsive avec <picture> et srcset pour réduire de 82% le poids sur mobile. CLS de 0.02 avec réservation d'espace explicite.",
          icon: Rocket,
        },
        {
          title: "Images Responsives Multi-Formats",
          description:
            "Système d'images avancé avec élément <picture>, srcset avec 3 tailles (480w, 768w, 960w), conversion WebP automatique via scripts bash, et fallback JPEG. Attributs width/height pour éviter le CLS. fetchpriority='high' sur l'image LCP. Scripts create-responsive-images.sh et optimize-image.sh pour automatisation.",
          icon: Sparkles,
        },
        {
          title: "Architecture Composants JavaScript",
          description:
            "JavaScript modulaire avec HeaderComposant (accepte titre, menuItems, imageUrl), CardLivreComposant (titre, auteur, année, genre, description), et FooterComposant. Génération dynamique du DOM avec template literals. Approche DRY et réutilisable tout en restant en vanilla JS. Chargement différé avec defer.",
          icon: Target,
        },
        {
          title: "Design System CSS avec Variables",
          description:
            "Système de design centralisé avec :root pour variables (--color-rouge-1, --size-xs, --font-xl). Classes utilitaires réutilisables (.texte-centre, .max-width-960px, .card-livre). Flexbox pour layouts et inline-block pour le menu. Nomenclature BEM pour les composants. Aspect-ratio pour maintenir proportions.",
          icon: Zap,
        },
        {
          title: "Docker + Apache Optimisé",
          description:
            "Image Alpine légère avec configuration Apache personnalisée. Compression Gzip via mod_deflate pour tous les text/. Cache stratégique : 1 an pour images/CSS/JS, 5 minutes pour HTML. Headers de sécurité (X-Content-Type-Options, X-Frame-Options, X-XSS-Protection). Scripts bash intégrés au workflow.",
          icon: BarChart3,
        },
        {
          title: "SEO & Accessibilité Excellents",
          description:
            "SEO 100/100 avec meta descriptions riches, structure sémantique HTML5 (header, nav, main, footer, section), balises alt descriptives. Accessibilité 92/100 avec navigation aria-label, contraste WCAG AA, ordre de tabulation logique, et support clavier complet. Preconnect pour fonts, preload pour LCP.",
          icon: CheckCircle2,
        },
      ],
      ...librarieIndependanteData,
    },
  };

  const project = projectsData[slug];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold">Projet non trouvé</h1>
          <p className="text-muted-foreground">
            Le projet "{slug}" n'existe pas.
          </p>
          <Button asChild>
            <a href="/#projects">Retour aux projets</a>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Background Effect */}
      <section className="relative overflow-hidden py-20 md:py-32 min-h-dvh">
        <Hole className="absolute inset-0 opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <FadeIn>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                {project.featured && (
                  <Badge variant="default" className="mb-2">
                    ⭐ Projet Vedette
                  </Badge>
                )}
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                  {project.title}
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                <p className="text-sm text-muted-foreground">{project.date}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech: string) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  {project.liveUrl && (
                    <ButtonShine size="lg" variant={"secondary"}>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Globe className="h-4 w-4 mr-2" />
                        Voir le site
                      </a>
                    </ButtonShine>
                  )}
                  {project.githubUrl && (
                    <AnimatedButton variant="outline" size="lg" asChild>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code source
                      </a>
                    </AnimatedButton>
                  )}
                </div>
              </div>

              <ScaleIn delay={0.2}>
                <div className="relative rounded-lg overflow-hidden shadow-2xl border">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto"
                  />
                </div>
              </ScaleIn>
            </div>
          </FadeIn>
        </div>
      </section>

      <Separator />

      {/* Metrics Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-12 text-center">
              Scores Google Lighthouse
            </h2>
            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {project.metrics.map((metric: any, index: number) => {
                const Icon = metric.icon;
                return (
                  <CardContainer
                    key={index}
                    className="inter-var"
                    containerClassName="py-0"
                  >
                    <CardBody className="relative group/card max-w-52 min-w-44 w-auto h-auto rounded-xl p-6 border text-center border-sidebar-border bg-card hover:bg-accent/50 transition-colors">
                      <CardItem
                        translateZ="50"
                        className="w-full flex justify-center"
                      >
                        <Icon className="h-8 w-8 text-primary" />
                      </CardItem>
                      <CardItem
                        translateZ="75"
                        className="text-4xl font-bold mb-2 mt-3 w-full text-center"
                      >
                        {metric.value}
                      </CardItem>
                      <CardItem
                        translateZ="60"
                        className="text-sm text-muted-foreground w-full text-center"
                      >
                        {metric.label}
                      </CardItem>
                    </CardBody>
                  </CardContainer>
                );
              })}
            </div>
          </FadeIn>
        </div>
      </section>

      <Separator />

      {/* Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                <Zap className="h-8 w-8 text-primary" />
                Vue d'ensemble
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.overview}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <Separator />

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-12 text-center">
              Fonctionnalités Clés
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.features.map((feature: any, index: number) => {
                const Icon = feature.icon;
                return (
                  <CardContainer
                    key={index}
                    className="inter-var"
                    containerClassName="py-0"
                  >
                    <CardBody className="relative group/card max-w-95 min-h-90 w-full h-full rounded-xl p-6 border border-sidebar-border bg-card hover:bg-accent/50 transition-colors">
                      <CardItem
                        translateZ="50"
                        className="w-full flex justify-center"
                      >
                        <Icon className="h-8 w-8 text-primary mb-2 group-hover/card:scale-110 transition-transform" />
                      </CardItem>
                      <CardItem
                        translateZ="60"
                        className="text-xl font-bold mb-4 w-full"
                      >
                        {feature.title}
                      </CardItem>
                      <CardItem
                        translateZ="40"
                        as="p"
                        className="text-muted-foreground leading-relaxed w-full h-auto text-center"
                      >
                        {feature.description}
                      </CardItem>
                    </CardBody>
                  </CardContainer>
                );
              })}
            </div>
          </FadeIn>
        </div>
      </section>

      <Separator />

      {/* Challenges Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Défis Relevés</h2>
              <ul className="space-y-4">
                {project.challenges.map((challenge: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-green-500 mt-0.5 shrink-0" />
                    <span className="text-lg">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      <Separator />

      {/* Code Examples Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-2">
              <Code2 className="h-8 w-8" />
              Exemples de Code
            </h2>
            <div className="max-w-4xl mx-auto">
              <Tabs defaultValue="html" className="w-full">
                <TabsList className="relative grid w-full grid-cols-6 bg-muted/50 rounded-lg p-1">
                  <TabsHighlight className="bg-background shadow-sm rounded-md">
                    <TabsHighlightItem value="html">
                      <TabsTrigger value="html" className="relative z-10">
                        HTML
                      </TabsTrigger>
                    </TabsHighlightItem>
                    <TabsHighlightItem value="css">
                      <TabsTrigger value="css" className="relative z-10">
                        CSS
                      </TabsTrigger>
                    </TabsHighlightItem>
                    <TabsHighlightItem value="javascript">
                      <TabsTrigger value="javascript" className="relative z-10">
                        JS
                      </TabsTrigger>
                    </TabsHighlightItem>
                    <TabsHighlightItem value="docker">
                      <TabsTrigger value="docker" className="relative z-10">
                        Docker
                      </TabsTrigger>
                    </TabsHighlightItem>
                    <TabsHighlightItem value="apache">
                      <TabsTrigger value="apache" className="relative z-10">
                        Apache
                      </TabsTrigger>
                    </TabsHighlightItem>
                    <TabsHighlightItem value="bash">
                      <TabsTrigger value="bash" className="relative z-10">
                        Bash
                      </TabsTrigger>
                    </TabsHighlightItem>
                  </TabsHighlight>
                </TabsList>
                <TabsContents className="mt-6">
                  <TabsContent value="html">
                    <Code code={project.codeExamples.html}>
                      <CodeHeader copyButton>HTML Structure</CodeHeader>
                      <CodeBlock
                        code={project.codeExamples.html}
                        lang="html"
                        writing={true}
                        inView={true}
                        className="max-h-150 overflow-auto rounded-lg"
                      />
                    </Code>
                  </TabsContent>
                  <TabsContent value="css">
                    <Code code={project.codeExamples.css}>
                      <CodeHeader copyButton>CSS Styles</CodeHeader>
                      <CodeBlock
                        code={project.codeExamples.css}
                        lang="css"
                        className="max-h-150 overflow-auto rounded-lg"
                      />
                    </Code>
                  </TabsContent>
                  <TabsContent value="javascript">
                    <Code code={project.codeExamples.javascript}>
                      <CodeHeader copyButton>JavaScript Components</CodeHeader>
                      <CodeBlock
                        code={project.codeExamples.javascript}
                        lang="javascript"
                        className="max-h-150 overflow-auto rounded-lg"
                      />
                    </Code>
                  </TabsContent>
                  <TabsContent value="docker">
                    <Code code={project.codeExamples.docker}>
                      <CodeHeader copyButton>Dockerfile</CodeHeader>
                      <CodeBlock
                        code={project.codeExamples.docker}
                        lang="dockerfile"
                        className="max-h-150 overflow-auto rounded-lg"
                      />
                    </Code>
                  </TabsContent>
                  <TabsContent value="apache">
                    <Code code={project.codeExamples.apache}>
                      <CodeHeader copyButton>Apache Configuration</CodeHeader>
                      <CodeBlock
                        code={project.codeExamples.apache}
                        lang="apache"
                        className="max-h-150 overflow-auto rounded-lg"
                      />
                    </Code>
                  </TabsContent>
                  <TabsContent value="bash">
                    <Code code={project.codeExamples.bash}>
                      <CodeHeader copyButton>Optimization Script</CodeHeader>
                      <CodeBlock
                        code={project.codeExamples.bash}
                        lang="bash"
                        className="max-h-150 overflow-auto rounded-lg"
                      />
                    </Code>
                  </TabsContent>
                </TabsContents>
              </Tabs>
            </div>
          </FadeIn>
        </div>
      </section>

      <Separator />

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center space-y-6 max-w-3xl mx-auto">
              <Rocket className="h-12 w-12 mx-auto text-primary" />
              <h2 className="text-3xl font-bold">Intéressé par ce projet ?</h2>
              <p className="text-xl text-muted-foreground">
                Consultez le code source ou visitez le site en ligne pour voir
                le résultat final.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                {project.liveUrl && (
                  <ButtonShine size="lg" variant={"secondary"}>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Globe className="h-4 w-4 mr-2" />
                      Voir le site
                    </a>
                  </ButtonShine>
                )}
                {project.githubUrl && (
                  <AnimatedButton size="lg" variant="outline" asChild>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code source
                    </a>
                  </AnimatedButton>
                )}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
