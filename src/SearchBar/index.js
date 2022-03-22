class SearchBar extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.pokemon = ""
    }

    static get observedAttributes() {
        return ["type"];
    }

    connectedCallback(){
        const searchBox = document.createElement("section")
        searchBox.setAttribute("id", "search-box")
        document.body.appendChild(searchBox)
        const input = document.createElement('input');
        input.setAttribute("id", "pokeName")
        input.setAttribute("placeholder", "Nombre")
        searchBox.appendChild(input)
        
        const button = document.createElement("button")
        button.setAttribute("id", "submit")
        button.setAttribute("onClick", "fetchPokemon()")
        button.innerHTML = "Buscar"
        searchBox.appendChild(button)
    }
}

customElements.define("search-bar", SearchBar);