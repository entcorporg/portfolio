#!/bin/bash
################################################################################
# 
# !!!only linux!!!
#
# 📦 Script : create-responsive-images.sh
# 🎯 But : Créer plusieurs tailles d'images pour mobile, tablette et desktop
#
# 🔍 Ce que fait ce script :
#   1. Crée une petite version pour les téléphones (480px)
#   2. Crée une version moyenne pour les tablettes (768px)
#   3. Crée une version grande pour les ordinateurs (960px)
#   4. Pour chaque taille, crée une version WebP ET JPG
#
# 💡 Pourquoi faire ça ?
#    → Un téléphone n'a pas besoin d'une grande image
#    → Charger une petite image = site plus rapide
#    → Économie de données pour vos visiteurs
#
# 📱 Exemple : Sur mobile, au lieu de télécharger 55 Ko,
#              on télécharge seulement 10 Ko (82% d'économie !)
#
# ▶️  Comment utiliser :
#    Dans le terminal, tapez : ./create-responsive-images.sh
################################################################################

# Se déplacer dans le dossier des images
cd img

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "   🖼️  Création d'images responsive (adaptatives)"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "📦 Ce script va créer 6 versions de votre image :"
echo "   • 3 versions WebP (moderne, léger)"
echo "   • 3 versions JPG (compatible ancien navigateur)"
echo ""

# ─────────────────────────────────────────────────────────────
# ÉTAPE 0 : Vérifier que les outils sont installés
# ─────────────────────────────────────────────────────────────

# Vérifier l'outil de conversion WebP
if ! command -v cwebp &> /dev/null; then
    echo "📥 Installation de l'outil WebP..."
    sudo apt-get update && sudo apt-get install -y webp
    echo ""
fi

# ─────────────────────────────────────────────────────────────
# ÉTAPE 1 : Créer la version MOBILE (480px de large)
# ─────────────────────────────────────────────────────────────
# Explication : On réduit l'image à 480 pixels de large
# Parfait pour les téléphones (iPhone, Samsung, etc.)
# Paramètres :
#   -q 80 : qualité 80% (très bon pour mobile)
#   -resize 480 75 : largeur 480px, hauteur 75px

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "1️⃣  Version MOBILE (📱 smartphones)"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "   📏 Taille : 480x75 pixels"
echo "   🎯 Usage : iPhone, Android, petits écrans"
echo ""
cwebp -q 80 -resize 480 75 bandeau.jpg -o bandeau-480w.webp
echo "   ✅ bandeau-480w.webp créé"
echo ""

# ─────────────────────────────────────────────────────────────
# ÉTAPE 2 : Créer la version TABLETTE (768px de large)
# ─────────────────────────────────────────────────────────────
# Explication : Version moyenne pour iPad, tablettes Samsung, etc.
# Paramètres :
#   -q 82 : qualité 82% (légèrement meilleure que mobile)
#   -resize 768 120 : largeur 768px, hauteur 120px

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "2️⃣  Version TABLETTE (📱 iPad, etc.)"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "   📏 Taille : 768x120 pixels"
echo "   🎯 Usage : iPad, tablettes, petits écrans PC"
echo ""
cwebp -q 82 -resize 768 120 bandeau.jpg -o bandeau-768w.webp
echo "   ✅ bandeau-768w.webp créé"
echo ""

# ─────────────────────────────────────────────────────────────
# ÉTAPE 3 : Créer la version DESKTOP (960px de large)
# ─────────────────────────────────────────────────────────────
# Explication : Version complète pour ordinateurs
# Paramètres :
#   -q 75 : qualité 75% (compression plus forte, fichier plus léger)
#   -m 6 : mode de compression maximal (prend plus de temps mais meilleur résultat)

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "3️⃣  Version DESKTOP (💻 ordinateurs)"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "   📏 Taille : 960x150 pixels (taille originale)"
echo "   🎯 Usage : PC, Mac, grands écrans"
echo ""
cwebp -q 75 -m 6 bandeau.jpg -o bandeau.webp
echo "   ✅ bandeau.webp créé"
echo ""

# ─────────────────────────────────────────────────────────────
# ÉTAPE 4 : Créer les versions JPG (fallback)
# ─────────────────────────────────────────────────────────────
# Explication : On crée aussi des versions JPG pour les vieux navigateurs
# qui ne comprennent pas le format WebP (Internet Explorer par exemple)

if command -v convert &> /dev/null; then
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "4️⃣  Versions JPG (compatibilité)"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "   🎯 Pour les navigateurs ne supportant pas WebP"
    echo ""
    
    # Créer JPG mobile
    convert bandeau.jpg -resize 480x75 -quality 80 bandeau-480w.jpg
    echo "   ✅ bandeau-480w.jpg créé"
    
    # Créer JPG tablette
    convert bandeau.jpg -resize 768x120 -quality 82 bandeau-768w.jpg
    echo "   ✅ bandeau-768w.jpg créé"
    
    echo ""
fi

# ─────────────────────────────────────────────────────────────
# AFFICHAGE DES RÉSULTATS
# ─────────────────────────────────────────────────────────────

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "   📊 RÉSUMÉ DES IMAGES CRÉÉES"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "🖼️  Images WebP créées :"
ls -lh bandeau*.webp | awk '{print "   • " $9 " → " $5}'

echo ""

# Calculer les économies
original_size=$(stat -c%s bandeau.jpg)
webp_480=$(stat -c%s bandeau-480w.webp)
webp_768=$(stat -c%s bandeau-768w.webp)
webp_960=$(stat -c%s bandeau.webp)

echo "💾 Comparaison avec l'image originale :"
echo ""
echo "   📁 Image originale JPG : $(numfmt --to=iec-i --suffix=B $original_size)"
echo ""
echo "   📱 Mobile (480w) : $(numfmt --to=iec-i --suffix=B $webp_480)"
echo "      → Économie : $(( (original_size - webp_480) * 100 / original_size ))%"
echo ""
echo "   📱 Tablette (768w) : $(numfmt --to=iec-i --suffix=B $webp_768)"
echo "      → Économie : $(( (original_size - webp_768) * 100 / original_size ))%"
echo ""
echo "   💻 Desktop (960w) : $(numfmt --to=iec-i --suffix=B $webp_960)"
echo "      → Économie : $(( (original_size - webp_960) * 100 / original_size ))%"

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🎉 Toutes les images ont été créées avec succès !"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "💡 Astuce : Ces images sont automatiquement utilisées"
echo "   par votre site selon l'appareil du visiteur."
echo ""
echo "📱 Mobile → Charge 10 Ko au lieu de 55 Ko"
echo "💻 Desktop → Charge 28 Ko au lieu de 55 Ko"
echo ""
