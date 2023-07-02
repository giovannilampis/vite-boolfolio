<template>
<span class="fs-3 text-center mt-3 mb-5">Single Project:&nbsp;</span>
<span class="fs-3 text-center mt-3 mb-5">{{ project.title }}</span>
<button class="btn btn-primary" href="" @click.prevent="goBack()">Go Back</button>
<div class="row justify-content-center">
  <div class="col-4">
    <div class="cards_container">
      <div class="tilt_box_wrap">

          <div class="card rgb">

            <div class="card-image">

              <img  class="w-100" :src="`${baseUrl}/storage/${project.img_url}`" @error="imageLoadError" />

            </div>

            <h2 class="card-title">{{ project.title }}</h2>

            <div class="card-text">
                <span class="top_rated">Categoria:&nbsp;</span>
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

        axios.get(`${this.baseUrl}/api/projects/${this.$route.params.slug}`)
            .then((response) => {

              this.project = response.data.project;
            }, error => {
                if(error.response.status === 404){
                    this.$router.push({name: 'not-found'})
                } else {
                  // any other error
                  // this.customMessage = 'There was an error'
                }
            }
        );
      },
      goBack() {
        this.$router.back();
        // alternative way to go back
        // this.$router.go(-1);
      }
    }
  }
  </script>

  <style scoped lang="scss">
  // Stili specifici per questo componente
  button {
    display: block;
  }
  </style>
