<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>
<div class="container">
    {#await data}
        <p class="loading">Loading Pokemon...</p>
    {:then pokemon}
        <div class="pokemon-card">
            <div class="pokemon-images">
                <h1 class="pokemon-name">{pokemon.response.name}</h1>
                {#each Object.entries(pokemon.response.sprites) as sprites}
                    {#if typeof sprites[1] == "string"}
                        <img src={sprites[1]} alt="{pokemon.response.name} sprite" class="pokemon-image" />
                    {/if}
                {/each}
            </div>

            <div class="pokemon-info">
                <h2 class="info-title">Pokémon Information</h2>
                <div class="info-item">
                    <h3>Weight</h3>
                    <p>{pokemon.response.weight} kg</p>
                </div>
                <div class="info-item">
                    <h3>Height</h3>
                    <p>{pokemon.response.height} m</p>
                </div>
                <div class="info-item">
                    <h3>Type(s)</h3>
                    <ul>
                        {#each pokemon.response.types as type}
                            <li>{type.type.name}</li>
                        {/each}
                    </ul>
                </div>
                <div class="info-item">
                    <h3>Abilities</h3>
                    <ul>
                        {#each pokemon.response.abilities as ability}
                            <li>{ability.ability.name}</li>
                        {/each}
                    </ul>
                </div>
                <div class="info-item">
                    <h3>Base Stats</h3>
                    <ul>
                        {#each pokemon.response.stats as stat}
                            <li>{stat.stat.name}: {stat.base_stat}</li>
                        {/each}
                    </ul>
                </div>
            </div>
        </div>
    {/await}
</div>

<style>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 50px;
    }

    .pokemon-card {
        display: flex;
        flex-wrap: wrap;
        background-color: rgba(0, 0, 0, 0.8);
        border-radius: 30px;
        box-shadow: 0 12px 50px rgba(0, 0, 0, 0.5);
        width: 90%;
        max-width: 1200px;
        padding: 30px;
        gap: 40px;
        transition: all 0.5s ease-out;
        /*rotarad bakgrund*/
        transform: perspective(800px) rotateY(7deg);
        position: relative;
        overflow: hidden;
    }

    .pokemon-card:hover {
        /*rotarad bakgrund*/
        transform: perspective(800px) rotateY(2deg);
    }

    .pokemon-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: scaleX(0);
    transform-origin: bottom left;
    transition: transform 0.6s ease-out;
    z-index: 0;
}

.pokemon-card:hover::before {
    transform: scaleX(1);
}

    .pokemon-images {
        flex: 1;
        position: relative;
        text-align: center;
    }

    .pokemon-name {
        font-size: 3.5rem;
        color: #fff;
        font-weight: 600;
        text-transform: capitalize;
        letter-spacing: 3px;
        text-shadow: 3px 3px 15px rgba(0, 0, 0, 0.5);
        margin-bottom: 20px;
        display: inline-block;
        animation: bounce 0.5s ease infinite;
    }

    .pokemon-image {
        max-width: 220px;
        margin: 20px;
        border-radius: 20px;
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.6);
        transition: transform 0.3s ease, box-shadow 0.3s ease, filter 0.3s ease;
        object-fit: cover;
        clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        background-color: #5858581b;
    }

    .pokemon-image:hover {
        transform: scale(1.1) rotate(11deg);
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.8);
        filter: brightness(1.2);
        cursor: pointer;
    }

    .pokemon-info {
        flex: 1;
        padding: 25px;
        border-radius: 20px;
        box-shadow: 0 6px 30px rgba(0, 0, 0, 0.4);
        max-height: 600px;
        overflow-y: auto;
        background: rgba(104, 101, 101, 0.2);
        backdrop-filter: blur(10px);
    }

    .info-title {
        font-size: 2.5rem;
        font-weight: 700;
        color: #ff6b81;
        margin-bottom: 25px;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 2px;
    }

    .info-item {
        margin-bottom: 20px;
    }

    .info-item h3 {
        font-size: 1.4rem;
        color: #ff6b81;
        margin-bottom: 10px;
    }

    .info-item p,
    .info-item ul li {
        font-size: 1.2rem;
        color: #ccc;
    }

    .info-item ul {
        padding-left: 20px;
        list-style-type: square;
    }

    .info-item ul li {
        margin-bottom: 8px;
    }

    .info-item ul li:hover {
        color: #f5a623;
        cursor: pointer;
    }

    .loading {
        font-size: 1.6rem;
        color: #f5a623;
        text-align: center;
        animation: loadingAnimation 1.5s infinite alternate;
    }

    @keyframes loadingAnimation {
        0% {
            opacity: 0.6;
        }
        100% {
            opacity: 1;
        }
    }

    @media (max-width: 768px) {
        .pokemon-card {
            flex-direction: column;
            gap: 30px;
        }

        .pokemon-images,
        .pokemon-info {
            flex: 1;
        }

        .pokemon-name {
            font-size: 2.8rem;
        }

        .pokemon-image {
            max-width: 180px;
        }

        .info-title {
            font-size: 2rem;
        }

        .info-item h3 {
            font-size: 1.3rem;
        }

        .info-item p,
        .info-item ul li {
            font-size: 1rem;
        }
    }
</style>