import { browser } from "$app/environment";
import { writable } from "svelte/store";


/* initialize the users to "" if the users has not already been stored */
const pokemons = browser ? window?.sessionStorage.getItem('pokemons') ?? "" : ""

export const pokemons_store = writable(pokemons)

if (browser) {
        /* https://svelte.dev/tutorial/auto-subscriptions */
        pokemons_store.subscribe((value) => {
                /* on changes to the users_store, update the sessionStorage in the browser. */
                window?.sessionStorage.setItem('pokemons', value);
        })
}