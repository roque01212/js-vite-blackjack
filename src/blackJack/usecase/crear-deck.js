import _ from "underscore";

/**
 * Esta funcion crea un nuevo deck
 * @param {array<string>} tiposDeCartas Ejemplo ["C", "D", "H", "S"]
 * @param {array<string>} tiposEspeciales Ejemplo ["A", "J", "Q", "K"]
 * @returns {array<string>} retorna un nuevo deck de cartas
 *
 */
export const crearDeck = (tiposDeCartas, tiposEspeciales) => {
  if (!tiposDeCartas || tiposDeCartas.length === 0)
    throw new Error("tipos de carta obligatorio como un arreglo de string");
  if (!tiposEspeciales || tiposEspeciales.length === 0)
    throw new Error(
      "tipos de carta especiales obligatorio como un arreglo de string"
    );

  const deck = [];
  for (let i = 2; i <= 10; i++) {
    for (let tipo of tiposDeCartas) {
      deck.push(`${i}${tipo}`);
    }
  }
  for (let j in tiposEspeciales) {
    for (let tipo of tiposDeCartas) {
      deck.push(`${tiposEspeciales[j]}${tipo}`);
    }
  }
  console.log(deck);
  return _.shuffle(deck);
};

// export default crearDeck;
