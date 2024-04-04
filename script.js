import {contacts} from './data.js';

console.log(contacts);
const {createApp} = Vue;

createApp({
    data() {
        return {
            contacts: contacts,
            activeContactId: 1,
            messageText:''
        }
    },
    methods: {
        setActiveContactId (id) {
            this.activeContactId = id;
        },
        sendMessage(){
            const newMessage = {
                date: new Date().toLocaleString(),
                message: this.messageText,
                status: 'sent'
            }
            this.activeContact.messages.push(newMessage)
        }

    },
    computed: {
        activeContact(){
            return this.contacts.find((el)=> el.id === this.activeContactId);
        }
    }
}).mount('#app')