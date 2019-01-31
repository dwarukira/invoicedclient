<template>
  <div class="home">     
    <contact  />
  </div>
</template>

<script>
// @ is an alias to /src
import Contact from '@/components/Contact.vue'

export default {
  name: 'home',
  components: {
    Contact
  }
}
</script>
