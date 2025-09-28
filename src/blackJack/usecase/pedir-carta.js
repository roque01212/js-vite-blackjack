/**
 *
 * @param {Array<string>} deck es un arreglo de string
 * @returns {string} retorna una carta del deck
 */
export const pedirCarta = (deck) => {
  if (!deck || deck.length === 0)
    throw new Error("deck obligatorio como un array de string");

  return deck.pop();
};
