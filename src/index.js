import { LitElement, html, css } from "lit";

import { generalStyles } from "../general-styles.js";
import "./SearchBar"
import "./leftSide"
import "./rightSide"

export default class pokedex extends LitElement {
  static properties = {
    pokeName: {
      type: "String",
    },
    nombre: {
      type: "String",
    },
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
    image: { type: "String" },
  };

  static styles = [generalStyles, css`/* poke-dex */
  #pokedex {
    height: 30rem;
    width: auto;
    display: flex;
    border-radius: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 5rem;
  }

  #pokedex-container{
    display: flex;
    flex-direction: row;
    margin-top: 2rem;
  }

  @media only screen and (max-width: 600px) {
    #pokedex {
      width: 90%;
    }
  }`];

  __fetchPokemon = (event) => {
    const pokeNameInput = event.detail.pokename;
    const pokeName = pokeNameInput.value.toLowerCase();
    pokeNameInput.value = ""
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url)
      .then((res) => {
        if (res.status != "200") {
          this.image = "https://http.cat/404";
          this.nombre = "404";
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
              i.then((j) => (this.debilidad = j.toString()));
            });
          });
          let pokeImg = data.sprites.front_default;

          this.image = pokeImg;
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

  render = () => html`
    <div id="pokedex">
      <search-bar @submit-pokename="${this.__fetchPokemon}"></search-bar>
      <div id="pokedex-container">
      <left-side nombre=${this.nombre} image=${this.image}></left-side>
        <right-side
          altura=${this.altura}
          debilidad=${this.debilidad}
          peso=${this.peso}
          tipo=${this.tipo}
          salud=${this.salud}
          ataque=${this.ataque}
          defensa=${this.defensa}
          especial1=${this.especial1}
          especial2=${this.especial2}
          velocidad=${this.velocidad}
        ></right-side>
      </div>
    </div>`;
}
customElements.define("pokedex-1", pokedex);
