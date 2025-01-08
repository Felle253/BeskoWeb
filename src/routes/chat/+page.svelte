<script>
    import { enhance } from '$app/forms';
    import ElizaBot from 'elizabot'; 
    import { chat_store } from "$lib/chat";


    const eliza = new ElizaBot();
    let chat = [{ user: 'Nigmon German', message: eliza.getInitial() }];
    let userMessage = '';
    let isTyping = false;

    // Function to handle message sending
    async function write(message) {
        if (message.trim()) {
            // Add the user's message to the chat
            chat_store.update(chat => [...chat, { user: 'User', message }]);
        }

        // Simulate a delay before Eliza's response
        isTyping = true;
        await new Promise((resolve) => setTimeout(resolve, 1000 + Math.random() * 3000));

        // Get Eliza's response and add it to the chat
        const botResponse = eliza.transform(message);
        chat_store.update(chat => [...chat, { user: 'Nigmon German', message: botResponse }]);
        isTyping = false;
        
        userMessage = '';
    }

    function clearChat() {
        chat_store.set([{ user: 'Nigmon German', message: eliza.getInitial() }]);
    }

</script>

<main>
    <div class="chat-container">
        <section class="chat-messages">
            {#each $chat_store as { user, message }}
                <article class="chat-message {user === 'User' ? 'user-message' : 'eliza-message'}">
                    <p><strong>{user}:</strong> {message}</p>
                </article>
            {/each}
        </section>

        <!-- Typing bubble -->
        {#if isTyping}
            <article id="visible" class="typing-bubble">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
            </article>
        {/if}

        <form
            method="post"
            use:enhance={({ formElement, formData, action, cancel }) => {
                cancel();
                const text = formData.get("text");
                write(text);
            }}
            class="chat-form">
            <input
                type="text"
                name="text"
                bind:value={userMessage}
                placeholder="Skriv ditt meddelande..."
                class="chat-input">
            <button type="submit" class="chat-button">
                Skicka
            </button>
        </form>
        <button class="clear-chat-button" on:click={clearChat}>
            Rensa chatten
        </button>
    </div>
</main>


<style>
    main {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: #1d1de5;
    }

    .chat-container {
        width: 60vw;
        height: 70vh;
        padding: 20px;
        background-color: #ffffff75;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .chat-messages {
        flex-grow: 1;
        overflow-y: auto;
        padding-right: 10px;
    }

    .chat-message {
        margin: 10px;
        padding: 10px;
        border-radius: 10px;
        background-color: #857d7d89;
        width: fit-content;
        max-width: 80%;
        word-wrap: break-word;
        margin-bottom: 10px;
    }

    .user-message {
    background-color: #4CAF50;
    color: white;
    align-self: flex-end;
    margin-left: 20%;
    justify-self: end;

    } 

    .eliza-message {
        background-color: #857d7d89;
        color: black;
        align-self: flex-start;
        margin-right: 20%;
    }

    .chat-form {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 0;
    }

    .chat-input {
        padding: 10px;
        width: 80%;
        border-radius: 5px;
        margin-right: 10px;
        border: 1px solid #ccc;
        color: black;
        font-size: 16px;
    }

    .chat-button {
        padding: 10px 20px;
        background-color: #4CAF50;
        color: white;
        border: none;
        border-radius: 5px;
    }

    .clear-chat-button {
        padding: 10px 20px;
        background-color: #f44336;
        color: white;
        border: none;
        border-radius: 5px;
        margin-top: 10px;
        cursor: pointer;
    }

    #visible {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 30px;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    .typing-bubble {
        display: flex;
        justify-content: space-between;
        width: 50px;
    }

    .dot {
        width: 10px;
        height: 10px;
        margin: 0 5px;
        border-radius: 50%;
        background-color: #000000;
        opacity: 0;
        animation: typing 1.5s infinite ease-in-out;
    }

    .dot:nth-child(1) {
        animation-delay: 0s;
    }

    .dot:nth-child(2) {
        animation-delay: 0.3s;
    }

    .dot:nth-child(3) {
        animation-delay: 0.6s;
    }

    @keyframes typing {
        0% {
            opacity: 0;
            transform: scale(0)
        }
        25%{
            opacity: 1;
        }
        50% {
            opacity: .6;
            transform: scale(1.4)
        }
        75% {
            opacity: .3;
        }
        100% {
            opacity: 0;
            transform: scale(0)
        }
    }
</style>