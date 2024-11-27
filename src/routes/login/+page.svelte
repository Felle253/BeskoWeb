<script>
    import { onMount } from 'svelte';
    import { users_store } from "$lib/user";
    
    let users = [];
    let email = "";
    let password = "";
    
    onMount(() => {
        if ($users_store.length > 2) {
            users = JSON.parse($users_store);
        }
    });
    
    function handleLogin() {
        let found_user = users.filter(user => user.email === email);
    
        if (found_user.length === 0) {
            alert("Användaren finns inte. Kontrollera e-post eller registrera ett konto.");
            return;
        }
    
        if (found_user[0].password !== password) {
            alert("Fel lösenord. Försök igen.");
            return;
        }
    
        alert(`Välkommen tillbaka, ${found_user[0].username}! Du är nu inloggad.`);
    }
</script>

<main>
    <div class="container">
        <form on:submit|preventDefault={handleLogin}>
            <h1>🎄 Login 🎅</h1>

            <label for="mail">E-Mail:</label>
            <input type="email" id="mail" bind:value={email} placeholder="Enter your email">

            <label for="pass">Password:</label>
            <input type="password" id="pass" bind:value={password} placeholder="Enter your password">

            <input type="submit" value="🎁 Log In!" style="margin-top: 10px;">
        </form>
        <p>Don't have an account? <a href="/register">Register</a>.</p>
    </div>
</main>

<style>
    main {
        background-image: url("https://wallpapers.com/images/featured/4k-ultra-hd-christmas-c0kfp62xkus83liu.jpg");
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
    
    input {
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
    
    input:hover {
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
