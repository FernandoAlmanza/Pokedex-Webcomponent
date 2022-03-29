import { html, css } from 'lit';
import pokedex from "../index";

class RightSide extends pokedex {
  constructor() {
    super();
  }

  static styles = css`
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

    #right-panel {
      background-color: var(--main-bg-color);
      box-sizing: border-box;
      position: relative;
      height: 100%;
      width: 20rem;
      display: grid;
      grid-template-rows: 24% repeat(4, 19%);
      border-bottom: solid black 3px;
      border-bottom-right-radius: 10px;
    }
    #right-panel::before {
      content: "";
      position: absolute;
      left: -3px;
      bottom: 0;
      width: 100%;
      height: 25.125rem;
      border-right: solid black 3px;
      border-bottom-right-radius: 0.5rem;
    }
    /* top screen */
    .top-screen-container {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .right-panel-screen {
      font-family: "Press Start 2P", cursive;
      width: 16rem;
      height: 6rem;
      background-color: var(--secondary-screen-bg-color);
      border: solid black 0.125rem;
      border-radius: 4px;
      font-size: xx-small;
      padding-left: 0.125rem;
      padding-right: 0.125rem;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-left: 8px;
      line-height: 2;
      flex-direction: column;
    }

    #size,
    #weight {
      font-size: 0.75rem;
    }

    .general {
      width: 15rem;
      padding: 1rem 0;
    }

    .general p {
      padding: 0;
      margin: 0;
    }

    .stats {
      display: flex;
    }

    .contenedorStat {
      margin: 0.2rem;
      text-align: center;
    }

    /* square buttons grid */
    .square-buttons-container {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .blue-squares-container {
      width: 15rem;
      height: 4rem;
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-template-rows: repeat(2, 1fr);
    }
    .blue-square {
      border-radius: 0.125rem;
      border: black 0.1rem solid;
      background-color: var(--square-buttons-color);
      box-shadow: inset -2px -2px #3298cb;
    }

    /* center buttons */
    .center-buttons-container {
      display: flex;
      justify-content: space-around;
    }

    .center-left-container {
      display: grid;
    }

    .small-reds-container {
      display: flex;
      align-items: center;
      justify-content: start;
    }
    .small-reds-container .small-light {
      border: solid black 0.125rem;
      width: 0.5rem;
      height: 0.5rem;
      margin-right: 10px;
      margin-top: 10px;
    }
    .small-reds-container .dot {
      height: 2.5px;
      width: 2.5px;
      top: 1px;
      left: 1px;
    }

    .white-squares-container {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .white-square {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 5px;
      border: black 0.125rem solid;
      background-color: #ffffff;
      box-shadow: inset -2px -2px gray;
    }

    .center-right-container {
      display: grid;
    }

    .thin-buttons-container {
      display: flex;
      justify-content: space-between;
    }

    .thin-button {
      width: 2.75rem;
      height: 0.5rem;
      border: 0.125rem solid black;
      background-color: var(--main-buttons-color);
      margin-left: 10px;
      border-radius: 0.5rem;
    }
    .yellow-button {
      justify-self: end;
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
      border: solid 0.125rem black;
      margin-left: 0.5rem;
    }

    .yellow-button .big-dot {
      height: 0.5rem;
      width: 0.5rem;
      position: relative;
      top: 3px;
      left: 5px;
      border-radius: 50%;
    }

    /* bottom screens */

    .bottom-screens-container {
      display: flex;
      justify-content: space-around;
      align-items: center;
    }

    .bottom-screens-container .right-panel-screen {
      width: 6rem;
      height: 2.25rem;
    }
  `;

  __blankContainer = () =>  html`<section class="empty-container">
        <svg height="100%" width="100%">
          <polyline
            points="0,0 0,40 138,40 158,75 325,75 350,0 0,0"
            style="fill: #f2f2f2; stroke: none; stroke-width: 3"
          />
          <polyline
            points="0,40 138,40 158,75 320,75"
            style="fill: none; stroke: black; stroke-width: 3"
          />
        </svg>
      </section>`;

  __topScreen() {
    const general = html`<section class="general">
        <p>Type <span id="type">${this.tipo}</span></p>
        <p>Weakness <span id="weakness">${this.debilidad}</span></p>
      </section>`;
    const stats = html`<section class="stats">
        <section class="contenedorStat">
          <span id="health">${this.salud}</span>
          <p>HP</p>
        </section>
        <section class="contenedorStat">
          <span id="attack">${this.ataque}</span>
          <p>ATK</p>
        </section>
        <section class="contenedorStat">
          <span id="defense">${this.defensa}</span>
          <p>DEF</p>
        </section>
        <section class="contenedorStat">
          <span id="special-attack">${this.especial1}</span>
          <p>SP.ATK</p>
        </section>
        <section class="contenedorStat">
          <span id="special-defense">${this.especial2}</span>
          <p>SP.DEF</p>
        </section>
        <section class="contenedorStat">
          <span id="speed">${this.velocidad}</span>
          <p>SPEED</p>
        </section>
      </section>`;
    const aboutScreen = html`<section id="about-screen" class="right-panel-screen">
        ${general}
        ${stats}
      </section>`;

    return html`<section class="top-screen-container">
        ${aboutScreen}
      </section>`;
  }

  __buttons() {
    const blueButton = html`<section class="square-buttons-container">
        <section class="blue-squares-container">
          <section class="blue-square"></section>
          <section class="blue-square"></section>
          <section class="blue-square"></section>
          <section class="blue-square"></section>
          <section class="blue-square"></section>
          <section class="blue-square"></section>
          <section class="blue-square"></section>
          <section class="blue-square"></section>
          <section class="blue-square"></section>
          <section class="blue-square"></section>
        </section>
      </section>`;
    const centerButton = html`<section class="center-buttons-container">
        <section class="center-left-container">
          <section class="small-reds-container">
            <section class="small-light red">
              <section class="dot light-red"></section>
            </section>
            <section class="small-light red">
              <section class="dot light-red"></section>
            </section>
          </section>
          <section class="white-squares-container">
            <section class="white-square"></section>
            <section class="white-square"></section>
          </section>
        </section>
        <section class="center-right-container">
          <section class="thin-buttons-container">
            <section class="thin-button"></section>
            <section class="thin-button"></section>
          </section>
          <section class="yellow-button yellow">
            <section class="big-dot light-yellow"></section>
          </section>
        </section>
      </section>`;
    return html`${blueButton} ${centerButton}`;
  }

  __bottomScreen() {
    return html`<section class="bottom-screens-container">
        <section id="type-screen" class="right-panel-screen">
          <span id="size">${this.altura}</span>
        </section>
        <section id="id-screen" class="right-panel-screen">
          <span id="weight">${this.peso}</span>
        </section>
      </section>`;
  }

  render = () => html`<aside id="right-panel">
    ${this.__blankContainer()}
    ${this.__topScreen()}          
    ${this.__buttons()}
    ${this.__bottomScreen()}
  </aside>`;
}

customElements.define("right-side", RightSide);
