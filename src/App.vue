<script >

import AppHeader from './components/AppHeader.vue'

export default{

  data() {
    return {
      
    }
  },

  components: {
    AppHeader
  },

  mounted() {
    
  },

  methods: {
    
  },

}
</script>

<template>

  <!-- codice statico per tutte le pagine -->
  <AppHeader></AppHeader>
  <!-- codice dinamico che può cambiare nelle varie pagine -->
  <router-view></router-view>
</template>

<style lang="scss">
@use './style/main.scss';
</style>
