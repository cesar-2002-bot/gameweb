import games from "./games.js";
import { addGame, removeGame } from "./games.js";

function handleFormSubmit() {
  console.log(games)
  const gameTitle = document.getElementById('name').value;
  const gameGenre = document.getElementById('description').value;
  const price = document.getElementById('price').value;
  const image = document.getElementById('image').value;
  const category = document.getElementById('category').value;

  const newGame = {
    title: gameTitle,
    genre: gameGenre,
    price: price,
    image: image,
    category: category
  };

  console.log(newGame);
  console.log(games);
}