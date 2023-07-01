<template>
  <h2 class="text-center mt-3 mb-5">Single Project:</h2>
  <div class="cards_container">
        <div class="tilt_box_wrap">
            <div class="card rgb">
               
              <div class="card-image">

                  <img  class="w-100" :src="`${baseUrl}/storage/${project.img_url}`" @error="imageLoadError" />

              </div>

                <h2 class="card-title">{{ project.title }}</h2>

                <div class="card-text">
                    <span class="top_rated">Categoria</span>
                    <span v-if="project.category">{{ project.category.name }}</span>
                    <span v-else>no category</span>
                    <p>{{  project.description }}</p>
                </div>
                <div class="card-stats">
                    <span class="card-tec">Tecnologies:&nbsp;</span>
                    <span v-for="technology in project.technologies">{{ technology.name }}&nbsp;</span>
                </div>

            </div>
        </div>
    </div>
</template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'SingleProject',
  
    data() {
      return {
        baseUrl: 'http://localhost:8000',
        project: [],
      }
    },
    mounted () {
      this.getSingleProject();
    },
    computed: {
    console: () => console,
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
  