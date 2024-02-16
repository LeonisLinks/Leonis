var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Element personnalisé: Icone
var Icon = /** @class */ (function (_super) {
    __extends(Icon, _super);
    function Icon() {
        var _this = _super.call(this) || this;
        // Initialisation du Shadow DOM
        var shadow = _this.attachShadow({ mode: 'open' });
        // Récuperation des informations
        var name = _this.getAttribute("name");
        console.log(name);
        if (name === null)
            return _this;
        var size = _this.getAttribute("size");
        console.log(size);
        if (size === null)
            return _this;
        var sizeValue = parseInt(size);
        // Création de l'icone
        var img = document.createElement("img");
        img.src = "https://cdn.simpleicons.org/".concat(name, ".svg"); // Assurez-vous d'ajouter l'extension du fichier (par exemple, .svg)
        img.width = sizeValue;
        img.height = sizeValue;
        // Ajout de l'icone au Shadow DOM
        shadow.appendChild(img);
        return _this;
    }
    return Icon;
}(HTMLElement));
// Enregistrement de l'élément personnalisé
customElements.define('custom-icon', Icon);
