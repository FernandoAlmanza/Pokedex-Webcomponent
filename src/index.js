class pokedex extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
      const estilo = `<style>
      :root {
          --main-bg-color: #fe0065;
          --secondary-bg-color: #f2f2f2;
          --main-screen-bg-color: #98cb98;
          --secondary-screen-bg-color: #9e9d9d;
          --main-buttons-color: #585858;
          --square-buttons-color: #7ca9f7;
      }

      .red {
          background-color: #ff0000;
      }
      .yellow {
          background-color: #fecb65;
      }
      .green {
          background-color: #32cb65;
      }
      .blue {
          background-color: #3298cb;
      }

      .light-blue {
          background-color: #85bdfe;
      }
      .light-red {
          background-color: #fe98cb;
      }
      .light-yellow {
          background-color: #fefecb;
      }
      .light-green {
          background-color: #98fe00;
      }
      
      /* poke-dex */
      #pokedex {
          height: 30rem;
          width: calc(20rem * 2);
          display: flex;
          border-radius: 10px;
      }

      @media only screen and (max-width: 600px) {
          #pokedex {
          width: 90%;
          }
      }
  </style>`

    this.shadowRoot.innerHTML = `
        <!-- Main components -->
        ${estilo}
        <search-bar></search-bar>

        <div id="pokedex">
            <left-side></left-side>
            <right-side>
        </div>`;
  }
}
customElements.define("pokedex-1", pokedex);
