<script>
    import { onMount } from 'svelte';
  
    let draggingLetter = null;
    let mouseX = 0;
    let mouseY = 0;
    let velocityY = 0;
    const gravity = 0.5;
    const friction = 0.98;
  
    const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
  
    let isDragging = false;
    let username = ''; // This will store the current username
  
    onMount(() => {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    });
  
    function handleMouseMove(e) {
      if (draggingLetter && isDragging) {
        mouseX = e.pageX;
        mouseY = e.pageY;
        updateDraggingLetterPosition();
      }
    }
  
    function fallingLetter(letter) {
      velocityY = 0; // Reset the velocity
  
      const fallInterval = setInterval(() => {
        velocityY += gravity;
        const currentTop = parseFloat(letter.style.top || 0);
        const newTop = currentTop + velocityY;
  
        // Apply the new position to the letter
        letter.style.top = `${newTop}px`;
  
        // Apply friction to slow down the falling
        velocityY *= friction;
  
        // Stop falling when the letter reaches a certain point or velocity is small enough
        if (newTop > window.innerHeight - 100 || Math.abs(velocityY) < 0.1) {
          clearInterval(fallInterval);
          letter.style.top = `${window.innerHeight - 100}px`; // Ensure the letter doesn't fall off screen
  
          // Check if the letter is inside the tier-box
          if (isInsideTierBox(letter)) {
            // Add letter to the username if it's inside the tier-box
            username += letter.textContent;
          }
        }
      }, 16); // Roughly 60 frames per second
    }
  
    function handleMouseUp() {
      if (isDragging) {
        isDragging = false;
        draggingLetter.style.left = `${mouseX - 20}px`;
        draggingLetter.style.top = `${mouseY - 20}px`;
        fallingLetter(draggingLetter);
      }
    }
  
    function handleLetterClick(letter) {
      if (isDragging) {
        isDragging = false;
        draggingLetter.style.left = `${mouseX - 20}px`;
        draggingLetter.style.top = `${mouseY - 20}px`;
      } else {
        draggingLetter = createDraggingLetter(letter);
        document.body.appendChild(draggingLetter);
        updateDraggingLetterPosition();
        isDragging = true;
      }
    }
  
    function createDraggingLetter(letter) {
      const div = document.createElement('div');
      div.textContent = letter;
      div.style.position = 'absolute';
      div.style.fontSize = '24px';
      div.style.fontWeight = 'bold';
      div.style.pointerEvents = 'none';
      div.style.zIndex = '9999';
      div.style.userSelect = 'none';
  
      div.addEventListener('click', handleLetterClick.bind(null, div.textContent));
  
      return div;
    }
  
    function updateDraggingLetterPosition() {
      if (draggingLetter && isDragging) {
        draggingLetter.style.left = `${mouseX - 20}px`;
        draggingLetter.style.top = `${mouseY - 20}px`;
      }
    }
  
    // Check if the letter is inside the tier-box
    function isInsideTierBox(letter) {
      const tierBox = document.querySelector('.tier-box');
      const tierBoxRect = tierBox.getBoundingClientRect();
      const letterRect = letter.getBoundingClientRect();
  
      return (
        letterRect.top >= tierBoxRect.top &&
        letterRect.left >= tierBoxRect.left &&
        letterRect.bottom <= tierBoxRect.bottom &&
        letterRect.right <= tierBoxRect.right
      );
    }
  </script>
    
    <!-- Display the username -->
    <div class="username-display">
        <p><strong>Username:</strong> {username}</p>
      </div>
  <div class="page-wrapper">
    <div class="tier-box">
      <div class="tier-list">
        <div class="tier" style="background-color: #FF6B6B">
          <span>S</span>
        </div>
        <div class="tier" style="background-color: #FFA36C">
          <span>A</span>
        </div>
        <div class="tier" style="background-color: #FFD36E">
          <span>B</span>
        </div>
        <div class="tier" style="background-color: #FFFF6B">
          <span>C</span>
        </div>
        <div class="tier" style="background-color: #B9FF6B">
          <span>D</span>
        </div>
        <div class="tier" style="background-color: #A76BFF">
          <span>F</span>
        </div>
      </div>
    </div>
  
    <div class="right-panel">
      <div class="alphabet-list">
        {#each alphabet as letter}
          <div class="alphabet-box" on:click={() => handleLetterClick(letter)}>{letter}</div>
        {/each}
      </div>
    </div>

  </div>
  
  <style>
    .page-wrapper {
      display: flex;
      align-items: flex-start;
      padding-top: 50px;
      position: relative;
      margin-left: 20px;
    }
  
    .tier-box {
      background-color: #1a1a1a;
      border-left: 5px solid white;
      border-right: 5px solid white;
      border-bottom: 5px solid white;
      margin-top: 375px;
    }
  
    .tier-list {
      display: flex;
      flex-direction: column;
      width: 600px;
    }
  
    .tier {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      height: 60px;
      padding-left: 10px;
      color: black;
      font-weight: bold;
      font-size: 1.5rem;
      border-bottom: 2px solid #000;
    }
  
    .tier:last-child {
      border: none;
    }
  
    .alphabet-list {
      display: grid;
      grid-template-columns: repeat(2, 40px);
      gap: 10px;
      margin-top: 75px;
      margin-left: 750px;
    }
  
    .alphabet-box {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      background-color: #333;
      color: white;
      font-weight: bold;
      border-radius: 8px;
      cursor: pointer;
    }
  
    .username-display {
        display: flex;
      margin-top: 20px;
      font-size: 1.5rem;
      font-weight: bold;
      margin-right: 150px;
    }
  </style>
  