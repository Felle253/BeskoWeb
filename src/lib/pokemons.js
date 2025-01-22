import { browser } from "$app/environment";
import { writable } from "svelte/store";

// Initialize pokemons_store safely with an empty array if sessionStorage is empty
const pokemons = browser
  ? JSON.parse(window?.sessionStorage.getItem('pokemons') || "[]")  // Use an empty array if sessionStorage is empty or not available
  : [];

export const pokemons_store = writable(pokemons);

// Subscribe to changes and update sessionStorage
if (browser) {
  pokemons_store.subscribe((value) => {
    window?.sessionStorage.setItem('pokemons', JSON.stringify(value)); // Store as JSON string
  });
}