import { LitElement, html, css } from "lit";

class SearchBar extends LitElement {
  static properties = {
    pokeName: {
      type: "String",
      hasChanged(newValue, oldValue) {
        console.log(
          `Pokemon anterior: ${oldValue}\nPokemon actual: ${newValue}`
        );
      },
    },
    nombre: { type: "String" },
    altura: { type: "Numeric" },
    peso: { type: "Numeric" },
    tipo: { type: "String" },
    debilidad: { type: "String" },
    salud: { type: "Numeric" },
    ataque: { type: "Numeric" },
    defensa: { type: "Numeric" },
    especial1: { type: "Numeric" },
    especial2: { type: "Numeric" },
    velocidad: { type: "Numeric" },
    tipoPokemon: { type: "Numeric" },
    image: {type: "String"}
  };

  static styles = css`
    #search-box {
      padding-top: 1rem;
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

  constructor() {
    super();
    this.pokeName = "";
    this.nombre = "";
    this.altura = 0.0;
    this.peso = 0.0;
    this.tipo = "";
    this.debilidad = "";
    this.salud = 0;
    this.ataque = 0;
    this.defensa = 0;
    this.especial1 = 0;
    this.especial2 = 0;
    this.velocidad = 0;
    this.tipoPokemon = 0;
    this.image = "";
  }

  __fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    this.pokeName = pokeNameInput.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url)
      .then((res) => {
        if (res.status != "200") {
            this.image = html`<img src="https://http.cat/400" />`
        } else {
          return res.json();
        }
      })
      .then((data) => {
        if (data) {
          const {
            name: nombrePokemon,
            weight: pesoPokemon,
            height: estaturaPokemon,
            stats,
          } = data;
          let tipoPokemon = this.__processType(data.types),
            datos = [];
          for (let i of stats) {
            datos.push(i.base_stat);
          }

          this.__processWeakness(data.types).then((dato) => {
            dato.map((i) => {
              i.then((j) => (this.debilidad += j.toString()));
            });
          });
          let pokeImg = data.sprites.front_default;
          
          this.image = html`<img src='${pokeImg}' />`
          this.nombre = nombrePokemon.toUpperCase();
          this.altura = `${estaturaPokemon / 10} m`;
          this.peso = `${pesoPokemon / 10} kg`;
          this.tipo = `${tipoPokemon.toString()}`;
          this.salud = datos[0];
          this.ataque = datos[1];
          this.defensa = datos[2];
          this.especial1 = datos[3];
          this.especial2 = datos[4];
          this.velocidad = datos[5];
        }
      });
  };

  __processType = (data) => {
    let tipo = [];
    for (let i of data) {
      tipo.push(i.type.name);
    }
    return tipo;
  };

  __processWeakness = async (data) => {
    var debilidad = [];
    var promesas = [];
    for (let i of data) {
      promesas.push(
        fetch(i.type.url)
          .then((res) => {
            if (res.status != "200") {
              console.log(res);
            } else {
              return res.json();
            }
          })
          .then((data) => {
            const { double_damage_from: damageFrom } = data.damage_relations;
            return damageFrom.map((i) => i.name);
          })
      );

      for (let j of promesas) debilidad.push(j);
    }

    return debilidad;
  };

  firstUpdated() {
    const boton = this.renderRoot?.querySelector("#submit");
    boton.addEventListener("click", this.__fetchPokemon);
  }

  render = () => html`<div class="search-container">
    <input id="pokeName" type="text" placeholder="Nombre" />
    <button id="submit">Buscar</button>
  </div>`;
}

customElements.define("search-bar", SearchBar);
