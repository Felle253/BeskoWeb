import { browser } from "$app/environment";
import { writable } from "svelte/store";

// Load stored chat or initialize an empty chat
const savedChats = browser ? JSON.parse(window.localStorage.getItem('chats')) ?? [{ user: 'Nigmon German', message: 'Hi! How can I help you today?' }] : [];

export const chat_store = writable(savedChats);

if (browser) {
    // Subscribe to the chat store and update localStorage whenever it changes
    chat_store.subscribe((value) => {
        window.localStorage.setItem('chats', JSON.stringify(value));  // Store chat as JSON
    });
}
