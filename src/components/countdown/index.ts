customElements.define(
   "custom-countdown",
   class extends HTMLElement {
      constructor() {
         super();
         this.render();
      }
      render() {
         const shadow = this.attachShadow({ mode: "open" });
         const div = document.createElement("div");
         div.innerHTML = `
               <div class="countdown">
                  <div class="countdown-number"></div>
                  <svg class="svg">
                     <circle class="circle" r="90" cx="140" cy="140"></circle>
                     <circle class="svg-circle" r="90" cx="140" cy="140"></circle>
                  </svg>
               </div>
            `;

         const style = document.createElement("style") as any;
         style.innerHTML = `
            .countdown{
               height:300px;
               margin: 0 auto;
             }
             .countdown-number {

               position: relative;
               font-weight: 400;
               font-size: 72px;
               text-align: center;
               font-family: 'Faster One', cursive;
               color: #000;
             }
             
             .svg {
               position: relative;
               width: 260px;
               top: -270px;
               height: 280px;
               transform: rotateY(-180deg) rotateZ(-90deg);
             }
             
             .svg-circle{
               stroke-dasharray: 570px;
               stroke-dashoffset: 0px;
               stroke-linecap: round;
               stroke-width:15px;
               stroke: #000;
               fill: none;
               animation: countdown 5s linear infinite forwards;
             }
             .circle{
               fill:none;
               stroke: #F1F1F1;
               stroke-width:15px;
             }
             @keyframes countdown {
               from {
                 stroke-dashoffset: 0px;
               }
               to {
                 stroke-dashoffset: 580px;
               }
             }
           `;

         const countNumber = div.querySelector(".countdown-number") as any;
         let cantidad = 5;

         let tiempo = setInterval(() => {
            cantidad--;

            countNumber.innerHTML! = `
                  <h3>${cantidad.toString()}</h3>
               `;
            if (cantidad < 1) {
               clearInterval(tiempo);
            }
         }, 1000);
         shadow.appendChild(div);
         shadow.appendChild(style);
      }
   }
);
