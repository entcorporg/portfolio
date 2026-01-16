import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Code, Briefcase, GraduationCap, Heart } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { ScaleIn } from "@/components/ui/scale-in";

export function About() {
  const stats = [
    { label: "Années d'expérience", value: "1" },
    { label: "Projets réalisés", value: "1" },
    { label: "Formation", value: "DWWM" },
    { label: "Technologies maîtrisées", value: "9+" },
  ];

  const highlights = [
    {
      icon: Code,
      title: "Développement",
      description:
        "Création d'applications web modernes avec les dernières technologies",
    },
    {
      icon: Briefcase,
      title: "Formation",
      description:
        "En formation DWWM (Développeur Web et Web Mobile) depuis 2025",
    },
    {
      icon: GraduationCap,
      title: "Apprentissage",
      description:
        "Projets d'évaluation scolaire et développement de compétences",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "L'innovation et l'expérience utilisateur sont ma priorité",
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <FadeIn className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="px-4 py-1.5">
            À propos
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Qui suis-je ?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            En reconversion professionnelle, je me spécialise dans le
            développement web avec une approche pratique et orientée
            performance.
          </p>
        </FadeIn>

        {/* Stats */}
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, index) => (
            <ScaleIn key={index} delay={0.1 + index * 0.1}>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            </ScaleIn>
          ))}
        </div>

        <Separator className="mb-16" />

        {/* Highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <FadeIn key={index} delay={0.5 + index * 0.1}>
              <Card className="group hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <highlight.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>

        {/* Bio */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card>
            <CardContent className="pt-6 prose prose-neutral dark:prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                Après un Bac Pro MELEC (Métiers de l'Électricité et de ses
                Environnements Connectés) obtenu avec mention Assez Bien, j'ai
                poursuivi avec un BTS Responsable de Point de Vente en
                alternance chez Pigier Nantes/Cedeo St-Nazaire. Cette expérience
                m'a permis de développer des compétences en gestion et en
                relation client.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Passionné par la technologie et le développement web, je suis
                actuellement en formation Développeur Web et Web Mobile
                (RNCP37674) depuis 2025. Je me concentre sur la création
                d'applications web performantes et optimisées, avec un intérêt
                particulier pour les frameworks modernes comme Rust/Axum et
                l'optimisation des performances web.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Mon objectif professionnel est de poursuivre avec un Bachelor en
                alternance, puis un Master, pour me spécialiser en tant que
                Développeur SaaS avec une expertise DevOps et Kubernetes. Je
                suis actuellement à la recherche d'une opportunité en alternance
                pour concrétiser ce parcours et développer mes compétences dans
                un environnement professionnel stimulant.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
