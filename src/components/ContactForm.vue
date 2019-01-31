<template>
    <form v-on:submit.prevent="onSubmit" class="container">
        <div class="field">
            <label class="label">Name</label>
            <div class="control">
                <input class="input" type="text" v-model="contact.name"  placeholder="e.g Alex Smith">
            </div>
        </div>

        <div class="field">
            <label class="label">Email</label>
            <div class="control">
                <input class="input" v-model="contact.email" type="email" placeholder="e.g. alexsmith@gmail.com">
            </div>
        </div>  

        <div class="field">
            <label class="label">Phone</label>
            <div class="control">
                <input class="input" v-model="contact.phone" type="text" placeholder="e.g. +2547xxxxxx">
            </div>
        </div>  

        <div class="control">
            <button class="button is-primary" @click="addContact">Submit</button>
        </div>
    </form>  
</template>

<script>
export default {
    data(){
        return {
            contact: {
                name:'',
                email:'',
                phone:''
            }
        }
    },
    methods:{
        addContact(e) {  
            fetch("http://localhost:3000/contacts", {
                method:'POST',
                body: JSON.stringify(this.contact),
                headers: {
                    'Content-Type':'application/json'
                }
            }).then(() => this.$router.push("/")).catch(console.log)
        }
    }
}
</script>


<style scoped>
  
</style>
