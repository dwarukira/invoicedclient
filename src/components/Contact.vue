<template>
    <ul>
        <li v-for="contact in contacts" :key="contact.id"> 
            <router-link tag="p" :to="{ name:'contact', params: { id: contact.id } }" >  <p> {{ contact.name }} </p> </router-link> 
            <button @click="deletec(contact)"> del</button>    
        </li>
    </ul>
</template>


<script>

import  axios from "axios";
export default {

    data() {
        return {
            contacts: [],
            loading: false
        }
    },
    mounted() {
      this.fetchContacts()
    },
    methods: {
        fetchContacts() {
              axios.get("http://localhost:3000/contacts").then(response => this.contacts = response.data)
        },
        deletec(contact) {
            console.log(contact.id);
            this.loading = true 
            axios.delete(`http://localhost:3000/contacts/${contact.id}`).then(res =>  this.fetchContacts()).catch(console.log); 
        } 
    }
}
</script>

