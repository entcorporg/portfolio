# Test de Google Analytics

## Vérifier que GA4 fonctionne

### 1. Ouvrir le site en navigation privée
```
https://portfolio.clairtyx.com
```

### 2. Ouvrir la console du navigateur (F12)

### 3. Accepter les cookies
Cliquez sur "Accepter" dans la bannière de consentement

### 4. Vérifier que GA4 est chargé
Dans la console, tapez :
```javascript
window.dataLayer
```
Vous devriez voir un tableau avec des données

Ou vérifiez dans l'onglet Réseau (Network) :
- Cherchez une requête vers `googletagmanager.com`
- Cherchez une requête vers `google-analytics.com/g/collect`

### 5. Alternative : Extension Chrome
Installez "Google Analytics Debugger" pour voir les événements en temps réel

### 6. Vérification dans GA4
- Allez sur Google Analytics
- Rapports → Temps réel
- Naviguez sur votre site
- Vous devriez voir votre visite apparaître dans les 30 secondes

## Note importante
GA4 nécessite jusqu'à 24-48h pour commencer à afficher les données historiques dans les rapports standards. Le rapport "Temps réel" est le seul qui fonctionne immédiatement.
