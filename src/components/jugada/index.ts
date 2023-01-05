const perdistes = require("../../img/perdiste.png");
const ganastes = require("../../img/ganastes.png");
export function initJugada() {
   customElements.define(
      "custom-jugada",
      class extends HTMLElement {
         constructor() {
            super();
            this.render();
         }
         render() {
            const shadow = this.attachShadow({ mode: "open" });
            const div = document.createElement("div");
            const jugada = this.getAttribute("jugada");
            div.classList.add("imagen");
            div.innerHTML = `
               <h2 class="titulo">${
                  jugada == "ganastes" ? "Ganastes" : "Perdistes"
               }</h2>
               <img src="${
                  jugada == "ganastes" ? ganastes : perdistes
               }" class="${jugada == "ganastes" ? "ganastes" : "perdistes"}"/>
            `;

            const style = document.createElement("style");

            style.innerHTML = `
               .titulo{
                  color: #fff;
                  font-size: 3.3rem;
                  position: absolute;
                  top: 70px;
                  right: auto;
               }
               .imagen{
                  display: flex;
                  align-items: center;
                  justify-content: center;
               }  
            `;

            shadow.appendChild(style);
            shadow.appendChild(div);
         }
      }
   );
}
