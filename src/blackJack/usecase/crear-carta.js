/**
 *
 * @param {string} carta carta del deck
 * @param {number} turno posicion turno del jugador
 * @param {HTMLElement} divCartasJugadores elemento HTML para mostrar las cartas
 */
export const crearCarta = (carta, turno, divCartasJugadores) => {
  const imgCarta = document.createElement("img");
  imgCarta.src = `assets/cartas/${carta}.png`;
  imgCarta.classList.add("carta");
  divCartasJugadores[turno].append(imgCarta);
};
