import {contacts} from './data.js';

console.log(contacts);
const {createApp} = Vue;

createApp({
    data() {
        return {
            contacts: contacts,

        }
    }
}).mount('#app')