<template>
    <p>  {{ contact.name }} </p>
</template>


<script>
import axios from 'axios';
export default {

    data() {
        return {
            contact: {}
        }
    },
    mounted() {
        axios.get(`http://localhost:3000/contacts/${this.$route.params.id}`).then(res => this.contact = res.data).catch(console.log)
    }
}
</script>
