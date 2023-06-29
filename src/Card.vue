<template>
    <div class="card">
      <img class="card-img-top" :src="`${baseUrl}/storage/${project.img_url}`" :alt="project.title">
      <div class="card-body">
        <h4 class="card-title">{{ project.title }}</h4>
        <p class="card-text">{{ project.description }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Card',
    props: ['project', 'baseUrl']
  }
  </script>
  
  <style scoped>
  /* Stili specifici per il componente Card.vue */
  </style>
  