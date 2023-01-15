const papel = require("../../img/papel.png");
const tijera = require("../../img/tijera.png");
const piedra = require("../../img/piedra.png");

export function initWelcome(param) {
   const div = document.createElement("div");
   const style = document.createElement("style");
   div.classList.add("contenedor");
   div.innerHTML = `
      <custom-title inicio="${"Piedra<br> Papel <span class='span-o'>o</span> Tijera"}"></custom-title>
      <custom-boton class="btn" title="Empezar"></custom-boton>
      <div class='hand'>
         <custom-hand direction="${papel}"></custom-hand>
         <custom-hand direction="${tijera}"></custom-hand>
         <custom-hand direction="${piedra}"></custom-hand>
      </div>

   `;
   style.innerHTML = `
      .contenedor{
         display:flex;
         flex-direction:column;
         text-align:center;
         justify-content: space-between;
         height: 100vh;

      }
      @media(min-width:400px){
         .contenedor{
            display:flex;
            flex-direction:column;
            width:300px;
            margin:0px auto;
            margin-bottom: 0;
            height: 82vh;
         }
      }

      .hand{
         display:flex;
         justify-content: space-around;
         margin-top:3rem;
      }
      @media(min-width:400px){
         .hand{
            justify-content: space-between;
         }
      }
   `;

   div.appendChild(style);

   const btn = div.querySelector(".btn");
   btn?.addEventListener("click", (e) => {
      param.goTo("/instruction");
   });
   return div;
}
