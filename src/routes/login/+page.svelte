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
        <h1>Inloggning</h1>
        <div class="container">
            <form on:submit|preventDefault={handleLogin}>
                <label for="mail" style="color: white;">Mail:</label>
                <input type="text" id="mail" bind:value={email} style="color: black;">
    
                <label for="pass" style="color: white;">Lösenord:</label>
                <input type="password" id="pass" bind:value={password} style="color: black;">
    
                <input type="submit" value="Logga in" style="margin-top: 10px;">
            </form>  
            <p style="color: white;">Har du inte ett konto? <a href="/register" style="color: lightblue;">Registrera dig</a>.</p>
        </div>
    </main>
    
    <style>
    main{  
        background-image: url("https://t4.ftcdn.net/jpg/05/21/65/59/360_F_521655929_N80d5GaCQJ2VP073PfTXJTe9mkvsNtHE.jpg");
        background-size: cover;
        width: 100%;
        min-height: 500px;
        padding: 5%;
    }
    
    .container {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        border: solid 5px rosybrown;
        border-radius: 10px;
        width: 35%;
        height: auto;
        min-width: 300px;
        min-height: 300px;
        background-color: #3a2e3b;
        margin: auto;
    }
    </style>
    