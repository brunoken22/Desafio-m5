import { initWelcome } from "./pages/inicio";
import { initInstruction } from "./pages/instruction";
import { initPlay } from "./pages/play";
import { initResult } from "./pages/result";
const router = [
   {
      path: /\/welcome/,
      component: initWelcome,
   },
   {
      path: /\/instruction/,
      component: initInstruction,
   },
   {
      path: /\/play/,
      component: initPlay,
   },
   {
      path: /\/result/,
      component: initResult,
   },
];

const BASE_PATH = "/Desafio-m5";

function isGithubPages() {
   return location.host.includes("brunoken22.github.io");
}

export function initRoute(container: Element) {
   function goTo(path) {
      const completePath = isGithubPages() ? BASE_PATH + path : path;
      history.pushState({}, "", path);
      handleRoute(completePath);
   }
   function handleRoute(root) {
      const newRoute = isGithubPages() ? root.replace(BASE_PATH, "") : root;
      for (let r of router) {
         if (r.path.test(newRoute)) {
            let el = r.component({ goTo })!;
            if (container.firstChild) {
               container.firstChild.remove();
            }
            container.appendChild(el);
         }
      }
   }
   if (location.pathname == "/" || location.pathname == "/Desafio-m5/") {
      goTo("/welcome");
   } else {
      handleRoute(location.pathname);
   }
   window.onpopstate = () => {
      handleRoute(location.pathname);
   };
}
