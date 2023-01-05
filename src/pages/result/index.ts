import { state } from "../../state";

export function initResult(param) {
   const div = document.createElement("div");
   div.classList.add("contenedor");

   div.innerHTML = ` 
      <custom-jugada jugada="${"perdistes"}" class="perdistes"></custom-jugada>
      <custom-score></custom-score>
      <custom-boton class="btn" title="Volver a jugar"></custom-boton>
   `;
   // const fondo = div.
   const style = document.createElement("style");
   style.innerHTML = `
   body{
      opacity:90%;
      background-image:none;
      
   }
   .perdistes === true ? body:""{
      background-color:#894949;
   }
   .ganastes{
      background-color:#888949;
   }
   .contenedor{
      display:flex;
      flex-direction:column;
      text-align:center;
      justify-content: space-between;
      height: 100vh;
      margin:20px auto;
      margin-bottom: 0;
   }
   @media(min-width:400px){
      .contenedor{
         display:flex;
         flex-direction:column;
         width:300px;
         height: 97.5vh;
      }
   }

   `;
   div.appendChild(style);
   console.log(state.getState());

   const btn = div.querySelector(".btn");
   btn?.addEventListener("click", () => {
      param.goTo("/instruction");
   });
   return div;
}
