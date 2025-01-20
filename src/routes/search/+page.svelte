<script>
    import { goto } from '$app/navigation';
    let search;
    let suggestions = [];
    let isDropdownVisible = false;
    let error = null;
    let similarPokemons = [];

    async function fetchSuggestions(query) {
        if (query.length < 2) {
            suggestions = [];
            return;
        }
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1000`);
            const data = await response.json();
            suggestions = data.results.filter((pokemon) =>
                pokemon.name.toLowerCase().includes(query.toLowerCase())
            );

            // Fetch Pokémon details (including image) for each suggestion
            for (let suggestion of suggestions) {
                const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${suggestion.name}`);
                const pokemonData = await pokemonResponse.json();
                suggestion.image = pokemonData.sprites.front_default; // Store front image URL
            }

            isDropdownVisible = suggestions.length > 0;

            if (suggestions.length === 0) {
                await fetchSimilarPokemons(query);
            }
        } catch (e) {
            error = "Unable to fetch Pokémon list.";
        }
    }

    async function fetchSimilarPokemons(query) {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=150`);
            const data = await response.json();
            similarPokemons = data.results.filter(pokemon =>
                pokemon.name.toLowerCase().includes(query.toLowerCase())
            );
        } catch (e) {
            error = "Unable to fetch similar Pokémon.";
        }
    }

    function handleSelect(suggestion) {
        search = suggestion.name;
        isDropdownVisible = false;
        goto(`/search/${suggestion.name}`);
    }

    function fetchRandomPokemon() {
        const randomIndex = Math.floor(Math.random() * 1000) + 1;
        goto(`/search/${randomIndex}`);
    }

</script>

<div class="container">
    <h1>Pokémon Search</h1>
    <form on:submit|preventDefault={() => goto('/search/' + search)} class="search-form">
        <input
            type="text"
            placeholder="Search Pokémon"
            bind:value={search}
            on:input={() => fetchSuggestions(search)}
            class="search-input"
            autocomplete="off"
        />
        {#if error}
            <p class="error-message">{error}</p>
        {/if}
        {#if isDropdownVisible}
            <ul class="dropdown">
                {#each suggestions.slice(0, 5) as suggestion} 
                    <li on:click={() => handleSelect(suggestion)} class="dropdown-item">
                        <img src={suggestion.image} alt={suggestion.name} class="pokemon-image" />
                        {suggestion.name}
                    </li>
                {/each}
            </ul>
        {/if}
        {#if similarPokemons.length > 0}
            <div class="suggestions-wrapper">
                <h3>Did you mean?</h3>
                <ul>
                    {#each similarPokemons as suggestion}
                        <li on:click={() => handleSelect(suggestion)} class="suggestion-item">
                            {suggestion.name}
                        </li>
                    {/each}
                </ul>
            </div>
        {/if}
    </form>
    <button on:click={fetchRandomPokemon} class="random-button">Random Pokémon</button>
</div>

<style>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #f0f8ff00;
    border-radius: 10px;
    width: 100%;
    max-width: 800px;
    margin: auto;
}

h1 {
    color: #4caf50;
    font-family: 'Pokemon Solid', sans-serif;
    font-size: 40px;
    text-align: center;
    margin-bottom: 30px;
    text-shadow: 0 0 15px rgba(76, 175, 80, 0.7);
}

/* Input field with Pokémon theme */
.search-input {
    width: 100%;
    max-width: 600px;
    padding: 16px;
    font-size: 18px;
    border: 3px solid #4caf50; /* Green */
    border-radius: 50px;
    background-color: rgba(0, 0, 0, 0.1);
    color: #444;
    outline: none;
    position: relative;
    transition: all 0.4s ease-in-out;
    box-shadow: 0 0 15px rgba(76, 175, 80, 0.7);
}

.search-input::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(76, 175, 80, 0.3), rgba(0, 0, 0, 0.7));
    animation: pulse 3s infinite ease-in-out;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    z-index: -1;
}

.search-input:focus {
    border-color: #ffeb3b; /* Yellow */
    box-shadow: 0 0 30px 5px rgba(255, 235, 59, 0.8);
    transform: scale(1.05);
    background-color: rgba(255, 255, 255, 0.1);
}

.search-input::placeholder {
    color: #444;
    font-style: italic;
    text-shadow: 0 0 8px rgba(255, 255, 255, 0.6);
}

/* Dropdown adjustments */
.dropdown {
    background: rgba(0, 0, 0, 0.8);
    list-style: none;
    position: absolute;
    width: 100%;
    max-width: 600px;
    margin-top: 10px;
    padding: 0;
    max-height: 250px;
    overflow-y: auto;
    z-index: 10;
    border-radius: 10px;
    box-shadow: 0 0 15px rgba(76, 175, 80, 0.6); /* Green */
}

.dropdown-item {
    padding: 12px 15px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    color: white;
    border-bottom: 1px solid #444;
    display: flex;
    align-items: center;
}

.dropdown-item:hover {
    background: #4caf50;
    transform: translateX(5px);
    box-shadow: 0 2px 15px rgba(76, 175, 80, 0.7);
}

.pokemon-image {
    width: 40px;
    height: 40px;
    margin-right: 10px;
    border-radius: 5px;
}

/* Suggestions wrapper (Did you mean?) */
.suggestions-wrapper {
    margin-top: 20px;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 8px;
}

.suggestions-wrapper h3 {
    font-size: 18px;
    color: #ffeb3b; /* Yellow */
    text-align: center;
    margin-bottom: 15px;
}

.suggestions-wrapper ul {
    list-style: none;
    padding: 0;
}

.suggestion-item {
    padding: 8px;
    cursor: pointer;
    font-size: 16px;
    transition: all 0.3s ease;
}

.suggestion-item:hover {
    background-color: #4caf50;
    color: #fff;
}

/* Random button */
.random-button {
    padding: 12px 24px;
    font-size: 16px;
    background-color: #ffeb3b; /* Yellow */
    color: black;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-top: 20px;
}

.random-button:hover {
    background-color: #ff9800; /* Orange */
}

/* Error message styling */
.error-message {
    color: #ff0000;
    font-size: 14px;
    text-align: center;
}

/* Animation for the search pulse effect */
@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
}
</style>
