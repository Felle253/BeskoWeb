<script>
    import { goto } from '$app/navigation';
    
    let search
</script>

<form on:submit|preventDefault={() => goto('/search/' + search)}>
    <input type="text" placeholder="Sök upp en pokemon" bind:value={search} class="search-input"/>
  </form>
    
<main>
  <slot></slot>
</main>
    
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

  .search-input {
    width: 60%;
    padding: 20px;
    font-size: 18px;
    border: 3px solid #ff007f;
    border-radius: 50px;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    outline: none;
    position: relative;
    overflow: hidden;
    transition: all 0.4s ease-in-out;
    box-shadow: 0 0 15px rgba(255, 0, 127, 0.7);
  }

  .search-input::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255, 0, 127, 0.3), rgba(0, 0, 0, 0.7));
    animation: pulse 3s infinite ease-in-out;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    z-index: -1;
  }

  .search-input:focus {
    border-color: #ff7f50;
    box-shadow: 0 0 30px 5px rgba(255, 127, 80, 0.8);
    transform: scale(1.05);
    background-color: rgba(255, 255, 255, 0.1);
  }

  .search-input::placeholder {
    color: #fff;
    font-style: italic;
    text-shadow: 0 0 8px rgba(255, 255, 255, 0.6);
  }

  .search-input:focus::placeholder {
    color: #ff7f50;
    text-shadow: 0 0 12px rgba(255, 127, 80, 0.7);
  }

  .search-input:hover {
    transform: scale(1.03);
    background-color: rgba(255, 255, 255, 0.15);
  }

  form {
    margin-top: 150px;
    margin-bottom: 5px;
    display: flex;
    justify-content: center;
  }
</style>