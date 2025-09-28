// Turno: 0= primer jugador y el ultimo computadora
import { valorCarta } from "./valor-carta";
/**
 *
 * @param {string} carta carta del deck
 * @param {number} turno posicion del turno del jugador
 * @param {Array<number>} puntosJugadores puntos de los jugador
 * @param {HTMLElement} puntosHTML elemento html para mostrar los puntos
 * @returns puntos del jugador
 */
export const acumularPuntos = (carta, turno, puntosJugadores, puntosHTML) => {
  puntosJugadores[turno] += valorCarta(carta);
  puntosHTML[turno].innerHTML = puntosJugadores[turno];
  return puntosJugadores[turno];
};
