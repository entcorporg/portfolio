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
import { leGlobuleData } from "@/content/data/le-globule";

export function LeGlobule() {
  const project = {
    title: "Le Globule - Site Éducatif HTML/CSS",
    description:
      "Site web éducatif multi-pages avec design system CSS avancé, navigation complexe avec sous-menus, et optimisation WebP. Projet démontrant la maîtrise des fondamentaux HTML/CSS/JS avec architecture component-based, classes utilitaires réutilisables, colonnes CSS, et design responsive complet. Menu hamburger mobile, grille CSS pour layouts complexes, et système de couleurs cohérent avec variables CSS.",
    image:
      "https://raw.githubusercontent.com/entcorporg/html_avancer_1_devoir_exercice-1/main/site/img/globule.jpg",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript ES6",
      "Docker",
      "Apache",
      "WebP",
      "Responsive Design",
      "CSS Grid",
      "Flexbox",
      "CSS Variables",
    ],
    githubUrl:
      "https://github.com/entcorporg/html_avancer_1_devoir_exercice-1",
    liveUrl: "https://html-avancer-1-devoir-exercice-1.clairtyx.com/",
    featured: true,
    date: "Janvier 2026",
    overview:
      "Ce projet démontre une maîtrise approfondie des fondamentaux web avec un site multi-pages comportant une navigation complexe à trois niveaux (Triangle, Choix, Surtriangle), chacun avec trois sous-sections. L'architecture repose sur un design system CSS cohérent avec variables personnalisées pour couleurs et espacements, des classes utilitaires réutilisables, et un système de composants JavaScript modulaire. Le site implémente un menu responsive avec overlay mobile, des colonnes CSS pour textes en deux colonnes, et un système d'images WebP optimisées avec srcset. La mise en page utilise Flexbox et Grid CSS pour des layouts complexes, avec un focus sur la réutilisabilité du code et les bonnes pratiques.",
    challenges: [
      "Créer une navigation complexe à 3 niveaux avec sous-menus déroulants et images illustratives",
      "Implémenter un menu hamburger mobile avec overlay et transitions smooth",
      "Développer un design system CSS avec variables pour couleurs, tailles et espacements cohérents",
      "Optimiser les images avec WebP et srcset multi-tailles (480w, 768w, 960w)",
      "Créer des layouts complexes avec colonnes CSS et column-rule personnalisé",
      "Assurer la réutilisabilité du code avec classes utilitaires et composants JavaScript",
      "Gérer la containerisation Docker avec Apache pour un déploiement professionnel",
    ],
    metrics: [
      { label: "Pages", value: "27+", icon: Rocket },
      { label: "Sous-menus", value: "9", icon: Target },
      { label: "Composants JS", value: "3", icon: CheckCircle2 },
      { label: "Variables CSS", value: "20+", icon: BarChart3 },
    ],
    features: [
      {
        title: "Navigation Multi-Niveaux Complexe",
        description:
          "Système de navigation à 3 niveaux (Triangle, Choix, Surtriangle) avec 9 sous-menus interactifs. Chaque sous-menu affiche une grille 2 colonnes avec liste de liens et image illustrative. Menu hamburger mobile avec overlay semi-transparent et animation slide. Support clavier complet et aria-labels pour accessibilité.",
        icon: Rocket,
      },
      {
        title: "Design System CSS Avancé",
        description:
          "Variables CSS centralisées (:root) pour couleurs (--color-blanc, --color-139c19, --color-19b123), espacements (--spacing), et typographie (--font-xl). Classes utilitaires réutilisables (.text-centre, .max-width-960px, .bg-linear-to-b). Nomenclature cohérente et système de couleurs vert/rouge/jaune/bleu pour théming.",
        icon: Sparkles,
      },
      {
        title: "Layouts CSS Sophistiqués",
        description:
          "Colonnes CSS pour textes en deux colonnes avec column-rule personnalisé (2px solid). Flexbox pour header/footer et navigation horizontale. Grid CSS pour cartes de contenu et layouts complexes. Aspect-ratio pour maintenir proportions. Responsive complet avec breakpoints md: pour tablet/desktop.",
        icon: Target,
      },
      {
        title: "Architecture JavaScript Modulaire",
        description:
          "Composants ES6 réutilisables (HeaderComposant, FooterComposant, CardComposant). Gestion d'événements pour menu mobile avec toggle et overlay. Template literals pour génération dynamique du DOM. Module pattern pour encapsulation du code. Chargement différé avec type='module'.",
        icon: Zap,
      },
      {
        title: "Images WebP Multi-Formats",
        description:
          "Élément <picture> avec sources WebP et fallback JPEG. Srcset responsive avec 3 tailles (480w, 768w, 960w) pour optimisation mobile. Attributs width/height explicites pour éviter CLS. Lazy loading avec loading='lazy'. Scripts bash pour génération automatique des variantes.",
        icon: BarChart3,
      },
      {
        title: "Menu Mobile Interactif",
        description:
          "Burger menu avec icône SVG animée (X au clic). Overlay semi-transparent (#111 opacity) pour focus. Navigation verticale sur mobile, horizontale sur desktop. Transitions CSS smooth sur ouverture/fermeture. Z-index gestion pour layering correct. Support touch et click.",
        icon: CheckCircle2,
      },
    ],
    ...leGlobuleData,
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Le reste du JSX est identique à Librairie-Independante.tsx */}
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

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-12 text-center">
              Métriques du Projet
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

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-2">
              <Code2 className="h-8 w-8" />
              Exemples de Code
            </h2>
            <div className="max-w-4xl mx-auto">
              <Tabs defaultValue="html" className="w-full">
                <TabsList className="relative grid w-full grid-cols-5 bg-muted/50 rounded-lg p-1">
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
                      <CodeHeader copyButton>JavaScript de mise en page responsive</CodeHeader>
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
                </TabsContents>
              </Tabs>
            </div>
          </FadeIn>
        </div>
      </section>

      <Separator />

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
