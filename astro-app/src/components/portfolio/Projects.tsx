import * as React from "react";
import { FadeIn } from "@/components/ui/fade-in";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, PlusIcon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useRef, useState } from "react";
import { Cursor } from "../motion-primitives/cursor";

export function Projects() {
  const projects = [
    {
      id: 1,
      slug: "librairie-independante",
      title: "Librairie L'indépendante",
      description:
        "Site web optimisé pour une librairie indépendante fictive. Performance 100/100 sur Google Lighthouse.",
      image:
        "https://raw.githubusercontent.com/entcorporg/cour_Se_Perfectionner_en_HTML-CSS/main/docs/img/bandeau.webp",
      technologies: ["HTML5", "CSS3", "JavaScript", "Docker", "Apache"],
      githubUrl:
        "https://github.com/entcorporg/cour_Se_Perfectionner_en_HTML-CSS.git",
      featured: true,
    },
  ];

  const [isHovering, setIsHovering] = useState(false);
  const targetRef = useRef<HTMLAnchorElement>(null);

  const handlePositionChange = (x: number, y: number) => {
    if (targetRef.current) {
      const rect = targetRef.current.getBoundingClientRect();
      const isInside =
        x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
      setIsHovering(isInside);
    }
  };

  return (
    <section id="projects" className="py-12 sm:py-14 bg-muted/30">
      <div className="mx-auto flex max-w-7xl flex-col px-6">
        <FadeIn className="text-center space-y-3">
          <Badge variant="outline" className="px-4 py-1.5">
            Portfolio
          </Badge>
          <h2 className="text-pretty font-semibold text-4xl tracking-tight sm:text-5xl">
            Mes Projets
          </h2>
          <p className="text-muted-foreground text-xl sm:text-2xl">
            Une sélection de projets qui démontrent mes compétences et ma
            passion pour le développement.
          </p>
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3">
          <Cursor
            attachToParent
            variants={{
              initial: { scale: 0.3, opacity: 0 },
              animate: { scale: 1, opacity: 1 },
              exit: { scale: 0.3, opacity: 0 },
            }}
            springConfig={{
              bounce: 0.001,
            }}
            transition={{
              ease: "easeInOut",
              duration: 0.15,
            }}
            onPositionChange={handlePositionChange}
          >
            <motion.div
              animate={{
                width: isHovering ? 80 : 16,
                height: isHovering ? 32 : 16,
              }}
              className="flex items-center justify-center rounded-3xl bg-gray-500/40 backdrop-blur-md dark:bg-gray-300/40"
            >
              <AnimatePresence>
                {isHovering ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.6 }}
                    className="inline-flex w-full items-center justify-center"
                  >
                    <div className="inline-flex items-center text-sm text-white dark:text-black">
                      More <PlusIcon className="ml-1 h-4 w-4" />
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </motion.div>
          </Cursor>
          {projects.map((project) => (
            <a
              key={project.id}
              ref={targetRef}
              href={`/projets/${project.slug}`}
              className="relative rounded-lg border overflow-hidden group hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mask-b-from-50% dark:mask-b-from-40% aspect-4/5 w-full rounded-t-lg">
                <img
                  alt={project.title}
                  className="size-full rounded-t-lg object-cover group-hover:scale-105 transition-transform duration-500"
                  src={project.image}
                  loading="lazy"
                  decoding="async"
                  width="800"
                  height="600"
                />
                {project.featured && (
                  <Badge className="absolute top-3 right-3 shadow-lg z-10">
                    Featured
                  </Badge>
                )}
              </div>
              <div className="mask-t-from-50% absolute inset-x-0 bottom-0 rounded-b-xl bg-background/80 backdrop-blur-sm p-6 pt-20">
                <h3 className="font-semibold text-xl tracking-[-0.005em]">
                  {project.title}
                </h3>
                <p className="mt-2 text-base text-foreground/90 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* GitHub Link */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a
              href="https://github.com/entcorporg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4 mr-2" />
              Voir mon GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
