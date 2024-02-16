// Element personnalisé: Icone
class Icon extends HTMLElement {
    constructor() {
        super();

        // Initialisation du Shadow DOM
        const shadow = this.attachShadow({ mode: 'open' });

        // Récuperation des informations
        const name = this.getAttribute("name");
        console.log(name);
        if (name === null) return;

        const size = this.getAttribute("size");
        console.log(size);
        if (size === null) return;

        const sizeValue = parseInt(size);

        // Création de l'icone
        const img = document.createElement("img");
        img.src = `https://cdn.simpleicons.org/${name}.svg`; // Assurez-vous d'ajouter l'extension du fichier (par exemple, .svg)
        img.width = sizeValue;
        img.height = sizeValue;

        // Ajout de l'icone au Shadow DOM
        shadow.appendChild(img);
    }
}

// Enregistrement de l'élément personnalisé
customElements.define('custom-icon', Icon);
