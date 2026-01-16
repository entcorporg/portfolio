// ===== COMPOSANTS RÉUTILISABLES =====

/**
 * Composant Header avec titre et navigation
 * @param {string} titre - Le titre principal du site
 * @param {Array} menuItems - Tableau d'objets {texte: '', url: ''}
 * @param {string} imageUrl - URL de l'image bandeau
 */
function HeaderComposant(titre, menuItems, imageUrl) {
  const menuHTML = menuItems
    .map((item) => `<li><a href="${item.url}">${item.texte}</a></li>`)
    .join("");

  let imageHTML = "";
  if (imageUrl) {
    // Générer les chemins pour différentes tailles
    const extMatch = imageUrl.match(/\.(jpg|jpeg|png)$/i);
    if (!extMatch) {
      console.warn("Format d'image non supporté:", imageUrl);
      return "";
    }

    const ext = extMatch[0];
    const baseUrl = imageUrl.replace(/\.(jpg|jpeg|png)$/i, "");

    imageHTML = `<picture>
      <source 
        type="image/webp"
        srcset="${baseUrl}-480w.webp 480w,
                ${baseUrl}-768w.webp 768w,
                ${baseUrl}.webp 960w"
        sizes="(max-width: 480px) 100vw,
               (max-width: 768px) 100vw,
               960px">
      <source 
        type="image/jpeg"
        srcset="${baseUrl}-480w${ext} 480w,
                ${baseUrl}-768w${ext} 768w,
                ${imageUrl} 960w"
        sizes="(max-width: 480px) 100vw,
               (max-width: 768px) 100vw,
               960px">
      <img 
        src="${imageUrl}"
        alt="Bandeau de ${titre}" 
        class="bandeau"
        width="960"
        height="150"
        loading="eager"
        fetchpriority="high"
        decoding="async">
    </picture>`;
  }

  return `
        <header>
            <div class="texte-centre">
                <div class="titre-principal ombre-texte-legere marge-haut-10px marge-bas-10px titre">${titre}</div>
            </div>

            <nav class="menu-principal">
                <ul>
                    ${menuHTML}
                </ul>
                ${imageHTML}
            </nav>
        </header>
    `;
}

/**
 * Composant Card Livre
 * @param {string} titre - Le titre de l'œuvre
 * @param {string} auteur - L'auteur de l'œuvre
 * @param {number} annee - L'année de publication
 * @param {string} genre - Le genre de l'œuvre
 * @param {string} description - La description de l'œuvre
 */
function CardLivreComposant(titre, auteur, annee, genre, description) {
  return `
        <div class="card-livre">
            <div class="card-livre-titre">${titre}</div>
            <div class="card-livre-auteur">${auteur} - ${annee}</div>
            <div class="card-livre-genre">Genre : ${genre}</div>
            <div class="card-livre-description">${description}</div>
        </div>
    `;
}

function FooterComposant() {
  return `
        <footer class="background-gris-2 color-rouge-2 footer">
            <div class="grid">
                <div class="hauteur-100-pourcent justify-start flex items-center">
                    <p>&copy; Librairie l'indépendante</p>
                </div>
                <div class="hauteur-100-pourcent justify-end flex items-center">
                    <div><strong>26, allée du Sphinx<br>
                        45020 Tournepioche</strong></div>
                </div>
            </div>
        </footer>
  `;
}

// ===== FONCTIONS UTILITAIRES =====

/**
 * Injecte du HTML dans un élément
 * @param {string} selecteur - Sélecteur CSS de l'élément cible
 * @param {string} html - HTML à injecter
 */
function injecter(selecteur, html) {
  const element = document.querySelector(selecteur);
  if (element) {
    element.innerHTML = html;
  }
}

/**
 * Ajoute du HTML à un élément
 * @param {string} selecteur - Sélecteur CSS de l'élément cible
 * @param {string} html - HTML à ajouter
 */
function ajouter(selecteur, html) {
  const element = document.querySelector(selecteur);
  if (element) {
    element.insertAdjacentHTML("beforeend", html);
  }
}

// ===== élément HEADER =====
const menuItems = [
  { texte: "Accueil", url: "/" },
  { texte: "Présentation", url: "/presentation" },
  { texte: "Nos coups de cœur", url: "/nos-coups-de-coeurs" },
  { texte: "Extraits choisis", url: "/extraits-choisis" },
];

// Injecter le header dans la page
injecter(
  "#header-container",
  HeaderComposant("Librairie L'indépendante", menuItems, "../img/bandeau.jpg")
);

// ===== DONNÉES DES LIVRES =====
const livresClassiques = [
  {
    titre: "Candide",
    auteur: "Voltaire",
    annee: 1759,
    genre: "satire",
    description:
      "Lisez ou relisez ce grand classique de la littérature française.",
  },
  {
    titre: "Le Horla",
    auteur: "Guy de Maupassant",
    annee: 1887,
    genre: "fantastique",
    description:
      "Entre dédoublement de la personnalité, surnaturel et normalité.",
  },
  {
    titre: "Calligrammes",
    auteur: "Guillaume Apollinaire",
    annee: 1918,
    genre: "recueil de poèmes",
    description:
      "Recueil dédié à René Dalize, ami d'enfance d'Apollinaire, tombé à la guerre.",
  },
];

const livresRomans = [
  {
    titre: "Le Vieil Homme et la Mer",
    auteur: "Ernest Hemingway",
    annee: 1952,
    genre: "récit d'aventures",
    description:
      "Le combat épique entre un vieil homme et un gigantesque marlin.",
  },
  {
    titre: "Les Fourmis",
    auteur: "Bernard Werber",
    annee: 1991,
    genre: "roman animalier",
    description: "Premier tome de La Trilogie des fourmis.",
  },
  {
    titre: "Stupeur et Tremblements",
    auteur: "Amélie Nothomb",
    annee: 1999,
    genre: "autobiographie",
    description:
      "Récompensé par le grand prix du roman de l'Académie française.",
  },
];

// Injecter les cartes de livres classiques
const classiquesContainer = document.querySelector("#classiques-container");
if (classiquesContainer) {
  livresClassiques.forEach((livre) => {
    ajouter(
      "#classiques-container",
      CardLivreComposant(
        livre.titre,
        livre.auteur,
        livre.annee,
        livre.genre,
        livre.description
      )
    );
  });
}

// Injecter les cartes de livres romans
const romansContainer = document.querySelector("#romans-container");
if (romansContainer) {
  livresRomans.forEach((livre) => {
    ajouter(
      "#romans-container",
      CardLivreComposant(
        livre.titre,
        livre.auteur,
        livre.annee,
        livre.genre,
        livre.description
      )
    );
  });
}

// ===== élément FOOTER =====
// Injecter le footer dans la page
const footerContainer = document.querySelector("#footer-container");
if (footerContainer) {
  injecter("#footer-container", FooterComposant());
}
