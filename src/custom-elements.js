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
		const color = this.getAttribute('color') || 'white';
		if (!name) return;

		// Créer un élément img
		this.innerHTML = `<img src="https://cdn.simpleicons.org/${name}" alt="${name}" width="${size}" height="${size}" class="custom-icons" style="filter: drop-shadow(${color} 1px 0 7px);">`;
	}
}

// Enregistrement de l'élément personnalisé
window.customElements.define('custom-icon', CustomIcon);
