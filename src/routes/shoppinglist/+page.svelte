<script>
  import { fade } from 'svelte/transition';

  let items = [
  ];
  let newItem = "";
  let newPriority = 3;

  function addItem() {
    if (newItem.trim() !== "") {
      items = [...items, { name: newItem, purchased: false, priority: newPriority }];
      newItem = "";
      newPriority = 3;
    } else {
      alert("Skriv in en vara!");
    }
  }

  function removeItem(index) {
    items = items.filter((item, i) => i !== index);
  }

  function togglePurchased(index) {
    items[index].purchased = !items[index].purchased;
  }

  $: items.sort((a, b) => a.priority - b.priority);
  
  function setPriority(priority) {
    newPriority = priority;
  }

  function getPriorityColor(priority) {
    if (priority === 1) return 'green';
    if (priority === 2) return 'yellow';
    return 'red';
  }
</script>

<main>
<div class="container">
  <h1>Shoppinglista</h1>

  <div class="input-container">
    <div class="priority-balls">
      <div
        class="priority-ball green"
        on:click={() => setPriority(1)}
        class:active={newPriority === 1}
      
      ><p>hög</p></div>
      <div
        class="priority-ball yellow"
        on:click={() => setPriority(2)}
        class:active={newPriority === 2}
      ><p>mid</p></div>
      <div
        class="priority-ball red"
        on:click={() => setPriority(3)}
        class:active={newPriority === 3}
      ><p>låg</p></div>
      
    </div>
    
    <input type="text" bind:value={newItem} placeholder="Lägg till vara" />
    <button on:click={addItem}>Lägg till</button>
  </div>

  <div class="categories_container">
    <section>
      <h2>Varor att köpa</h2>
      <ul>
        {#each items as item, index}
          {#if !item.purchased}
            <li transition:fade>
              <div class="priority-ball {getPriorityColor(item.priority)}"></div>
              
              <button class="Buy" on:click={() => togglePurchased(index)}>{item.name}</button>
              <button class="X_Button" on:click={() => removeItem(index)}>X</button>
            </li>
          {/if}
        {/each}
      </ul>
    </section>

    <section>
      <h2>Köpta varor</h2>
      <ul>
        {#each items as item, index}
          {#if item.purchased}
            <li transition:fade>
              <div class="priority-ball {getPriorityColor(item.priority)}"></div>
              
              <button class="Buy" on:click={() => togglePurchased(index)}>{item.name}</button>
              <button class="X_Button" on:click={() => removeItem(index)}>X</button>
            </li>
          {/if}
        {/each}
      </ul>
    </section>
  </div>
</div>
</main>

<style>
  main {
	  font-family: 'Arial', sans-serif;
	  margin: 0;
	  padding: 0;
	  color: white;
	   background: url('https://www.myjewishlearning.com/wp-content/uploads/2005/12/pareve-christmas.jpg') no-repeat center center fixed;
	  background-size: cover;
	   overflow-x: hidden;
		width: 100vw;
    height: 100vh;

	}

  .container {

    width: 70vw;
    height: 80vh;
    border-radius: 25px;
    display: grid;
    grid-template-rows: 1fr 2fr 9fr 1fr;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateY(-50%) translateX(-50%);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.5);
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.16);
  }

  h1 {
    color: white;
    border-radius: 15px;
    text-align: center;
    padding: 10px;
    font-size: 2rem;
  }

  .categories_container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    height: 100%;
    overflow-y: scroll;
  }

  .categories_container section {
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 10px;
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 10px;
  }

  .categories_container section h2 {
    background-color: rgba(0, 128, 0, 0.7); 
    color: white;
    padding: 10px;
    text-align: center;
    margin: 10px 0;
    border-radius: 5px;
  }

  .categories_container section ul {
    list-style-type: none;
    padding: 0;
  }

  .categories_container section ul li {
    margin: 15px 0;
    background-color: #ff4d4d;
    padding: 12px;
    border-radius: 8px;
    border-bottom: 1px solid white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    transition: transform 0.2s;
  }

  .categories_container section ul li:hover {
    transform: scale(1.05);
    background-color: #e60000;
  }

  .priority-ball {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    margin-right: 15px;
    position: relative;
    display: inline-block;
    text-align: center;
    overflow: hidden;
  }

  .priority-ball p{
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: opacity 0.5s ease;
    display: inline;
  }

  .priority-ball:hover p{
    opacity: 1;
  }

  .priority-ball.green {
    background-color: #28a745;
    transition: width 0.3s, height 0.3s;
  }

  .priority-ball.green:hover {
    width: 50px;
    height: 50px;
  }

  .priority-ball.yellow:hover {
    width: 50px;
    height: 50px;
  }

  .priority-ball.red:hover {
    width: 50px;
    height: 50px;
  }

  .priority-ball.yellow {
    background-color: #ffc107;
    transition: width 0.3s, height 0.3s;
  }

  .priority-ball.red {
    background-color: #dc3545;
    transition: width 0.3s, height 0.3s;
  }

  .priority-ball.active {
    border: 3px solid black;
  }

  .input-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
  }

  .priority-balls {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
  }

  .priority-ball:hover {
    opacity: 0.8;
    cursor: pointer;
  }

  .X_Button {
    position: absolute;
    right: 0;
    margin-right: 10px;
    color: #fff;
    font-weight: bold;
    background-color: transparent;
    border: none;
    transition: color 0.3s;
  }

  .Buy {
    flex: 1;
    text-align: left;
    background-color: transparent;
    border: none;
    font-size: 1rem;
    color: white;
    transition: color 0.3s;
  }

  .Buy:hover {
    color: #ffd700;
  }

  .X_Button:hover {
    color: red;
  }

  input {
    margin-bottom: 12px;
    padding: 8px;
    font-size: 1rem;
    border-radius: 8px;
    border: 1px solid #ccc;
    color: black;
  }

  button {
    background-color: #28a745;
    color: white;
    padding: 8px 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
</style>