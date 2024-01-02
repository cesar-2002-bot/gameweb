// games.js
const games = [
  { id: 1, title: 'Super mario', genre: 'platformer' },
  { id: 2, title: 'Game 2', genre: 'Adventure' },
  { id: 3, title: 'Game 3', genre: 'RPG' },
];

function addGame(game) {
  games.push(game);
}

function removeGame(game) {
  // here use the indexOf method to find the index of the game we want to remove
  games.splice(games.indexOf(game), 1);
}

export { addGame, removeGame };
export default games;
