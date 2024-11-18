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
        <h1>Register</h1>
        <div class="container">
            <form on:submit|preventDefault={handleSubmit}>
                <div style="width: 100px; height: 100px; border-radius: 50%; overflow: hidden; background-color: {color};"></div>
                
                <label for="name" style="color: white;">Namn:</label>
                <input type="text" id="name" bind:value={name} style="color: black;">
    
                <label for="mail" style="color: white;">Mail:</label>
                <input type="email" id="mail" bind:value={email} style="color: black;">
    
                <label for="pass" style="color: white;">Lösenord:</label>
                <input type="password" id="pass" bind:value={password} style="color: black;">
    
                <label for="age" style="color: white;">Födelsedatum:</label>
                <input type="date" id="age" bind:value={age} style="color: black;">
    
                <label for="Favoritfärg" style="color: white;">Färg:</label>
                <select id="Favoritfärg" bind:value={color} style="color: black;">
                    {#each colors as c}
                        <option value={c.value}>{c.namn}</option>
                    {/each}
                </select>
    
                <input type="submit" value="Registrera" style="margin-top: 10px;">
            </form>  
            <p style="color: white;">Har du redan ett konto? <a href="/login" style="color: lightblue;">Logga in</a>.</p>
        </div>
    </main>
    
    <style>
    main {  
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
        height: 80%;
        min-width: 300px;
        min-height: 500px;
        background-color: #3a2e3b;
        margin: auto;
    }     
    </style>    