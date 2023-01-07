type jugada = "tijera" | "papel" | "piedra";
const state = {
   data: {
      currentGame: {
         computerPlay: "",
         myPlay: " ",
      },
      history: {},
   },
   init() {
      if (localStorage.getItem("history")) {
         true;
      } else {
         localStorage.setItem(
            "history",
            JSON.stringify({ user: 0, computer: 0 })
         );
      }
   },

   getState() {
      return this.data;
   },

   setMove(myPlay: jugada, computerPlay: jugada) {
      const currentState = this.getState();

      return (currentState.currentGame = {
         computerPlay,
         myPlay,
      });
   },

   whoWins(myPlay: jugada, computerPlay: jugada) {
      const ganeConTijera = myPlay == "tijera" && computerPlay == "papel";
      const ganeConPiedra = myPlay == "piedra" && computerPlay == "tijera";
      const ganeConPapel = myPlay == "papel" && computerPlay == "piedra";
      const gane = [ganeConPapel, ganeConTijera, ganeConPiedra].includes(true);

      const computerGaneConTijera =
         computerPlay == "tijera" && myPlay == "papel";
      const computerGaneConPiedra =
         computerPlay == "piedra" && myPlay == "tijera";
      const computerGaneConPapel =
         computerPlay == "papel" && myPlay == "piedra";
      const computerGane = [
         computerGaneConTijera,
         computerGaneConPiedra,
         computerGaneConPapel,
      ].includes(true);

      if (gane === computerGane) {
         return "empate";
      } else if (gane) {
         return true;
      } else if (computerGane) {
         return false;
      }
   },
   getHistory() {
      const curerntHistory = JSON.parse(localStorage.getItem("history")!);
      return curerntHistory;
   },
   saveHistory(myPlay: jugada, computerPlay: jugada) {
      const currentHistory = this.getHistory();
      if (this.whoWins(myPlay, computerPlay) == true) {
         currentHistory.user = currentHistory.user + 1;
      } else if (this.whoWins(myPlay, computerPlay) == false) {
         currentHistory.computer = currentHistory.computer + 1;
      }
      localStorage.setItem("history", JSON.stringify(currentHistory)!);
   },
   clearHistory() {
      localStorage.clear();
   },
};

export { state };
