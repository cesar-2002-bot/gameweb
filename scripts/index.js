import games from "./games.js";
console.log(games);

document.getElementById('games').innerHTML = games.map(game => `<li>${game.title}</li>`).join('');