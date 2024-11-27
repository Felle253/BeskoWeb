<script>
    import { onMount } from 'svelte';
    import { users_store } from "$lib/user";

    let users = [];
    let name = "";
    let email = "";
    let password = "";
    let age = "";
    let color = "black";

    let colors = [
        { namn: "Blå", value: "blue" },
        { namn: "Röd", value: "red" },
        { namn: "Svart", value: "black" }
    ];

    onMount(() => {
        if ($users_store.length > 2) {
            users = JSON.parse($users_store);
        }
    });

    function handleSubmit() {
        let new_user = { username: name, email: email, password: password, color: color };

        let existing_users = users.filter(user => user.username === name);
        if (existing_users.length > 0) {
            alert("Användarnamnet finns redan! Vänligen välj ett annat.");
            return;
        }

        users = [...users, new_user];
        $users_store = JSON.stringify(users);

        alert(`Välkommen ${name}! \nE-post: ${email} \nLösenord: ${password}`);
    }
</script>

<main>
    <div class="container">
        <form on:submit|preventDefault={handleSubmit}>
            <h1>🎄 Register 🎅</h1>

            <label for="name">Name:</label>
            <input type="text" id="name" bind:value={name} placeholder="Enter your name">

            <label for="mail">E-Mail:</label>
            <input type="email" id="mail" bind:value={email} placeholder="Enter your email">

            <label for="pass">Password:</label>
            <input type="password" id="pass" bind:value={password} placeholder="Enter a secure password">

            <div class="color-picker">
                <label for="Favoritecolor">Favorite Color:</label>
                <div class="color-display" style="background-color: {color};"></div>
                <select id="Favoritecolor" bind:value={color}>
                    {#each colors as c}
                        <option value={c.value}>{c.namn}</option>
                    {/each}
                </select>
            </div>
            <input type="submit" value="🎁 Register Now!" style="margin-top: 10px;">
        </form>
        <p>Already have an account? <a href="/login">Log in</a>.</p>
    </div>
</main>


<style>
    main {
        background-image: url("https://assets.hongkiat.com/uploads/beautiful-christmas-wallpapers-for-your-desktop/4k/original/1.jpg");
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
        height: 100vh;
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 50px;
    }
    
    .container {
        background: rgba(255, 255, 255, 0.2);
        border: 5px solid transparent;
        border-radius: 20px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
        width: 40%;
        max-width: 500px;
        min-width: 300px;
        padding: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .container:hover {
        transform: scale(1.03);
        box-shadow: 0 6px 15px rgba(255, 0, 0, 0.5);
        border: 5px solid #ff4d4d;
    }
    
    h1 {
        font-family: 'bertsfamilj', cursive;
        font-size: 2.5rem;
        color: #fff;
        text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.7);
        padding: 10px 20px;
        margin-bottom: 20px;
    }
    
    label {
        color: #fff;
        font-size: 1.2rem;
        font-family: 'Poppins', sans-serif;
        margin-bottom: 5px;
    }
    
    input, select {
        width: 100%;
        padding: 10px;
        border: 2px solid transparent;
        border-radius: 15px;
        background-color: rgba(255, 255, 255, 0.9);
        margin-bottom: 15px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        transition: border-color 0.3s ease, box-shadow 0.3s ease;
        font-family: 'Poppins', sans-serif;
        color: #333;
    }
    
    input:hover, select:hover {
        border-color: #ff4d4d;
        box-shadow: 0 6px 15px rgba(255, 0, 0, 0.3);
    }
    
    input[type="submit"] {
        background-color: #e74c3c;
        color: white;
        border: 2px solid transparent;
        border-radius: 15px;
        padding: 10px 20px;
        font-size: 1rem;
        font-family: 'Poppins', sans-serif;
        cursor: pointer;
        transition: background-color 0.3s ease, transform 0.3s ease;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    }
    
    input[type="submit"]:hover {
        background-color: #c0392b;
        transform: scale(1.1);
        box-shadow: 0 6px 15px rgba(0, 0, 0, 0.5);
        border-color: #fff;
    }
    
    .color-picker {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 15px;
    }
    
    .color-display {
        width: 50px;
        height: 30px;
        border: 2px solid #fff;
        border-radius: 5px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }
    
    a {
        color: #fff;
        text-decoration: underline;
        transition: color 0.3s ease;
    }
    
    a:hover {
        color: #ff4d4d;
    }
    
    p {
        color: #fff;
        font-family: 'Poppins', sans-serif;
        margin-top: 15px;
    }
    </style>