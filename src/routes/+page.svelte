
<!--Delar upp sidan i två delar-->
<main>
	<div>
  
	  <h1 class="name"> Bert Kalle har en mega balle! </h1>
	  <h2 class="item">Min favorit glass är nogger!!</h2>
	  <h3 id="number">Jag e dress to impress proffs på roblox</h3>

	  <p id="inspo">
		"The only way to learn a new programming language is by writing programs in it." - <strong>Dennis Ritchie</strong>, creator of the C programming language.
	</p>
	<p style="background-color:purple">
		"Every great developer you know got there by solving problems they were unqualified to solve until they actually did it." - <span>Patrick McKenzie, software engineer and entrepreneur</span>.
	</p>
  
	</div>
	  
<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
	<path fill="#FF0066" d="M29.5,-44C37.1,-41,41.4,-30.9,43.5,-21.3C45.7,-11.7,45.8,-2.5,46.6,8.2C47.5,19,49.1,31.5,43.9,38.7C38.7,45.9,26.6,47.8,14.3,53.8C1.9,59.9,-10.8,70,-18.4,66.2C-26,62.4,-28.6,44.7,-40.2,33.5C-51.8,22.4,-72.5,17.9,-75.7,9.6C-78.8,1.3,-64.3,-10.7,-56.1,-24.3C-47.8,-37.9,-45.8,-53,-37.5,-55.7C-29.2,-58.3,-14.6,-48.4,-1.8,-45.6C10.9,-42.7,21.9,-46.9,29.5,-44Z" transform=" translate(100,70)"  />
  </svg>

   	
  
  
  </main>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,192L0,288L84.7,288L84.7,64L169.4,64L169.4,32L254.1,32L254.1,32L338.8,32L338.8,128L423.5,128L423.5,128L508.2,128L508.2,160L592.9,160L592.9,192L677.6,192L677.6,32L762.4,32L762.4,192L847.1,192L847.1,256L931.8,256L931.8,32L1016.5,32L1016.5,288L1101.2,288L1101.2,224L1185.9,224L1185.9,288L1270.6,288L1270.6,192L1355.3,192L1355.3,32L1440,32L1440,320L1355.3,320L1355.3,320L1270.6,320L1270.6,320L1185.9,320L1185.9,320L1101.2,320L1101.2,320L1016.5,320L1016.5,320L931.8,320L931.8,320L847.1,320L847.1,320L762.4,320L762.4,320L677.6,320L677.6,320L592.9,320L592.9,320L508.2,320L508.2,320L423.5,320L423.5,320L338.8,320L338.8,320L254.1,320L254.1,320L169.4,320L169.4,320L84.7,320L84.7,320L0,320L0,320Z"></path></svg>
  
  <style>
	main{
	  /*Styling för att dela upp sidan i två delar. */
	  /*Vi kommer gå igenom detta i detalj senare*/
	  margin: auto;
	  width: 80vw;
	  height: 70vh;
	  display: grid;
	  grid-template-columns: repeat(2,50%);
	  overflow: hidden;
	}
	
h1{
    color:grey;
	background-color: lightblue;
}
h2{
    color: rgb(255, 165, 0);
}
h3{
    color: #3cb371;
    font-family: sans-serif;
    font-weight: bold;
}

.name{
    font-family:'Gill Sans';
    font-size: 35px;
}

.item{
    width: 1px;
    height: 100px;
}

#number{
    border: 1px solid black;
    padding: 10px;
}
#inspo{
    font-family: courier;
    font-size: 160%;
}
span{
    color: green;
}         

  /* Vi skiljer elementen med ett kommatecken(,) för att ge möjligheten till att ge flera element samma styling*/
  h1, h2, h3, p {
  display: block;
  /*Ger utrymme mellan element*/
  margin: 10px;
}
        
	div{
	  /*Styling för att centrera texten i behållaren*/
	  margin: auto;
	}
	</style>
  