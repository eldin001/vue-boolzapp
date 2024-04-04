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

    },
    computed: {
        activeContact(){
            return this.contacts.find((el)=> el.id === this.activeContactId);
        }
    }
}).mount('#app')