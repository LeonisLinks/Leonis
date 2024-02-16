// Element personnalisé: Icone
class CustomIcon extends HTMLElement {
	constructor() {
		super();
	}

	// Méthode appelée lorsque l'élément est ajouté à la page
	connectedCallback() {
		// Récuperer les attributs name et size
		const name = this.getAttribute('name');
		const size = this.getAttribute('size') || '24';
		if (!name) return;

		// Créer un élément img
		this.innerHTML = `<img src="https://cdn.simpleicons.org/${name}" alt="${name}" width="${size}" height="${size}">`;
	}
}

// Enregistrement de l'élément personnalisé
window.customElements.define('custom-icon', CustomIcon);
