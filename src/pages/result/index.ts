import {state} from '../../state';

export function initResult(param) {
  const div = document.createElement('div');
  div.classList.add('contenedor');
  const currentState = state.getState();
  const ganador = state.whoWins(
    currentState.currentGame.myPlay,
    currentState.currentGame.computerPlay
  );

  state.saveHistory(
    currentState.currentGame.myPlay,
    currentState.currentGame.computerPlay
  );
  div.innerHTML = ` 
      <custom-jugada jugada="${ganador}"></custom-jugada>
      <custom-score ganador="${ganador}"></custom-score>
      <custom-boton class="btn" title="Volver a jugar"></custom-boton>
   `;
  const style = document.createElement('style');
  style.innerHTML = `
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
   `;

  const fondo = div.querySelector('custom-jugada')!.getAttribute('jugada');

  if (fondo === 'empate') {
    document.body.style.backgroundColor = '#4AC0FF';
    document.body.style.backgroundImage = 'none';
  } else if (fondo === 'true') {
    document.body.style.backgroundColor = '#888949';
    document.body.style.backgroundImage = 'none';
  } else if (fondo === 'false') {
    document.body.style.backgroundColor = '#894949';
    document.body.style.backgroundImage = 'none';
  }

  div.appendChild(style);

  const btn = div.querySelector('.btn');
  btn?.addEventListener('click', () => {
    param.goTo('/instruction');
  });
  return div;
}
