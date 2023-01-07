import { state } from "./state";
import { initRoute } from "./router";
import { initTitle } from "./components/title";
import { initBoton } from "./components/boton";
import { initiHand } from "./components/hand";
import { initPlay } from "./components/countdown";
import { initJugada } from "./components/jugada";
import { initScore } from "./components/score";

state.init();
initTitle();
initBoton();
initiHand();
initPlay();
initJugada();
initScore();

initRoute(document.querySelector("#root") as HTMLElement);
