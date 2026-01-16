import * as React from "react";
import { FadeIn } from "@/components/ui/fade-in";
import { Badge } from "@/components/ui/badge";

export function Features() {
  const features = [
    {
      id: 1,
      title: "Performance Ultra-Rapide",
      description:
        "Optimisé pour la vitesse avec des temps de chargement minimaux et des interactions instantanées, garantissant une expérience fluide sur tous les appareils.",
      image: "https://www.fffuel.co/images/dddepth-preview/dddepth-028.jpg",
    },
    {
      id: 2,
      title: "Entièrement Personnalisable",
      description:
        "Adaptez chaque composant pour correspondre à votre marque ou workflow — avec un support intégré pour les thèmes, layouts et configurations.",
      image: "https://www.fffuel.co/images/dddepth-preview/dddepth-051.jpg",
    },
    {
      id: 3,
      title: "Convivial pour les Développeurs",
      description:
        "Construit avec du code propre et moderne, suivant les meilleures pratiques, facilitant l'intégration, l'extension et la mise à l'échelle.",
      image: "https://www.fffuel.co/images/dddepth-preview/dddepth-248.jpg",
    },
    {
      id: 4,
      title: "Responsive par Défaut",
      description:
        "Chaque composant est conçu pour être superbe sur toutes les tailles d'écran — aucun travail supplémentaire nécessaire pour le mobile.",
      image: "https://www.fffuel.co/images/dddepth-preview/dddepth-045.jpg",
    },
    {
      id: 5,
      title: "Accessible à Tous",
      description:
        "Construit avec les meilleures pratiques d'accessibilité pour garantir une expérience inclusive pour tous les utilisateurs.",
      image: "https://www.fffuel.co/images/dddepth-preview/dddepth-034.jpg",
    },
    {
      id: 6,
      title: "Intégration Transparente",
      description:
        "Connectez facilement vos outils, APIs et services préférés — qu'il s'agisse d'authentification, de bases de données ou de bibliothèques tierces.",
      image: "https://www.fffuel.co/images/dddepth-preview/dddepth-012.jpg",
    },
  ];

  return (
    <section className="py-12 sm:py-14 bg-background">
      <div className="mx-auto flex max-w-7xl flex-col px-6">
        <FadeIn className="text-center space-y-3">
          <Badge variant="outline" className="px-4 py-1.5">
            Compétences
          </Badge>
          <h2 className="text-pretty font-semibold text-4xl tracking-tight sm:text-5xl">
            Fonctionnalités Puissantes
          </h2>
          <p className="text-muted-foreground text-xl sm:text-2xl">
            Conçu pour la vitesse, la flexibilité et la facilité d'utilisation.
          </p>
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="relative rounded-lg border overflow-hidden group hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mask-b-from-50% dark:mask-b-from-40% aspect-4/5 w-full rounded-t-lg">
                <img
                  alt={feature.title}
                  className="size-full rounded-t-lg object-cover group-hover:scale-105 transition-transform duration-500"
                  src={feature.image}
                  loading="lazy"
                />
              </div>
              <div className="mask-t-from-50% absolute inset-x-0 bottom-0 rounded-b-xl bg-background/80 backdrop-blur-sm p-6 pt-20">
                <h3 className="font-semibold text-xl tracking-[-0.005em]">
                  {feature.title}
                </h3>
                <p className="mt-2 text-base text-foreground/90">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
