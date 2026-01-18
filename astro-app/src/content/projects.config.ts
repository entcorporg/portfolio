export interface ProjectMetadata {
    slug: string;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    githubUrl: string;
    liveUrl?: string;
    featured?: boolean;
}

export const projectsConfig: ProjectMetadata[] = [
    {
        slug: "librairie-independante",
        title: "Librairie L'indépendante",
        description:
            "Site web optimisé pour une librairie indépendante fictive. Performance 100/100 sur Google Lighthouse.",
        image:
            "https://raw.githubusercontent.com/entcorporg/cour_Se_Perfectionner_en_HTML-CSS/main/docs/img/bandeau.webp",
        technologies: ["HTML5", "CSS3", "JavaScript", "Docker", "Apache"],
        githubUrl:
            "https://github.com/entcorporg/cour_Se_Perfectionner_en_HTML-CSS.git",
        liveUrl: "https://cour-se-perfectionner-en-html-css.clairtyx.com/",
        featured: true,
    },
    {
        slug: "le-globule",
        title: "Le Globule - Site Éducatif HTML/CSS",
        description:
            "Site web éducatif multi-pages avec design system CSS avancé, navigation complexe avec sous-menus, et optimisation WebP.",
        image:
            "https://raw.githubusercontent.com/entcorporg/html_avancer_1_devoir_exercice-1/main/site/img/globule.jpg",
        technologies: ["HTML5", "CSS3", "JavaScript ES6", "Docker", "Apache", "WebP", "CSS Grid", "Flexbox"],
        githubUrl:
            "https://github.com/entcorporg/html_avancer_1_devoir_exercice-1",
        liveUrl: "https://html-avancer-1-devoir-exercice-1.clairtyx.com/",
        featured: true,
    },
    {
        slug: "street-life",
        title: "Street Life - Magazine Web Lifestyle",
        description:
            "Magazine web lifestyle avec design sophistiqué, typographie élégante, et layouts Flexbox complexes.",
        image:
            "https://raw.githubusercontent.com/entcorporg/html_avancer_1_devoir_exercice-2/main/site/img/cinema.jpg",
        technologies: ["HTML5", "CSS3", "JavaScript ES6", "Docker", "Apache", "WebP", "Flexbox"],
        githubUrl:
            "https://github.com/entcorporg/html_avancer_1_devoir_exercice-2",
        liveUrl: "https://html-avancer-1-devoir-exercice-2.clairtyx.com/",
        featured: true,
    },
];

// Helper pour obtenir un projet par slug
export function getProjectBySlug(slug: string): ProjectMetadata | undefined {
    return projectsConfig.find(project => project.slug === slug);
}

// Helper pour obtenir tous les slugs
export function getAllSlugs(): string[] {
    return projectsConfig.map(project => project.slug);
}

// Helper pour obtenir les métadonnées de tous les projets
export function getAllProjectsMetadata() {
    return projectsConfig.map((project, index) => ({
        id: index + 1,
        ...project,
    }));
}
