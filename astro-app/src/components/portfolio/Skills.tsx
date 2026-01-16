import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FadeIn } from "@/components/ui/fade-in";
import { InfiniteSlider } from "../motion-primitives/infinite-slider";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

interface SkillCategories {
  [key: string]: SkillCategory;
}

export function Skills() {
  const skillCategories: SkillCategories = import.meta.env
    .PUBLIC_SKILL_CATEGORIES
    ? JSON.parse(import.meta.env.PUBLIC_SKILL_CATEGORIES)
    : {};

  const technologies: string[] = import.meta.env.PUBLIC_TECHNOLOGIES
    ? import.meta.env.PUBLIC_TECHNOLOGIES.split(",").map((tech: string) =>
        tech.trim()
      )
    : [];

  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <FadeIn className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="px-4 py-1.5">
            Compétences
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Mes Compétences Techniques
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Un ensemble complet de compétences pour créer des applications web
            performantes et modernes.
          </p>
        </FadeIn>

        {/* Skills Tabs */}
        <FadeIn delay={0.2}>
          <Tabs defaultValue="frontend" className="max-w-4xl mx-auto mb-16">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="tools">Outils</TabsTrigger>
            </TabsList>
            {Object.entries(skillCategories).map(
              ([key, category]: [string, SkillCategory]) => (
                <TabsContent key={key} value={key} className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>{category.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {category.skills.map((skill: Skill, index: number) => (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="font-medium">{skill.name}</span>
                            <span className="text-muted-foreground">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="h-2 bg-secondary rounded-full overflow-hidden">
                            <div
                              className="h-full bg-chart-1 rounded-full transition-all duration-500"
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </TabsContent>
              )
            )}
          </Tabs>
        </FadeIn>

        {/* Technologies Cloud */}
        <FadeIn delay={0.3} className="text-center">
          <h3 className="text-xl font-semibold mb-6">
            Technologies que j'utilise
          </h3>
          <div className="flex flex-wrap justify-center gap-3 mx-auto">
            <InfiniteSlider
              direction="horizontal"
              children={technologies.map((tech: string, index: number) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                >
                  {tech}
                </Badge>
              ))}
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
