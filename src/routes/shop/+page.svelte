<script>

    let backgroundImage = "https://static.vecteezy.com/ti/gratis-vektor/p1/4497924-svart-lyx-bakgrund-vector.jpg";
    let imageFrame = "images/frame.png";
    let cartBackground = "https://i.pinimg.com/736x/e8/a1/b0/e8a1b035e0d456aae3537591943912ec.jpg";

    let products = [
        { id: 1, image: "https://ichef.bbci.co.uk/images/ic/480xn/p0jkdrqs.jpg.webp", name: "AI Art 1", price: "4999kr", description: "A sad cat. Drawn by Emily Harper." },
        { id: 2, image: "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://media.easy-peasy.ai/da1cd3cd-49cb-4502-bf56-1bddd1349785/9a068d5b-d2ed-478a-b5ff-2a532eac9577.png", name: "AI Art 2", price: "8999kr", description: "This canine has been mewing for an extraordinary duration of 19 years. Drawn by Liam Bennet." },
        { id: 3, image: "https://easy-peasy.ai/_next/image?url=https%3A%2F%2Fmedia.easy-peasy.ai%2F0b478ea5-d876-485c-a538-3e9f3101557a%2Fb0d7b82a-2068-45bd-bc86-0efe3e466838.png&w=640&q=75", name: "AI Art 3", price: "14999kr", description: "A feline aspiring to pursue a career in surgery, demonstrating an unconventional ambition. Drawn by Olivia Murphy." },
        { id: 4, image: "https://masterbundles.com/wp-content/uploads/edd/2023/02/ai-generated-dog-832.png", name: "AI Art 4", price: "11999kr", description: "An exemplary canine, showcasing ideal traits of behavior and appearance often sought after in breed standards. Drawn by Noah Carter." },
        { id: 5, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPOWM7J5SmQ1B-teGRYUigwgHRQrIOAvxJWg&s", name: "AI Art 5", price: "7999kr", description: "A jubilant dog situated within an abstract, dreamlike landscape, presenting an imaginative contrast to its joyful demeanor. Drawn by Ava Johnson." },
        { id: 6, image: "https://img-cdn.pixlr.com/image-generator/history/65ba5701b4f4f4419f746bc3/806ecb58-167c-4d20-b658-a6a6b2f221e9/medium.webp", name: "AI Art 6", price: "17999kr", description: "An individual preparing to embark on a journey via hot air balloon, signifying a venture into the skies. Drawn by Mason Davis." },
        { id: 7, image: "https://preview.redd.it/indian-monsoon-nostalgia-ai-generated-v0-g51y2twekbab1.jpg?width=640&crop=smart&auto=webp&s=742701d9e0e6137f4a3366ec4db709500ae2ccc6", name: "AI Art 7", price: "9999kr", description: "A malevolent figure of Indian origin, cloaked in the rain, embodying an air of menace amid the downpour. Drawn by Isabella Clark." },
        { id: 8, image: "https://media.nature.com/lw767/magazine-assets/d41586-024-00659-8/d41586-024-00659-8_26819316.jpg", name: "AI Art 8", price: "22999kr", description: "A squirrel undergoing a medical procedure, highlighting a rare and unusual moment in the life of a typically elusive creature. Drawn by Ethan Parker." },
        { id: 9, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2WDm-wJzPcOwgbl-6medjkxaJXS5khWo9xQ&s", name: "AI Art 9", price: "12999kr", description: "A dove in a state of distress, weeping in a poignant display of vulnerability. Drawn by Mia Rodriguez." },

        { id: 10, image: "https://www.mockofun.com/wp-content/uploads/2024/01/AI-generated-landscape-1.jpg", name: "AI Art 10", price: "184999kr", description: "A winding river carves its way through an alien badlands, the terrain cracked and barren, bathed in the glow of a distant sun. Drawn by Elias Nordberg." },
        { id: 11, image: "https://www.gemoo-resource.com/tools/img/ai_image_landscape_3@2x.png", name: "AI Art 11", price: "74999kr", description: "A pristine lake reflects towering snow-capped mountains, untouched by time, shrouded in morning mist. Drawn by Sofia Lindqvist." },
        { id: 12, image: "https://i.redd.it/three-ai-generated-landscapes-based-on-nms-made-with-v0-d2vraxjvo6f91.png?width=1024&format=png&auto=webp&s=300538fdd65779b3af50f577dc661c19f5ddbab2", name: "AI Art 12", price: "419999kr", description: "A distant planet with a surreal landscape, where bioluminescent flora glows beneath an emerald sky, hinting at life beyond our reach. Drawn by Kai Mortensen." },
        { id: 13, image: "https://www.mockofun.com/wp-content/uploads/2024/01/AI-generated-landscape-8.jpg", name: "AI Art 13", price: "299999kr", description: "A secluded paradise hidden behind jagged cliffs, where waterfalls cascade into crystal-clear pools, untouched by civilization. Drawn by Aria Falk." },
        { id: 14, image: "https://d2q9lphzn5ioni.cloudfront.net/uploads/2024/04/ai-generated-landscape-house-8.webp", name: "AI Art 14", price: "64999kr", description: "A majestic waterfall plunges into a misty abyss, surrounded by an ancient Canadian forest, where time seems to stand still. Drawn by Vincent Håkansson." },
        { id: 15, image: "https://img.pikbest.com/photo/20240706/forest-beautiful-view-forest-waterfall-scenery-summer-ai-generated-image_10653722.jpg!sw800", name: "AI Art 15", price: "159999kr", description: "A lush forest teeming with life, where a gentle river snakes through the dense greenery, whispering secrets of the past. Drawn by Linnea Ståhl." },
        { id: 16, image: "https://res.cloudinary.com/dzdgpwtox/image/upload/w_450,c_scale/v1676478550/designer-tool-uploads/bucket_9333/1676478540059.jpg", name: "AI Art 16", price: "14999kr", description: "A hauntingly beautiful beach under a twilight sky, where dark waves crash against the shore, illuminated only by a ghostly moon. Drawn by Felix Nyström." },
        { id: 17, image: "https://www.gemoo-resource.com/tools/img/ai_image_landscape_8@2x.png", name: "AI Art 17", price: "239999kr", description: "An alpine lake, nestled between jagged peaks, its waters mirroring the aurora dancing above, painting the night in a celestial glow. Drawn by Emilia Forsberg." },
        { id: 18, image: "https://pict.ai/images/secure/VGrqBz/2JyU6EsSEzO4goW_1700835249.png", name: "AI Art 18", price: "112999kr", description: "A dreamlike landscape where the sky shimmers in hues of violet and gold, and gravity itself seems to waver in this surreal realm. Drawn by Henrik Dahl." }
    ];

    let selectedProduct = null;
    let shoppingList = [];
    let cartOpen = false;

    function addToCart(product) {
    // Check if the product is already in the cart
    if (!shoppingList.some(item => item.id === product.id)) {
        shoppingList = [...shoppingList, product];
    } else {
        alert("This item is already in your cart!");
    }
}


    function showInfo(product) {
        selectedProduct = product;
    }

    function closePopup() {
        selectedProduct = null;
    }

    function toggleCart() {
        cartOpen = !cartOpen;
    }

    function removeFromCart(index) {
        shoppingList = shoppingList.filter((_, i) => i !== index);
    }

    function purchaseItems() {
    if (shoppingList.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    const productNames = shoppingList.map(item => item.name).join(", ");
    alert(`Bought: ${productNames}`);
    shoppingList = [];
}

</script>

<style>
    .header {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
        font-size: 36px;
        font-weight: bold;
        background: rgba(0, 0, 0, 0);
        text-align: center;
        position: relative;
        padding-top: 50px;
        color: gold;
    }

    .cart {
        position: absolute;
        right: 20px;
        width: 40px;
        height: 40px;
        cursor: pointer;
    }

    .gallery {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 20px;
        padding: 40px;

    }

    .card {
        background: rgba(255, 255, 255, 0.8);
        padding: 10px;
        border-radius: 10px;
        text-align: center;
        border: 10px solid #bc971d00;
        transform: scale(1);
    }
    .image-container {
        position: relative;
        display: inline-block;
        width: 100%;
    }

    .product-image {
        width: 100%;
        height: auto;
        border-radius: 5px;
    }

    .image-frame {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        scale: 135%;
    }

    .buttons {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
    }

    .button {
        background: rgba(0, 0, 0, 0.7);
        color: white;
        border: none;
        padding: 8px 15px;
        cursor: pointer;
        border-radius: 5px;
        transition: 0.2s;
    }

    .button:hover {
        background: rgba(255, 255, 255, 0.3);
    }

    /* Popup Styles */
    .popup {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(0, 0, 0, 0.9);
        color: white;
        padding: 20px;
        border-radius: 10px;
        width: 90%;
        text-align: center;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
        max-width: 400px;
    }

    .popup img {
        width: 100%;
        border-radius: 5px;
    }

    .popup .close-btn {
        background: red;
        color: white;
        border: none;
        padding: 8px 15px;
        cursor: pointer;
        border-radius: 5px;
        margin-top: 10px;
    }

    main{
        position: fixed;
        z-index: 11;
        overflow: scroll;
        height: 100vh;
        font-family: 'shop', sans-serif;
    }

    @font-face{
	    font-family: "shop";
	    src: url("/Kugile_Demo.otf");
    }

    .cart-container {
        position: fixed;
        right: -320px;
        top: 80px;
        width: 300px;
        background-image: url(https://i.pinimg.com/736x/e8/a1/b0/e8a1b035e0d456aae3537591943912ec.jpg);
        background-size: contain;
        color: white;
        padding: 15px;
        border-radius: 10px;
        box-shadow: -2px 0 10px rgba(0, 0, 0, 0.5);
        transition: right 0.4s ease-in-out;
    }

    .cart-container.open {
        right: 20px;
    }

    .cart-header {
        font-size: 18px;
        font-weight: bold;
        text-align: center;
        margin-bottom: 10px;
        padding-bottom: 5px;
        border-bottom: 2px solid gold;
    }

    .cart-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 5px 0;
        border-bottom: 1px solid gold;
    }

    .cart-item img {
        width: 40px;
        height: 40px;
        object-fit: cover;
        border-radius: 5px;
        margin-right: 10px;
    }

    .cart-item-info {
        display: flex;
        align-items: center;
        flex-grow: 1;
    }

    .remove-btn {
        background: red;
        color: white;
        border: none;
        padding: 5px;
        cursor: pointer;
        border-radius: 3px;
        font-size: 12px;
    }

    .cart-toggle {
        transition: transform 0.3s ease-in-out;
    }

    .cart.open .cart-toggle {
        transform: rotate(180deg);
    }

    .purchase-btn {
        width: 100%;
        padding: 10px;
        background: gold;
        color: black;
        font-weight: bold;
        border: none;
        cursor: pointer;
        border-radius: 5px;
        margin-top: 10px;
        scale: 80%;
    }

    .purchase-btn:hover {
        background: darkgoldenrod;
        scale: 85%;
    }

    @media (max-width: 768px) {
        .header {
            font-size: 28px;
            padding: 10px;
        }

        .cart {
            width: 35px;
            height: 35px;
        }

        .gallery {
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        }

        .popup {
            width: 85%;
        }

        .cart-container {
            width: 250px;
        }

        .purchase-btn {
            font-size: 14px;
        }
    }

    @media (max-width: 480px) {
        .header {
            font-size: 24px;
        }

        .purchase-btn {
            font-size: 16px;
        }
    }
</style>

<main style="background-image: url({backgroundImage});">
    <div class="header">
        <div>AI Gallery</div>
        <img src="https://static.vecteezy.com/system/resources/previews/020/972/364/non_2x/cart-shopping-gold-icon-illustration-of-golden-particle-background-gold-icon-vector.jpg" 
             alt="Cart" 
             class="cart" 
             on:click={toggleCart}>
        <span class="cart-count">{shoppingList.length}</span>
    </div>

    <div class="gallery">
        {#each products as product}
            <div class="card">
                <div class="image-container">
                    <img src={product.image} alt={product.name} class="product-image">
                    <img src={imageFrame} alt="Frame" class="image-frame">
                </div>
                <div class="buttons">
                    <button class="button" on:click={() => addToCart(product)}>Add</button>
                    <button class="button" on:click={() => showInfo(product)}>!</button>
                </div>
            </div>
        {/each}
    </div>

    {#if selectedProduct}
        <div class="popup">
            <img src={selectedProduct.image} alt={selectedProduct.name}>
            <h2>{selectedProduct.name}</h2>
            <p>{selectedProduct.description}</p>
            <h3>{selectedProduct.price}</h3>
            <button class="close-btn" on:click={closePopup}>Close</button>
        </div>
    {/if}

    <div class="cart-container {cartOpen ? 'open' : ''}">
        <div class="cart-header">Shopping Cart</div>
        {#if shoppingList.length === 0}
            <p>Your cart is empty.</p>
        {/if}
        {#each shoppingList as item, index}
            <div class="cart-item">
                <div class="cart-item-info">
                    <img src={item.image} alt={item.name}>
                    <span>{item.name}</span>
                </div>
                <button class="remove-btn" on:click={() => removeFromCart(index)}>X</button>
            </div>
        {/each}
        <p>Total: {shoppingList.reduce((total, item) => total + parseInt(item.price), 0)}kr</p>
        <button class="purchase-btn" on:click={purchaseItems}>Purchase</button>
    </div>
    
</main>

add number on shoppingcart to display the amount of items without opening it,
add a limit so only 1 image can be added to the shopping cart