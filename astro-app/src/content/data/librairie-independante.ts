// Importer les fichiers comme raw strings avec Vite
import htmlContent from './librairie-independante/index.html?raw';
import cssContent from './librairie-independante/index.css?raw';
import jsContent from './librairie-independante/components.js?raw';
import dockerContent from './librairie-independante/docker-compose.yaml?raw';
import apacheContent from './librairie-independante/apache.conf?raw';
import bashContent from './librairie-independante/create-responsive-images.sh?raw';

export const librarieIndependanteData = {
    codeExamples: {
        html: htmlContent,
        css: cssContent,
        javascript: jsContent,
        docker: dockerContent,
        apache: apacheContent,
        bash: bashContent,
    },
};