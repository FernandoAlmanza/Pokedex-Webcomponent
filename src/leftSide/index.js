class LeftSide extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    estilo(){
        const css = `:root {
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

        #left-panel {
          background-color: var(--main-bg-color);
          box-sizing: border-box;
          height: 100%;
          width: 20rem;
          display: grid;
          grid-template-rows: 23% 50% 27%;
          border: solid black 3px;
          border-top-left-radius: 10px;
          border-bottom-left-radius: 10px;
          border-top-right-radius: 0.5rem;
        }
        /* Top Lights */
      
        .lights-container {
          position: relative;
          display: flex;
          justify-content: start;
          align-items: center;
        }
      
        .left-svg {
          position: absolute;
          z-index: +5;
        }
      
        .big-light-boarder {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-left: 5px;
          height: 60px;
          width: 60px;
          border: solid black;
          border-radius: 50%;
          background-color: white;
        }
      
        .big-light {
          height: 50px;
          width: 50px;
          border-radius: 50%;
          border: solid black;
        }
      
        .big-dot {
          height: 15px;
          width: 15px;
          position: relative;
          top: 0.5rem;
          left: 10px;
          border-radius: 50%;
        }
      
        .small-lights-container {
          margin-left: 15px;
          margin-top: 10px;
          width: 70px;
          height: 100%;
          display: flex;
          align-self: start;
          justify-content: space-around;
        }
      
        .small-light {
          border: solid black;
          width: 16px;
          height: 16px;
          border-radius: 50%;
        }
        .dot {
          height: 5px;
          width: 5px;
          position: relative;
          top: 3px;
          left: 3px;
          border-radius: 50%;
        }
      
        /* Center Screen */
      
        .screen-container {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      
        .screen {
          width: 15rem;
          height: 15rem;
          border: solid black;
          border-radius: 0 0 0 17%;
          display: grid;
          grid-template-rows: 10% 72% 18%;
          background-color: white;
          margin-top: -3rem;
        }
      
        .top-screen-lights {
          width: 50%;
          margin-top: 0.125rem;
          display: flex;
          justify-self: center;
          justify-content: center;
          align-items: center;
        }
      
        .mini-light {
          border: solid black 1px;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          margin-right: 0.5rem;
        }
      
        #main-screen {
          height: 100%;
          width: 80%;
          justify-self: center;
          background-color: var(--main-screen-bg-color);
          border: solid black 0.125rem;
          border-radius: 5%;
          justify-content: center;
          align-items: center;
        }
      
        #main-screen img {
          width: 12.25rem;
        }
      
        .bottom-screen-lights {
          display: flex;
          margin-top: 5px;
          width: 75%;
          justify-self: center;
          justify-content: space-between;
          align-items: center;
        }
      
        .bottom-screen-lights .small-light {
          border: solid black 0.125rem;
          width: 12px;
          height: 12px;
        }
      
        .bottom-screen-lights .dot {
          height: 4px;
          width: 4px;
          top: 2.5px;
          left: 0.125rem;
        }
      
        .line {
          width: 18px;
          height: 0.125rem;
          background-color: black;
          margin-top: 0.125rem;
        }
      
        /*Bottom buttons  */
      
        .buttons-container {
          display: grid;
          grid-template-rows: 40% 60%;
        }
      
        .big-button {
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 50%;
          border: solid 0.125rem black;
          background-color: var(--main-buttons-color);
          margin-left: 1.25rem;
        }
      
        .long-button {
          width: 2.2rem;
          height: 0.5rem;
          border-radius: 3.2rem;
          border: 0.125rem solid black;
        }
      
        .green-screen {
          width: 8rem;
          height: 2.25rem;
          border-radius: 0.5rem;
          border: solid black 0.125rem;
          background-color: #3ab47d;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      
        #name-screen {
          width: 100%;
          font-family: "Press Start 2P", cursive;
          text-align: center;
          font-size: 0.65rem;
          overflow-wrap: break-word;
        }
      
        .circle {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          border: 1px solid black;
        }
      
        .upper-buttons-container {
          display: flex;
          align-items: top;
          justify-content: start;
        }
      
        .long-buttons-container {
          display: flex;
          width: 100px;
          justify-content: space-around;
          margin-left: 0.5rem;
        }
      
        .nav-buttons-container {
          display: grid;
          grid-template-columns: 27% 35% 38%;
        }
      
        .dots-container {
          height: 100%;
          width: 50%;
          display: flex;
          justify-self: center;
          justify-content: space-between;
          font-size: x-large;
        }
      
        .right-nav-container {
          position: relative;
          top: -30px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      
        .nav-button {
          height: 52px;
          width: 52px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      
        .nav-button-vertical {
          position: absolute;
          transform: rotate(90deg);
          background-color: var(--main-buttons-color);
          border-radius: 5px;
          height: 1.2rem;
          width: 4rem;
          border: 0.125rem solid black;
        }
      
        .nav-button-horizontal {
          position: absolute;
          background-color: var(--main-buttons-color);
          border-radius: 5px;
          height: 1.2rem;
          width: 4rem;
          border: 0.125rem solid black;
        }
      
        .nav-center-circle {
          height: 5px;
          width: 5px;
          border-radius: 50%;
          border: solid black 0.125rem;
          z-index: +2;
        }
      
        .border-top {
          border-top: 3.5px solid var(--main-buttons-color);
          position: absolute;
          top: -0.075rem;
          left: 1.4rem;
          right: 1.45rem;
        }
        .border-bottom {
          border-top: 3.5px solid var(--main-buttons-color);
          position: absolute;
          top: 1.2rem;
          left: 1.4rem;
          right: 1.45rem;
        }
      
        .bottom-right-nav-container {
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
        }
      
        .bottom-right-nav-container .dots-container {
          align-items: center;
          justify-content: center;
        }
      
        .bottom-right-nav-container .small-light {
          border: solid black 0.125rem;
          width: 0.5rem;
          height: 0.5rem;
          margin-right: 3px;
          margin-top: 10px;
        }
      
        .bottom-right-nav-container .dot {
          height: 2.5px;
          width: 2.5px;
          top: 1.5px;
          left: 1.5px;
        }`
        return `<style>${css}</style>`
    }

    topLights(){
        return `<section class="left-top-container">
            <svg height="100" width="315" class="left-svg">
            <polyline
                points="0,75 70,75 90,38 315,38"
                style="fill: none; stroke: black; stroke-width: 3"
            />
            </svg>
            <section class="lights-container">
                <section class="big-light-boarder">
                    <section class="big-light blue">
                        <section class="big-dot light-blue" ></section>
                    </section>
                </section>
                <section class="small-lights-container">
                    <section class="small-light red">
                        <section class="dot light-red"></section>
                    </section>
                    <section class="small-light yellow">
                        <section class="dot light-yellow"></section>
                    </section>
                    <section class="small-light green">
                        <section class="dot light-green"></section>
                    </section>
                </section>
            </section>
        </section>`
    }

    centerScreen(){
        return `<section class="screen-container">
            <section class="screen">
            <section class="top-screen-lights">
                <section class="mini-light red"></section>
                <section class="mini-light red"></section>
            </section>
            <section id="main-screen"></section>
            <section class="bottom-screen-lights">
                <section class="small-light red">
                <section class="dot light-red"></section>
                </section>
                <section class="burger">
                <section class="line"></section>
                <section class="line"></section>
                <section class="line"></section>
                <section class="line"></section>
                </section>
            </section>
            </section>
        </section>`
    }

    bottomButtons(){
        return `<section class="buttons-container">
            <section class="upper-buttons-container">
            <section class="big-button"></section>
            <section class="long-buttons-container">
                <section class="long-button red"></section>
                <section class="long-button light-blue"></section>
            </section>
            </section>
            <section class="nav-buttons-container">
            <section class="dots-container">
                <section>.</section>
                <section>.</section>
            </section>
            <section class="green-screen">
                <span id="name-screen"></span>
            </section>
            <section class="right-nav-container">
                <section class="nav-button">
                <section class="nav-center-circle"></section>
                <section class="nav-button-vertical"></section>
                <section class="nav-button-horizontal">
                    <section class="border-top"></section>
                    <section class="border-bottom"></section>
                </section>
                </section>
                <section class="bottom-right-nav-container">
                <section class="small-light red">
                    <section class="dot light-red"></section>
                </section>
                <section class="dots-container">
                    <section class="black-dot">.</section>
                    <section class="black-dot">.</section>
                    <section class="black-dot">.</section>
                </section>
                </section>
            </section>
            </section>
        </section>`
    }

    connectedCallback(){
        this.shadowRoot.innerHTML = `
        ${this.estilo()}
        <aside id="left-panel">
            ${this.topLights()}
            ${this.centerScreen()}
            ${this.bottomButtons()}
        </aside>`
    }
}

const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            pokeImage("https://http.cat/400")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            const {name: nombrePokemon, weight: pesoPokemon, height: estaturaPokemon, stats} = data
            let nombre = document.getElementById("name-screen"),
            altura = document.getElementById("size"),
            peso = document.getElementById("weight"),
            tipo = document.getElementById("type"),
            debilidad = document.getElementById("weakness"),
            salud = document.getElementById("health")
            ataque = document.getElementById("attack"),
            defensa = document.getElementById("defense"),
            especial1 = document.getElementById("special-attack"),
            especial2 = document.getElementById("special-defense"),
            velocidad = document.getElementById("speed"),
            tipoPokemon = processType(data.types),
            datos = []
            for(let i of stats){
                datos.push(i.base_stat)
            }

            processWeakness(data.types).then(dato => {
                dato.map(i => {
                    i.then(j => debilidad.innerHTML = j.toString())
                })
            })
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            nombre.innerHTML = nombrePokemon.toUpperCase()
            altura.innerHTML = `${estaturaPokemon/10} m`
            peso.innerHTML = `${pesoPokemon/10} kg`
            tipo.innerHTML = `${tipoPokemon.toString()}`
            salud.innerHTML = datos[0]
            ataque.innerHTML = datos[1]
            defensa.innerHTML = datos [2]
            especial1.innerHTML = datos[3]
            especial2.innerHTML = datos[4]
            velocidad.innerHTML = datos[5]
        }
    });
}

const pokeImage = (url) => {
    const pokeDisplay = document.getElementById("main-screen");
    img = document.getElementById("pokeImage")
    let pokeImage = img?? document.createElement("img")
    pokeImage.src = url
    pokeImage.id = "pokeImage"
    // pokeDisplay.appendChild(pokeImage)

}

const processType = (data) => {
    let tipo = []
    for(let i of data){
        tipo.push(i.type.name)
    }
    return tipo
}

const processWeakness = async (data) => {
    var debilidad = []
    var promesas = []
    for(let i of data){
         promesas.push(fetch(i.type.url).then((res) => {
            if (res.status != "200") {
                console.log(res);
            }
            else {
                return res.json();
            }
        }).then((data) => {
            const {double_damage_from: damageFrom} = data.damage_relations
            return damageFrom.map((i) => i.name)
        }))

        for(let j of promesas)
            debilidad.push(j)
    }

    return debilidad
}

customElements.define("left-side", LeftSide);