// Importer les fichiers comme raw strings avec Vite
import htmlContent from './Le-Globule/index.html?raw';
import cssContent from './Le-Globule/standard.css?raw';
import jsContent from './Le-Globule/sheet.js?raw';
import dockerContent from './Le-Globule/docker-compose.yaml?raw';
import apacheContent from './Le-Globule/apache.conf?raw';

export const leGlobuleData = {
    codeExamples: {
        html: htmlContent,
        css: cssContent,
        javascript: jsContent,
        docker: dockerContent,
        apache: apacheContent,
    },
};