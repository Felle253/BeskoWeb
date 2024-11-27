<main>
    <h1>    Photos    </h1>
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
        <div class="image-wrapper">
            <img src={image2} alt="Flexbox egenskaper">
        </div>
        <div class="image-wrapper">
            <img src={photo2} alt="Flexbox egenskaper">
        </div>
        <div class="image-wrapper">
            <img src={picture2} alt="Flexbox egenskaper">
        </div>
    </div>
</main>

<style>
main {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background: linear-gradient(to bottom, #1e3c72, #2a5298);
    background-image: url('https://wallpapercave.com/wp/wp4994001.jpg');
    background-size: cover;
    background-attachment: fixed;
    height: 100vh;
    width: 100vw;
    color: #fff;
    padding-top: 100px;
}

h1 {
    text-align: center;
    font-size: 60px;
    margin: 30px 0;
    color: #fff;
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
    font-family: 'bertsfamilj', cursive;
    position: relative;
    padding: 22px;
    background: rgba(255, 255, 255, 0.2);
    border: 2px solid #fff;
    border-radius: 15px;
    width: fit-content;
    margin: 0 auto;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
}

.photos {
    display: flex;
    max-width: 90vw;
    width: 100%;
    height: 80%;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 40px;
    padding: 20px;
    margin: auto;
}

.image-wrapper {
    flex: 0 1 400px;
    margin: 20px;
    height: auto;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border: 5px solid transparent;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.791);
}

.image-wrapper:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 15px rgba(255, 0, 0, 0.5);
    border: 5px solid #ff4d4d;
}

.image-wrapper:active {
    transform: scale(0.90);
}

.image-wrapper img {
    width: 100%;
    height: 100%;
    border-radius: 15px;
}

.image-wrapper:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 2px dashed rgba(255, 255, 255, 0.5);
    border-radius: 15px;
    pointer-events: none;
    transition: opacity 0.3s ease;
    opacity: 0;
}

</style>

<script>
let image = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgJgCsAd5X1nioStzsieVzG6UXAnAaXfgVl-WAYQ3rmYkR0hUyIAW_GjWKAjaCA63HIEr3ZZ8EeWjm8Wk7jXe_Mq9mcVllOrVtkiHOvVY9Dvo6kE6eAChFtsT4Ekzz_WQqoyO24dw2UdqekR9Wzu3lESCnnLG00gEfc_DTDuMAlctZCFbtpEGTUD9n9UbI/s1920/winter-sunset-reflections-4k-wallpaper-3840x2160.jpg";
let photo = "https://images7.alphacoders.com/134/1349488.jpeg";
let picture = "https://motionbgs.com/i/c/364x205/media/4229/snow-mountain-house.jpg";
let image2 = "https://wallpapers.com/images/hd/4k-winter-background-0s3z52p3lbzypktp.jpg";
let photo2 = "https://c4.wallpaperflare.com/wallpaper/590/262/493/christmas-winter-4k-wallpaper-preview.jpg";
let picture2 = "https://wallpapercat.com/w/full/2/f/3/2114259-3840x2160-desktop-4k-snow-background-image.jpg";
</script>
