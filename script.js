import {contacts} from './data.js';

console.log(contacts);
const {createApp} = Vue;

createApp({
    data() {
        return {
            contacts: contacts,
            activeContactId: 1 
        }
    },
    methods: {
        
    }
}).mount('#app')