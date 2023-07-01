<template>
    <div>
      <h1 class="text-center mt-3 mb-5">Single Project</h1>
      <Card :project="project" />
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import Card from '../Card.vue';
  
  export default {
    name: 'SingleProject',
    components: {
      Card
    },
    data() {
      return {
        baseUrl: 'http://localhost:8000',
        project: null
      }
    },
    mounted() {
      this.getSingleProject();
    },
    methods: {
      getSingleProject() {
        axios.get(`${this.baseUrl}/api/projects/${this.$route.params.slug}`).then((response) => {
            if (response.data.success) {
              this.project = response.data.project; 
            } else {
              this.$router.push({ name: 'not-found' });
            }
          })
      }
    }
  }
  </script>
  
  <style scoped lang="scss">
  // Stili specifici per questo componente
  </style>
  