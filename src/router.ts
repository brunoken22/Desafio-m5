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

export function initRoute(container: Element) {
   function goTo(path) {
      history.pushState({}, "", path);
      handleRoute(path);
   }
   function handleRoute(root) {
      for (let r of router) {
         if (r.path.test(root)) {
            let el = r.component({ goTo })!;
            if (container.firstChild) {
               container.firstChild.remove();
            }
            container.appendChild(el);
         }
      }
   }
   if (location.pathname == "/") {
      goTo("/welcome");
   } else {
      handleRoute(location.pathname);
   }
   window.onpopstate = () => {
      handleRoute(location.pathname);
   };
}
