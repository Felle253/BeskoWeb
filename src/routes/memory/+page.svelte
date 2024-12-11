<script>
    let cards = []
    let back_image= "images/MemoryBack.png";
    let images = [
    "https://cdn-images.dzcdn.net/images/cover/93b6e84530cbf021391ea1519c7ad03c/0x1900-000000-80-0-0.jpg",
    "https://cdn-images.dzcdn.net/images/cover/e3fead810a428fa45b66dab73d1eb7fd/0x1900-000000-80-0-0.jpg",
    "https://toybook.com/wp-content/uploads/sites/4/2024/10/RUBIES_SKIBIDI-TOILET-INFLATABLE-COSTUME_TB_2024.webp",
    "https://store-images.s-microsoft.com/image/apps.40513.13919024411234221.e21107c9-29b4-48a3-bfe5-c02d5d7be385.64710d95-81fe-49b2-81af-12eefea25749",
    "https://i.ytimg.com/vi/PEDV27g-69s/sddefault.jpg?v=6646a03b",
    "https://media.wired.com/photos/6663803ca7e48c1e5e72cded/1:1/w_1267,h_1267,c_limit/culture_skibidi_toilet_youtube_genz.jpg"
  ]
    
    let redPoints = 0
    let bluePoints= 0
    let blueTurn = false
    let flipCount = 0
    let flippedCards = [];
    let gameOver = false;
    let winner = "";

    for (let i= 0; i<12;i++){
      cards.push({
        image: images[i%6],
        flipped: false,
        matched: false
    })}

    cards.sort(() => Math.random() - 0.5);

    function flipCard(card) {
      if (card.flipped || card.matched || flipCount == 2) {
        return;
    }

    card.flipped = true;
    flipCount++;
    flippedCards.push(card);
    cards = cards

    if (flipCount === 2) {
      checkForMatch();
    }
  }

  function checkForMatch() {
    const [card1, card2] = flippedCards;
    
    if (flippedCards.length === 2){
      if (card1.image === card2.image) {
        if (blueTurn) {
          bluePoints++;
        } else {
          redPoints++;
        }
        card1.matched = true;
        card2.matched = true;
        cards = cards
        flipCount = 0
        
      } 
        setTimeout(() => {
          cards.forEach((card) => {
            card.flipped = card.matched;
          });
          flipCount = 0;
          cards = cards;
        },1000);
        blueTurn = !blueTurn;
      }
      flippedCards= []

      checkGameOver();

    }
  
  function checkGameOver() {
        const allMatched = cards.every(card => card.matched);
        if (allMatched) {
            gameOver = true;
            winner = bluePoints > redPoints ? "Blue" : (redPoints > bluePoints ? "Red" : "No one (It's a tie)");
            setTimeout(() => {
            }, 500);
        }
    }

    function restartGame(){
      cards.forEach(card => {
            card.flipped = false;
            card.matched = false;
        });
        redPoints = 0;
        bluePoints = 0;
        blueTurn = false;
        gameOver = false;
        winner = "";
        cards = cards;

        cards.sort(() => Math.random() - 0.5);

    }
  </script>
  
  <style>

    
  aside{
    width: 100px;
    height: 100px;
    position: fixed;
    bottom: 10px;
    right: 10px;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1
  }

  .card:not(.flipped):hover {
  transform: scale(1.1);
}


  p{
    font-size: 30px;
  }

  aside.blue {
    background-color: blue;
    right: auto;
    left: 10px;
  }
                          
h1 {
  text-align: center;
  margin-top: 75px;
}

main {
  display: grid;
  grid-template-columns: repeat(4, 100px);
  grid-template-rows: repeat(3, 100px);
  gap: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 125px;
}

.card {
  width: 100%;
  height: 100%;
  border: 1px solid black;
  box-sizing: border-box;
  position: relative;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  transition: transform .5s;
}

.card.flipped {
  transform: rotateY(180deg);
}

.front,
.back {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  backface-visibility: hidden;
}

.front{
  transform: rotateY(180deg)
}


.turn{
  box-shadow: 0 0 10px 10px yellowgreen;
  z-index: 0;
}

.restart-button {
        position: fixed;
        bottom: 10px;
        left: 675px;
        padding: 10px 20px;
        font-size: 18px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        justify-content: center;
    }

.restart-button:hover {
    background-color: #0056b3;
}

.game-over-message {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 20px;
    border-radius: 10px;
    font-size: 24px;
    display: none;
}

@media (min-height: 500px) {
  main {
    grid-template-columns: repeat(4, 100px);
    grid-template-rows: repeat(3, 100px);
  }
}

@media (max-height: 500px) {
  main {
    grid-template-columns: repeat(6, 100px);
    grid-template-rows: repeat(2, 100px);
  }
}

.game-over-message.show {
    display: block;
}

  </style>
  
  <h1>Memory</h1>
  
  <main>
    {#each cards as card, index (index)}
      <div class="card"class:flipped={card.flipped} on:click={() => flipCard(card)}>
        <img src={card.flipped ? card.image : back_image} class="front" alt="Card Front" />
        <img src={back_image} class="back" alt="Card Back" />
      </div>
    {/each}
  </main>

  <aside class="blue" >
    <p id="bluePoints">{bluePoints}</p>
  </aside>

  <aside >
    <p id="redPoints">{redPoints}</p>
</aside>

<aside class=turn class:blue={blueTurn}>

<button class="restart-button" on:click={restartGame}>Restart Game</button>

<div class="game-over-message {gameOver ? 'show' : ''}">
    {#if gameOver}
        <p>{winner} wins!</p>
    {/if}

</aside>