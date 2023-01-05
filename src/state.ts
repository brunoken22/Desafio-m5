type jugada = "tijera" | "papel" | "piedra";
const state = {
   data: {
      currentGame: {
         computerPlay: "",
         myPlay: " ",
      },
      history: [{}],
   },
   init() {},

   getState() {
      return this.data;
   },

   setMove(myPlay: jugada, computerPlay: jugada) {
      const currentState = this.getState();

      return (currentState.currentGame.myPlay = {
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
         myPlay == "tijera" && computerPlay == "papel";
      const computerGaneConPiedra =
         myPlay == "piedra" && computerPlay == "tijera";
      const computerGaneConPapel =
         myPlay == "papel" && computerPlay == "piedra";
      const computerGane = [
         computerGaneConTijera,
         computerGaneConPiedra,
         computerGaneConPapel,
      ].includes(true);
      if (gane) {
         console.log("gane");
         return gane;
      } else if (computerGane) {
         console.log(" ganp computerGane");
         return computerGane;
      }

      this.data.currentGame = {
         computerPlay: computerPlay,
         myPlay: myPlay,
      };
   },
};

export { state };
