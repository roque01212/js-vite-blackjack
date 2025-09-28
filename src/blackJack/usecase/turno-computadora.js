import { acumularPuntos } from "./acumular-puntos";
import { crearCarta } from "./crear-carta";
import { determinarGanador } from "./determinar-ganador";
import { pedirCarta } from "./pedir-carta";

/**
 * Turno de la compu
 * @param {Number} puntosMinimo puntos mínimo que la computadora necesita para ganar
 * @param {Array<String>} deck deck con las cargas
 * @param {Array<number>} puntosJugadores puntos de los jugadores
 * @param {HTMLElement} puntosHTML elemento html para mostrar los puntos
 * @param {HTMLElement} divCartasJugadores elemento HTML para mostrar las cartas
 *
 *
 */
export const trunoComputadora = (
  puntosMinimo,
  deck = [],
  puntosJugadores = 0,
  puntosHTML,
  divCartasJugadores
) => {
  let puntosComputadora = 0;
  do {
    const carta = pedirCarta(deck);
    puntosComputadora = acumularPuntos(
      carta,
      puntosJugadores.length - 1,
      puntosJugadores,
      puntosHTML
    );

    crearCarta(carta, puntosJugadores.length - 1, divCartasJugadores);
  } while (puntosComputadora < puntosMinimo && puntosMinimo <= 21);

  determinarGanador(puntosJugadores);
};
