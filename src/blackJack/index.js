import {
  acumularPuntos,
  crearCarta,
  crearDeck,
  pedirCarta,
  trunoComputadora,
} from "./usecase";

const miModulo = (() => {
  "use strict";
  let deck = [];
  const tipos = ["C", "D", "H", "S"],
    especiales = ["A", "J", "Q", "K"];

  let puntosJugadores = [];

  // Referencias del HTML
  const btnPedir = document.querySelector("#btnPedir"),
    btnDetener = document.querySelector("#btnDetener"),
    btnNuevo = document.querySelector("#btnNuevo");

  const divCartasJugadores = document.querySelectorAll(".divCartas"),
    puntosHTML = document.querySelectorAll("small");

  // Esta funcion inicializa el juego
  const inicializarJuego = (numJugadores = 2) => {
    deck = crearDeck(tipos, especiales);
    puntosJugadores = [];
    for (let i = 0; i < numJugadores; i++) {
      puntosJugadores.push(0);
      console.log(puntosJugadores[i]);
    }

    puntosHTML.forEach((i) => (i.innerHTML = 0));
    divCartasJugadores.forEach((i) => (i.innerHTML = ""));

    btnDetener.disabled = false;
    btnPedir.disabled = false;
  };

  // Eventos   | callbak funcion que se manda como argumento
  btnPedir.addEventListener("click", () => {
    const carta = pedirCarta(deck);
    const puntosJugador = acumularPuntos(carta, 0, puntosJugadores, puntosHTML);

    crearCarta(carta, 0, divCartasJugadores);

    if (puntosJugador > 21) {
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      trunoComputadora(
        puntosJugador,
        deck,
        puntosJugadores,
        puntosHTML,
        divCartasJugadores
      );
    } else if (puntosJugador === 21) {
      console.warn("21, Ganaste!");
      btnPedir.disabled = true;
      btnDetener.disabled = true;
    }

    return puntosJugador;
  });

  btnDetener.addEventListener("click", () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    trunoComputadora(
      puntosJugadores[0],
      deck,
      puntosJugadores,
      puntosHTML,
      divCartasJugadores
    );
  });

  btnNuevo.addEventListener("click", () => {
    inicializarJuego();
  });

  return {
    nuevoJuego: inicializarJuego,
  };
})();
