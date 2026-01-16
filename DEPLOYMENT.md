# Configuration du déploiement GitHub Pages

Ce portfolio est déployé automatiquement sur GitHub Pages via GitHub Actions.

## 📋 Prérequis

1. **Activer GitHub Pages**
   - Allez dans Settings → Pages
   - Source: "GitHub Actions"

2. **Configurer les secrets**
   - Settings → Secrets and variables → Actions
   - Ajoutez: `GA_MEASUREMENT_ID` avec votre ID Google Analytics

3. **Configurer le domaine personnalisé** (optionnel)
   - Settings → Pages → Custom domain
   - Entrez: `portfolio.entcorporg.com`
   - Vérifiez que le DNS CNAME pointe vers `entcorporg.github.io`

## 🚀 Déploiement

Le déploiement se fait automatiquement à chaque push sur la branche `main`.

### Déploiement manuel
Vous pouvez aussi déclencher un déploiement manuellement :
- Actions → Deploy to GitHub Pages → Run workflow

## 🌐 URLs

- **Domaine personnalisé**: https://portfolio.entcorporg.com
- **URL GitHub Pages**: https://entcorporg.github.io/portfolio

## 🔧 Configuration DNS requise

Pour le domaine personnalisé, configurez ces enregistrements DNS :

```
Type    Host        Value                       TTL
CNAME   portfolio   entcorporg.github.io        300
```

## 📝 Variables d'environnement

Les variables d'environnement sont configurées dans les secrets GitHub Actions :
- `GA_MEASUREMENT_ID` : ID Google Analytics (format: G-XXXXXXXXXX)
