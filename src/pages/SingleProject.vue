<template>
<!-- <div class="fs-3 text-center mt-3 mb-5">
  Project Name:&nbsp; <span class="fs-3 text-center mt-3 mb-5">{{ project.title }}</span>
  <button class="my_btn d-inline position-fixed end-0 me-5" href="" @click.prevent="goBack()">Go Back</button>
</div>

<div class="row justify-content-center mb-5 mt-3">
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
</div> -->

<div class="container">
  <button class="my_btn position-fixed end-0 me-5 mt-5" href="" @click.prevent="goBack()">Go Back</button>
  <div class="row">
      <div class="col-lg-6 col-md-6 col-sm-12 mt-5">
        <img  class="w-100" :src="`${baseUrl}/storage/${project.img_url}`" @error="imageLoadError" />
      </div>
      <div class="col-lg-6 col-md-6 col-sm-12 mt-5">
          <div class="d-flex flex-column justify-content-start align-items-start">
            <div class="mb-5">
              <span class="top_rated">Categoria:&nbsp;</span>
              <span v-if="project.category">{{ project.category.name }}</span>
              <span v-else>no category</span>
            </div>
            <div class="mb-5">
              <span class="top_rated">Tecnologies:&nbsp;</span>
              <span v-for="technology in project.technologies">{{ technology.name }}&nbsp;</span>
            </div>
          </div>
          <div>
            <span class="top_rated">Description:&nbsp;</span>
            <span>{{project.description }}</span>
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

  .top_rated{
            color: #BB2649;
            font-size: 1rem;
            font-weight: 600;
            letter-spacing: 4px;
        }
  </style>
