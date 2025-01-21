import { browser } from "$app/environment";
import { writable } from "svelte/store";

/* Initialize the pokemons_store to an empty array if no data is stored in sessionStorage */
const pokemons = browser 
  ? JSON.parse(window?.sessionStorage.getItem('pokemons') ?? "[]") // Default to empty array if no data
  : [];

export const pokemons_store = writable(pokemons);

if (browser) {
    /* Subscribe to changes and update sessionStorage */
    pokemons_store.subscribe((value) => {
        window?.sessionStorage.setItem('pokemons', JSON.stringify(value)); // Store as JSON string
    });
}
