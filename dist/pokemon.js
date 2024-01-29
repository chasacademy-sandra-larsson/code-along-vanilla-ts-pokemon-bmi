"use strict";
// Endpoint: `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/* FORMEL FÖR BMI. Tydligen är vikten i hectograms och höjden i decimeters för Pokemons :-)
const weightInKg = pokemon.weight / 10;
const heightInM = pokemon.height / 10;
const bmi = weightInKg / (heightInM * heightInM);
*/
let pokemonName = "pikachu";
const form = document.getElementById("form");
const input = document.getElementById("pokemon");
// Funktionen hämtar pokemon från API:et
function getPokemon(name) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
            const result = yield response.json();
            // Skapar ett objekt med de värden som vi behöver - obs! inga validerade värden
            const pokemon = {
                name: result.name,
                height: result.height,
                weight: result.weight
            };
            // Skickar objektet till funktionen som räknar ut BMI
            calculatePokemonBMI(pokemon);
        }
        catch (error) {
            console.error(error);
        }
    });
}
// När formuläret skickas så hämtas pokemon
form.addEventListener("submit", (event) => {
    event.preventDefault();
    pokemonName = input.value;
    getPokemon(pokemonName);
});
// Funktionen räknar ut BMI och skriver ut det på sidan
function calculatePokemonBMI(pokemon) {
    const pokemon_name = document.querySelector(".pokemon_name");
    const pokemon_bmi = document.querySelector(".pokemon_bmi");
    console.log(pokemon);
    const weightInKg = pokemon.weight / 10;
    const heightInM = pokemon.height / 10;
    const bmi = weightInKg / (heightInM * heightInM);
    console.log(bmi);
    pokemon_name.innerHTML = pokemon.name;
    pokemon_bmi.innerHTML = bmi.toFixed(2);
}
