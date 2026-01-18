// Importer les fichiers comme raw strings avec Vite
import htmlContent from './Street-Life/index.html?raw';
import cssContent from './Street-Life/standard.css?raw';
import dockerContent from './Street-Life/docker-compose.yaml?raw';
import apacheContent from './Street-Life/apache.conf?raw';

export const streetLifeData = {
    codeExamples: {
        html: htmlContent,
        css: cssContent,
        docker: dockerContent,
        apache: apacheContent,
    },
};