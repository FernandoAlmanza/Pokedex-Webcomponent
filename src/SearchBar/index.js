import { LitElement, html, css } from "lit";

class SearchBar extends LitElement {
  static properties = {
    pokeName: {
      type: String,
      bubbles: true,
    },
  };
  static styles = css`
    #search-container {
      margin: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    #search-box {
      padding: 1rem;
    }

    input {
      text-align: center;
      height: 40px;
      border-radius: 4px;
      margin-right: 10px;
    }

    #submit {
      padding: 0.8rem 2rem;
      background-color: #fe0065;
      color: #f2f2f2;
      border: none;
      cursor: pointer;
      border-radius: 0.5rem;
      transition: ease-in-out 0.25s;
    }

    #submit:hover {
      background-color: #ff6ea8;
      transition: ease-in-out 0.25s;
    }

    #submit:active {
      background-color: #a00040;
      transition: ease-in-out 0.25s;
      padding: 0.6rem 2rem;
    }
  `;

  __submit = () => {
    const pokename = this.renderRoot?.querySelector("#pokeName")
    if(pokename){
        const options = {
            detail: {pokename},
            bubbles: true,
            composed: true
        }
        this.dispatchEvent(new CustomEvent('submit-pokename', options));
    }
  }

  render = () => html`<div id="search-container">
    <input id="pokeName" type="text" placeholder="Nombre" />
    <button id="submit" @click="${this.__submit}">Buscar</button>
  </div>`;
}

customElements.define("search-bar", SearchBar);
