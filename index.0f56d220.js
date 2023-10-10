function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequire9acc;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequire9acc=r),r.register("27Lyk",function(t,n){e(t.exports,"register",()=>o,e=>o=e),e(t.exports,"resolve",()=>r,e=>r=e);var o,r,i={};o=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},r=function(e){var t=i[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),r("27Lyk").register(JSON.parse('{"dZpbI":"index.0f56d220.js","5mdmA":"papel.76830398.png","cnU0O":"tijera.35a4d633.png","hbeyn":"piedra.ed6600e8.png","kyeiw":"fondo.c79a2464.png","9lSLl":"perdiste.5507728c.png","iSHGa":"ganastes.bb12b502.png"}'));const i={data:{currentGame:{computerPlay:"",myPlay:" "},history:{}},init(){localStorage.getItem("history")||localStorage.setItem("history",JSON.stringify({user:0,computer:0}))},getState(){return this.data},setMove(e,t){let n=this.getState();return n.currentGame={computerPlay:t,myPlay:e}},whoWins(e,t){let n=["papel"==e&&"piedra"==t,"tijera"==e&&"papel"==t,"piedra"==e&&"tijera"==t].includes(!0),o=["tijera"==t&&"papel"==e,"piedra"==t&&"tijera"==e,"papel"==t&&"piedra"==e].includes(!0);return n===o?"empate":!!n||!o&&void 0},getHistory(){let e=JSON.parse(localStorage.getItem("history"));return e},saveHistory(e,t){let n=this.getHistory();!0==this.whoWins(e,t)?n.user=n.user+1:!1==this.whoWins(e,t)&&(n.computer=n.computer+1),localStorage.setItem("history",JSON.stringify(n))},clearHistory(){localStorage.clear()}};var a={};a=new URL(r("27Lyk").resolve("5mdmA"),import.meta.url).toString();var s={};s=new URL(r("27Lyk").resolve("cnU0O"),import.meta.url).toString();var c={};c=new URL(r("27Lyk").resolve("hbeyn"),import.meta.url).toString();var d={};d=new URL(r("27Lyk").resolve("kyeiw"),import.meta.url).toString();const l=[{path:/\/welcome/,component:function(e){let t=document.createElement("div"),n=document.createElement("style");t.classList.add("contenedor"),t.innerHTML=`
      <custom-title inicio="Piedra<br> Papel <span class='span-o'>o</span> Tijera"></custom-title>
      <custom-boton class="btn" title="Empezar"></custom-boton>
      <div class='hand'>
         <custom-hand direction="${a}"></custom-hand>
         <custom-hand direction="${s}"></custom-hand>
         <custom-hand direction="${c}"></custom-hand>
      </div>

   `,n.innerHTML=`
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
   `,t.appendChild(n);let o=t.querySelector(".btn");return o?.addEventListener("click",t=>{e.goTo("/instruction")}),t}},{path:/\/instruction/,component:function(e){let t=document.createElement("div"),n=document.createElement("style");t.classList.add("contenedor"),document.body.style.backgroundImage=`url(${d})`,document.body.style.backgroundColor="inherit",t.innerHTML=`
   <custom-title inicio="Presion\xe1 jugar
   y eleg\xed: piedra, papel o tijera antes de que pasen los 5 segundos."></custom-title>
   <custom-boton class="btn" title="Jugar"></custom-boton>
      <div class='hand'>
         <custom-hand direction="${a}"></custom-hand>
         <custom-hand direction="${s}"></custom-hand>
         <custom-hand direction="${c}"></custom-hand>
      </div>
   `,n.innerHTML=`
   
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
   `,t.appendChild(n);let o=t.querySelector(".btn");return o?.addEventListener("click",()=>{e.goTo("/play")}),t}},{path:/\/play/,component:function(e){let t=document.createElement("div"),n=document.createElement("style");t.classList.add("contenedor"),t.innerHTML=`
      <div class="computer-hands">
         <custom-hand id="1" class="computer-papel" direction="${a}" style="display:none" type="papel"></custom-hand>
         <custom-hand id="2" class="computer-tijera" type="tijera" direction="${s}" style="display:none"></custom-hand>
         <custom-hand id="3" class="computer-piedra" direction="${c}" type="piedra"  style="display:none"></custom-hand>
      </div>
      <custom-countdown class="countdown"></custom-countdown>
      <div class='hands'>
         <a href="#" id="papel" class="papel selec"><custom-hand id='papel' direction="${a}"></custom-hand></a>
         <a href="#" id="tijera" class="tijera selec"><custom-hand id='tijera' direction="${s}"></custom-hand></a>
         <a href="#" id="piedra" class="piedra selec"><custom-hand id='piedra' direction="${c}"></custom-hand></a>
      </div>
   `,n.innerHTML=`
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
         justify-content: space-center;
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
   `,t.appendChild(n);let o=setInterval(()=>{let n=t.querySelector("custom-countdown")?.shadowRoot?.querySelector(".countdown-number")?.textContent;n<1&&(clearInterval(o),e.goTo("./instruction"))},1e3),r=t.querySelectorAll(".selec");for(let n of r)n.addEventListener("click",a=>{for(let e of(clearInterval(o),a.preventDefault(),n.href=" ",r))e.getAttribute("id")!==n.getAttribute("id")&&e.remove();let s=Math.ceil(3*Math.random());n.style.cssText="margin-top:-70px;opacity:100%;justify-content: center;pointer-events: none;cursor: default";let c=t.querySelector("custom-countdown");c.style.display="none";let d=t.querySelectorAll(".computer-hands custom-hand"),l=a.target.getAttribute("id");for(let t of d)if(Number(t.getAttribute("id"))===s)return i.setMove(l,t.getAttribute("type")),t.style.display="block",setTimeout(()=>{e.goTo("/result")},2e3),t});return t}},{path:/\/result/,component:function(e){let t=document.createElement("div");t.classList.add("contenedor");let n=i.getState(),o=i.whoWins(n.currentGame.myPlay,n.currentGame.computerPlay);i.saveHistory(n.currentGame.myPlay,n.currentGame.computerPlay),t.innerHTML=` 
      <custom-jugada jugada="${o}"></custom-jugada>
      <custom-score ganador="${o}"></custom-score>
      <custom-boton class="btn" title="Volver a jugar"></custom-boton>
   `;let r=document.createElement("style");r.innerHTML=`
   body{
      opacity:90%;
   }

   .contenedor{
      display:flex;
      flex-direction:column;
      text-align:center;
      justify-content: space-between;
      height: 100vh;
      margin-bottom: 0;
      margin:0 auto;

   }
   @media(min-width:400px){
      .contenedor{
         display:flex;
         flex-direction:column;
         width:300px;
         margin:20px auto;
         height: 97.5vh;
      }
   }
   `;let a=t.querySelector("custom-jugada").getAttribute("jugada");"empate"===a?(document.body.style.backgroundColor="#4AC0FF",document.body.style.backgroundImage="none"):"true"===a?(document.body.style.backgroundColor="#888949",document.body.style.backgroundImage="none"):"false"===a&&(document.body.style.backgroundColor="#894949",document.body.style.backgroundImage="none"),t.appendChild(r);let s=t.querySelector(".btn");return s?.addEventListener("click",()=>{e.goTo("/instruction")}),t}}],u="/Desafio-m5";function m(){return location.host.includes("brunoken22.github.io")}class p extends HTMLElement{constructor(){super(),this.render()}render(){let e=this.attachShadow({mode:"open"}),t=this.getAttribute("inicio"),n=document.createElement("div"),o=document.createElement("style");n.innerHTML=`
         <h2 class=${t.length>53?"instruction":"titulo"} >${t}</h2>
         `,o.innerHTML=`
            .titulo{
               font-size:5rem;
               color: #009048;
            }
            .instruction{
               font-size:3rem;
            }
            .span-o{
               opacity:50%;
            }
         `,e.appendChild(n),e.appendChild(o)}}customElements.define("custom-title",p);class h extends HTMLElement{constructor(){super(),this.render()}render(){let e=this.attachShadow({mode:"open"}),t=document.createElement("div"),n=this.getAttribute("title");t.innerHTML=`
            <button class="btn">${n}</button>
         `;let o=document.createElement("style");o.innerHTML=`
            .btn{
               font-family: 'Odibee Sans', cursive;
               font-size:3rem;
               width:322px;
               height:87px;
               color:#fff;
               background-color:#006CFC;
               border: 10px solid #001997;
               border-radius:10px;
               margin-bottom:10px;
            }
            @media(min-width:400px){
               .btn{
                  width:100%;

               }
            }
         `,e.appendChild(t),e.appendChild(o)}}customElements.define("custom-boton",h);class g extends HTMLElement{constructor(){super(),this.render()}render(){let e=this.attachShadow({mode:"open"}),t=document.createElement("div"),n=document.createElement("style"),o=this.getAttribute("direction"),r=this.getAttribute("class");t.innerHTML=`
            <img src="${o}" class="${r}" alt="hands">
         `,n.innerHTML=`
      
         `,e.appendChild(t),e.appendChild(n)}}customElements.define("custom-hand",g);class y extends HTMLElement{constructor(){super(),this.render()}render(){let e=this.attachShadow({mode:"open"}),t=document.createElement("div");t.classList.add("countdown"),t.innerHTML=`
      <h3 class="countdown-number">5</h3>
      <svg class="svg">
        <circle class="circle" r="90" cx="165" cy="140"></circle>
        <circle class="svg-circle" r="90" cx="165" cy="140"></circle>
      </svg>
      `;let n=document.createElement("style");n.innerHTML=`
          .countdown{
              margin: 0 auto;
              height:300px;
              display:flex;
              flex-direction:column;
              align-items:center;
            }
            .countdown-number {
              position: absolute;
              font-weight: 400;
              font-size: 72px;
              text-align: center;
              font-family: 'Faster One', cursive;
              color: #000;
            }
            
            .svg {  
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
              f rom {
                stroke-dashoffset: 0px;
              }
              to {
                stroke-dashoffset: 580px;
              }
            }
    `;let o=5,r=t.querySelector(".countdown-number"),i=setInterval(()=>{o--,r.innerHTML=o.toString(),o<1&&clearInterval(i)},1e3);e.appendChild(t),e.appendChild(n)}}customElements.define("custom-countdown",y);var f={};f=new URL(r("27Lyk").resolve("9lSLl"),import.meta.url).toString();var b={};b=new URL(r("27Lyk").resolve("iSHGa"),import.meta.url).toString(),customElements.define("custom-jugada",class extends HTMLElement{constructor(){super(),this.render()}render(){let e=this.attachShadow({mode:"open"}),t=document.createElement("div"),n=this.getAttribute("jugada");function o(){return"empate"===n?"Empate":"true"===n?"Ganastes":"Perdistes"}t.classList.add("imagen"),t.innerHTML=`
               <h2 class="titulo titulo-${o()}">${o()}</h2>
               <img src="${"true"==n?b:f}" class="${o()}"/>
            `;let r=document.createElement("style");r.innerHTML=`
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
               .titulo-Empate{
                  color:#000;
                  opacity:100%
               }
               .Empate{
                  opacity:30%;
               }  
            `,e.appendChild(r),e.appendChild(t)}}),customElements.define("custom-score",class extends HTMLElement{constructor(){super(),this.render()}render(){let e=this.attachShadow({mode:"open"}),t=document.createElement("div");t.classList.add("score");let n=i.getHistory().user,o=i.getHistory().computer;t.innerHTML=`
               <h3>Score</h3>
               <div class="puntos">
                  <h4>Vos : ${n}</h4>
                  <h4>M\xe1quina : ${o}</h4>
               </div>
            `;let r=document.createElement("style");r.innerHTML=`
               .score{
                  width:70%;
                  margin:15px auto;
                  border:solid 10px;
                  border-radius:20px;
                  padding:20px;
                  background-color:#fff;
               }

               .score h3{
                  text-align:center;
                  font-size:3.5rem;
                  margin-top:0;
                  margin-bottom:0;
               }
               .puntos{

               }
               .puntos h4{
                  text-align:end;
                  font-size:2.5rem;
                  margin-bottom:0;
                  margin-top:30px
               }
               @media(min-width:400px){
                  .score{
                  width:80%;

                  }
               }
            `,e.appendChild(t),e.appendChild(r)}}),i.init(),function(e){function t(e){let t=m()?u+e:e;history.pushState({},"",t),n(t)}function n(n){let o=m()?n.replace(u,""):n;for(let n of l)if(n.path.test(o)){let o=n.component({goTo:t});e.firstChild&&e.firstChild.remove(),e.appendChild(o)}}"/"==location.pathname||location.host.includes("github.io")?t("/welcome"):n(location.pathname),window.onpopstate=()=>{n(location.pathname)}}(document.querySelector("#root"));//# sourceMappingURL=index.0f56d220.js.map

//# sourceMappingURL=index.0f56d220.js.map
