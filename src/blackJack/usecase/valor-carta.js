/**
 * Obtener el valor de la carta
 * @param {string} carta
 * @returns {number} valor de la carta
 */

export const valorCarta = (carta) => {
  if (typeof carta !== "string")
    throw new Error("Carta obligatoria de tipo string");

  const valor = carta.substring(0, carta.length - 1);
  return isNaN(valor) ? (valor === "A" ? 11 : 10) : parseInt(valor);
};
