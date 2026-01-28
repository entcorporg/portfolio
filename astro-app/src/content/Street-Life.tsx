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
import { streetLifeData } from "@/content/data/street-life";

export function StreetLife() {
  const project = {
    title: "Street Life - Magazine Web Lifestyle",
    description:
      "Site web lifestyle présentant du contenu sur la culture urbaine et la vie de rue. Magazine web avec navigation multi-pages (Accueil, Archives, Panorama, Contact, À propos), design responsive moderne et architecture CSS modulaire avec classes utilitaires. Design sophistiqué démontrant une maîtrise de la typographie élégante, espaces blancs stratégiques, et maquettes de formulaires. Projet purement HTML/CSS déployé sur GitHub Pages avec domaine personnalisé.",
    image:
      "https://raw.githubusercontent.com/entcorporg/html_avancer_1_devoir_exercice-2/main/docs/img/cinema.jpg",
    technologies: [
      "HTML5",
      "CSS3",
      "Docker",
      "Apache",
      "Responsive Design",
      "Flexbox",
      "CSS Variables",
      "Typography System",
      "GitHub Pages",
    ],
    githubUrl: "https://github.com/entcorporg/html_avancer_1_devoir_exercice-2",
    liveUrl: "https://html-avancer-1-devoir-exercice-2.clairtyx.com/",
    featured: true,
    date: "2026",
    overview:
      "Ce projet est un magazine web lifestyle sur la culture urbaine ('Street Life - The jungle groove') démontrant une approche éditoriale sophistiquée avec navigation multi-pages (Accueil, Archives, Panorama, À propos, Contact). Le design utilise HTML5 sémantique et CSS3 moderne avec classes utilitaires (Flexbox, variables CSS, typographie système). Architecture comprenant un header avec logo et navigation horizontale bleu, sections de contenu avec grilles d'articles (images, dates, titres, descriptions), et footer avec liens sociaux (Pinterest, Google, Facebook, Twitter, LinkedIn). Pages Archives, Panorama et À propos avec contenu démonstratif (Lorem ipsum). Formulaire Contact avec alert explicite '⚠️ Placeholder visuel'. Site déployé via Docker/Apache et hébergé sur GitHub Pages avec domaine personnalisé (html-avancer-1-devoir-exercice-2.clairtyx.com).",
    challenges: [
      "Créer une architecture multi-pages cohérente avec navigation contextuelle (5 pages)",
      "Implémenter un design responsive avec Flexbox pour layouts complexes (header, grilles, footer)",
      "Développer un système CSS modulaire avec variables et classes utilitaires réutilisables",
      "Créer une hiérarchie typographique élégante avec système cohérent (xs à 5xl)",
      "Concevoir un formulaire de contact visuellement attractif avec placeholder explicatif",
      "Mettre en place le déploiement Docker/Apache et hébergement GitHub Pages avec domaine personnalisé",
      "Assurer une expérience utilisateur fluide avec design moderne et espaces blancs stratégiques",
    ],
    metrics: [
      { label: "Pages", value: "5", icon: Rocket },
      { label: "Articles", value: "9+", icon: Target },
      { label: "Images", value: "12+", icon: CheckCircle2 },
      { label: "Réseaux sociaux", value: "5", icon: BarChart3 },
    ],
    features: [
      {
        title: "Design Lifestyle Moderne",
        description:
          "Design 'Street Life - The jungle groove' avec header logo/titre centré et navigation bleue horizontale. Système typographique cohérent avec variables CSS (text-xs à text-5xl), font-weights variés (300-700) et line-heights optimisés. Palette de couleurs avec bleu principal (#0087cc), texte (#555), et dates (#929292). Layout éditorial avec grilles d'articles incluant images, dates, titres et descriptions.",
        icon: Sparkles,
      },
      {
        title: "Architecture CSS Modulaire",
        description:
          "Header avec logo (80x80) et titre h1 centré, navigation bleue avec liens (Accueil, Archives, Panorama, Contact, À propos). Container responsive avec max-width adaptatif. Grilles d'articles Flexbox (flex-row, justify-between) avec cards incluant dates, titres h2, images et textes. Footer centré avec branding et 5 icônes réseaux sociaux (Pinterest, Google, Facebook, Twitter, LinkedIn).",
        icon: Target,
      },
      {
        title: "Navigation Multi-Pages Cohérente",
        description:
          "5 pages principales : Accueil (index.html) avec articles 'Jungle street lives' et 'Marquee Moon', Archives/Panorama/À propos avec contenus démonstratifs Lorem ipsum (Pellentesque, Mauris, Vivamus, etc.) et articles factices (Joe Cowards, Marquee Moon), Contact avec formulaire placeholder et alerte visuelle '⚠️ Placeholder visuel'. Navigation horizontale cohérente avec hover underline. Footer uniforme 'Street Life LTD Hambourg Germany' sur chaque page.",
        icon: Rocket,
      },
      {
        title: "Système CSS Variables Cohérent",
        description:
          "Variables CSS pour couleurs (--color-blue: #0087cc, --color-text: #555, --color-date: #929292, --color-menu, --color-link), typographie (--text-xs à --text-5xl avec line-heights), espacements (--spacing: .25rem), et weights (--font-weight-light: 300 à --font-weight-bold: 700). Classes utilitaires modernes (.text-center, .flex, .container, .hover:underline). Architecture modulaire style.css avec reset et composants.",
        icon: Zap,
      },
      {
        title: "Déploiement Docker & GitHub Pages",
        description:
          "Infrastructure Docker avec docker-compose.yaml et configuration Apache (apache.conf). Site containerisé pour environnement de développement reproductible. Déploiement automatisé sur GitHub Pages depuis dossier /docs (copie de /site). Domaine personnalisé configuré (html-avancer-1-devoir-exercice-2.clairtyx.com) avec fichier CNAME. Images optimisées (/img) pour performance web.",
        icon: BarChart3,
      },
      {
        title: "Contenu Démonstratif & Placeholders",
        description:
          "Pages Archives, Panorama et À propos contiennent du contenu Lorem ipsum démonstratif (Pellentesque vitae volutpat, Mauris pulvinar metus, Vivamus congue consectetur, etc.) avec articles factices répétés. Page Contact avec formulaire soigné (champs Nom, Email, Sujet, Message) et alert jaune explicite '⚠️ Placeholder visuel - Ce formulaire n'est pas fonctionnel'. Tous les champs et bouton désactivés (disabled, opacity-50, cursor-not-allowed) pour démonstration visuelle uniquement.",
        icon: CheckCircle2,
      },
    ],
    ...streetLifeData,
  };

  return (
    <div className="min-h-screen bg-background">
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
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ButtonShine
                        size="lg"
                        variant={"secondary"}
                        className="flex items-center gap-2"
                      >
                        <Globe className="h-4 w-4 mr-2" />
                        Voir le site
                      </ButtonShine>
                    </a>
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
                <TabsList className="relative grid w-full grid-cols-4 bg-muted/50 rounded-lg p-1">
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
