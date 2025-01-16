export interface Pokemon {
  name: string;
  image: string;
  type: string;
  hp: number;
  moves: Array<String>;
  weaknesses: Array<String>;
}

export const pokemons: Array<Pokemon> = [
  {
    name: "Charmander",
    image: "@/assets/images/charmander.png",
    type: "Fire",
    hp: 39,
    moves: ["Scratch", "Ember", "Growl", "Leer"],
    weaknesses: ["Water", "Rock"],
  },
  {
    name: "Charmander",
    image: "@/assets/images/pikachu.png",
    type: "Fire",
    hp: 39,
    moves: ["Scratch", "Ember", "Growl", "Leer"],
    weaknesses: ["Water", "Rock"],
  },
  {
    name: "Squirtle",
    image: "@/assets/images/squirtle.png",
    type: "Water",
    hp: 44,
    moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
    weaknesses: ["Electric", "Grass"],
  },
  {
    name: "Bulbasaur",
    image: "@/assets/bulbasaur.png",
    type: "Grass",
    hp: 45,
    moves: ["Tackle", "Vine Whip", "Growl", "Leech Seed"],
    weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
  },
  {
    name: "Pikachu",
    image: "@/assets/pikachu.png",
    type: "Electric",
    hp: 35,
    moves: ["Quick Attack", "Thunderbolt", "Tail Whip", "Growl"],
    weaknesses: ["Ground"],
  },
];
