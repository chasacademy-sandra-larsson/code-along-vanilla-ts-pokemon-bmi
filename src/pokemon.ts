
// Endpoint: `https://pokeapi.co/api/v2/pokemon/${pokemonName}`

/* FORMEL FÖR BMI. Tydligen är vikten i hectograms och höjden i decimeters för Pokemons :-)
const weightInKg = pokemon.weight / 10;
const heightInM = pokemon.height / 10;
const bmi = weightInKg / (heightInM * heightInM);
*/

let pokemonName: string = "pikachu";


const form = document.getElementById("form") as HTMLFormElement;
const input = document.getElementById("pokemon") as HTMLInputElement;


// Anger en typ flr objektet pokemon
type Pokemon = {
    name: string,
    height: number, 
    weight: number
}


// Funktionen hämtar pokemon från API:et
async function getPokemon(name: string): Promise<void> {

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const result = await response.json(); 
        
        // Skapar ett objekt med de värden som vi behöver - obs! inga validerade värden
        const pokemon: Pokemon = {
            name: result.name,
            height: result.height,
            weight: result.weight
        }
        
        // Skickar objektet till funktionen som räknar ut BMI
        calculatePokemonBMI(pokemon); 

    } catch (error) {
        console.error(error)
    }

}

// När formuläret skickas så hämtas pokemon
form.addEventListener("submit", (event) => {
    event.preventDefault();
    pokemonName = input.value;
    getPokemon(pokemonName);
    
});

// Funktionen räknar ut BMI och skriver ut det på sidan
function calculatePokemonBMI(pokemon: Pokemon): void {
    
    const pokemon_name = document.querySelector(".pokemon_name") as HTMLParagraphElement;
    const pokemon_bmi = document.querySelector(".pokemon_bmi") as HTMLParagraphElement;

    console.log(pokemon);

    const weightInKg = pokemon.weight / 10;
    const heightInM = pokemon.height / 10;
    const bmi = weightInKg / (heightInM * heightInM);

    console.log(bmi);
    pokemon_name.innerHTML = pokemon.name;
    pokemon_bmi.innerHTML = bmi.toFixed(2);
    
}


