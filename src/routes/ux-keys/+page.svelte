<script>
    import { onMount } from 'svelte';
  
    let gridSize = 11;
    let letters = [];
  
    function handleKeyPress(event) {
      const key = event.key.toUpperCase();
      const randomIndex = Math.floor(Math.random() * letters.length);
  
      letters[randomIndex] = key;
  
      setTimeout(() => {
        letters[randomIndex] = "";
      }, 100000); //1000 = 1s
    }
  
    function initializeGrid() {
      letters = Array.from({ length: gridSize * gridSize }, () => "");
    }
  
    onMount(() => {
      initializeGrid();
      window.addEventListener('keydown', handleKeyPress);
      
      return () => window.removeEventListener('keydown', handleKeyPress);
    });
  </script>
  
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      background-color: black;
    }
  
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, 100px);
      gap: 0;
      width: 100vw;
      height: 100vh;
      overflow: hidden;
      position: absolute;
    }
  
    .cell {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100px;
      height: 100px;
      font-size: 40px;
      font-weight: bold;
      color: #ffffff;
      background-color: transparent;
      text-shadow: 0 0 5px rgba(255, 255, 255, 0.6), 0 0 10px rgba(255, 255, 255, 0.4), 0 0 20px rgba(255, 255, 255, 0.2); /* Glowing effect */
    }
  </style>
  
  <div class="grid">
    {#each letters as letter, index}
      <div class="cell" key={index}>
        {letter}
      </div>
    {/each}
  </div>