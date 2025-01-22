<script>
    import { goto } from '$app/navigation';
    import { onMount } from "svelte";
    import { pokemons_store } from "$lib/pokemons";
    import { base } from '$app/paths';

    let search
    let pokemons = []
    $: pokemons = $pokemons_store.length > 2 ? JSON.parse($pokemons_store) : ""


      function openPokemonPage(pokemonName) {
        goto(base+ `/search/ + ${pokemonName}`); // Navigate to the page for the clicked Pokémon
      }

      function clearRecentPokemons() {
        sessionStorage.setItem("pokemons","");
        pokemons = [];
      }
</script>


<main>
  <slot></slot>
</main>
<div class="recent-views">
  <div class="recent-pokemon">
        {#each pokemons as p}
        <a href="/search/{p.name}">
          <img src="{Object.entries(p.sprites)[0][1]}" alt=" sprite" class="pokemon-image" /></a>
      {/each}    
      </div>
      
  </div>
  
  <button class="clear-button" on:click={clearRecentPokemons}>
    Clear Recent Pokémon
</button>



<div class="backdrop"></div>

<style>

  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-image: url('https://imageio.forbes.com/specials-images/imageserve/604202ff091b6539cb90fcbc/The-backs-of-a-number-of-Pok-mon-cards-/960x0.jpg?format=jpg&width=960');
    background-size: cover;
    z-index: -1;
    filter: blur(5px);
  }

  main{
    position: relative;
    top:150px;
  }
  .recent-views {
        display: flex;
        justify-content: center;
        gap: 1em;
        margin-left: auto;
        margin-right: auto;
        flex-direction: row;
        display: flex;
        max-width: fit-content;
        margin-left: auto;
        margin-right: auto;
        margin-top: 125px;
        border-radius: 20px;
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.814);
        transition: transform 0.3s ease, box-shadow 0.3s ease, filter 0.3s ease;
        object-fit: cover;
        clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        background-color: #5858581b;
    }

    .recent-pokemon {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        padding: 50px;

    }

    .pokemon-image {
        width: 100px;
        height: 100px;
        object-fit: cover;
        cursor: pointer;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
        transition: transform 0.3s ease;
        padding: 10px;

    }

    .pokemon-image:hover {
        transform: scale(1.1);
    }

    .clear-button {
        padding: 10px 20px;
        font-size: 16px;
        background-color: #ff007f;
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        box-shadow: 0 5px 15px rgba(255, 0, 127, 0.5);
        transition: background-color 0.3s ease, transform 0.2s ease;
        margin-left: auto;
        margin-right: auto;
        justify-content: center;
        display: flex;
    }

    .clear-button:hover {
        background-color: #ff4d8d;
        transform: scale(1.05);
    }

    .clear-button:active {
        transform: scale(1);
    }

</style>