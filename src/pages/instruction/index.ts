const papel = require("../../img/papel.png");
const tijera = require("../../img/tijera.png");
const piedra = require("../../img/piedra.png");
const fondo = require("../../img/fondo.png");
export function initInstruction(param) {
   const div = document.createElement("div");
   const style = document.createElement("style");
   div.classList.add("contenedor");
   document.body.style.backgroundImage = `url(${fondo})`;
   document.body.style.backgroundColor = `inherit`;
   div.innerHTML = `
   <custom-title inicio="Presioná jugar
   y elegí: piedra, papel o tijera antes de que pasen los 5 segundos."></custom-title>
   <custom-boton class="btn" title="Jugar"></custom-boton>
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
         margin:60px auto;
         margin-bottom: 0;
         height: 82vh;
      }
   }

   .hand{
      display:flex;
      justify-content: space-around;
      margin-top:2.6rem;
   }
   @media(min-width:400px){
      .hand{
         justify-content: space-between;
      }
   }
   `;
   div.appendChild(style);
   const btn = div.querySelector(".btn");
   btn?.addEventListener("click", () => {
      param.goTo("/play");
   });
   return div;
}
