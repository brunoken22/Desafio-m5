import { state } from "../../state";
const papel = require("../../img/papel.png");
const tijera = require("../../img/tijera.png");
const piedra = require("../../img/piedra.png");

export function initPlay(param) {
   const div = document.createElement("div");
   const style = document.createElement("style");
   div.classList.add("contenedor");

   div.innerHTML = `
      <div class="computer-hands">
         <custom-hand id="1" class="computer-papel" direction="${papel}" style="display:none" type="papel"></custom-hand>
         <custom-hand id="2" class="computer-tijera" type="tijera" direction="${tijera}" style="display:none"></custom-hand>
         <custom-hand id="3" class="computer-piedra" direction="${piedra}" type="piedra"  style="display:none"></custom-hand>
      </div>
      <custom-countdown class="countdown"></custom-countdown>
      <div class='hands'>
         <a href="#" class="papel selec"><custom-hand id='papel' direction="${papel}"></custom-hand></a>
         <a href="#" class="tijera selec"><custom-hand id='tijera' direction="${tijera}"></custom-hand></a>
         <a href="#" class="piedra selec"><custom-hand id='piedra' direction="${piedra}"></custom-hand></a>
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
         height: 100vh;
      }
   }
   .computer-hands{
      transform: rotate(-180deg);
   }

   .hands{
      display:flex;
      justify-content: space-around;
      margin-top:0;
   }
   @media(min-width:400px){
      .hands{
         justify-content: space-between;
      }
      
   }
   .piedra,.papel,.tijera{
      opacity:50%;
   }
   .piedra:hover{
      margin-top:-50px;
      opacity:100%;
   }
   .tijera:hover{
      margin-top:-50px;
      opacity:100%;
   }
   .papel:hover{
      margin-top:-50px;
      opacity:100%;

   }
   `;
   div.appendChild(style);

   const conteo = setInterval(() => {
      const countdown = div
         .querySelector("custom-countdown")
         ?.shadowRoot?.querySelector(".countdown-number")!
         .querySelector("h3")?.textContent as any;
      if (countdown < 1) {
         clearInterval(conteo);
         param.goTo("./instruction");
      }
   }, 1000);

   const hands = div.querySelectorAll(".selec");
   for (let el of hands) {
      el.addEventListener("click", (e) => {
         e.preventDefault();
         clearInterval(conteo);
         const numAleatorio = Math.ceil(Math.random() * 3);

         (el as any).style.cssText =
            "margin-top:-70px;opacity:100%;width:300px";

         const countdown = div.querySelector("custom-countdown") as HTMLElement;

         countdown.style.display = "none";
         const computHands = div.querySelectorAll(
            ".computer-hands custom-hand"
         ) as any;

         const myPlay = (e.target as HTMLElement).getAttribute("id") as any;

         for (let ele of computHands) {
            if (Number(ele.getAttribute("id")) === numAleatorio) {
               state.setMove(myPlay, ele.getAttribute("type"));

               ele.style.display = "block";
               setTimeout(() => {
                  param.goTo("/result");
               }, 2000);
               return ele;
            }
         }
      });
   }
   return div;
}
