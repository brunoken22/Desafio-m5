import { state } from "./state";
import { initRoute } from "./router";
import "./components/title";
import "./components/boton";
import "./components/hand";
import "./components/countdown";
import "./components/jugada";
import "./components/score";

function main() {
   state.init();
   initRoute(document.querySelector("#root") as HTMLElement);
}
main();
