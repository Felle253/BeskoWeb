<main>
    <h1>photoapp</h1>
    <div class="photos">
        <div class="image-wrapper">
            <img src={image} alt="Flexbox egenskaper">
        </div>
        <div class="image-wrapper">
            <img src={photo} alt="Flexbox egenskaper">
        </div>
        <div class="image-wrapper">
            <img src={picture} alt="Flexbox egenskaper">
        </div>
    </div>
</main>

<style>

h1{
    text-align: center;
    font-size: 50px;
    margin: 20px;
    color: grey;
}

    .image-wrapper:hover {
    flex-grow: 2;
}
    .image-wrapper:active { transform: scale(0.9); }
    .photos {
        display: flex;
        max-width: 90vw;
        width: 100%;
        height: 80%;
        overflow: hidden;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }

    .image-wrapper {
    flex: 0 1 300px;
    margin: 10px;
    height: auto;
    /*background-color: gainsboro;*/
}

.image-wrapper img {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    box-shadow: 4px 8px 10px rgba(0,0,0,0.2);
}
    </style>
<script>
    
let image = "https://picsum.photos/id/70/367/267"
let photo = "https://picsum.photos/id/88/367/267"
let picture = "https://picsum.photos/id/93/367/267"

</script>