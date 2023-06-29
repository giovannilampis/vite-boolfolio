<script >
import axios from 'axios';
import Card from './Card.vue';


export default{
  components: {
  Card
},

  data() {
    return {
      projects: [],
      baseUrl: 'http://localhost:8000'
    }
  },
  mounted() {
    this.getProjects();
  },
  methods: {
    getProjects(){
      axios.get(`${this.baseUrl}/api/projects`)
        .then(res=>{
          //inserire nella variabile projects i dati ottenuti dalla API
          this.projects = res.data.projects
        })
    }
  },
}
</script>

<template>
  <h1 class="text-center mt-2 mb-5">Projects</h1>

  <div class="container">
    <div class="row">
      <div class="col-4" v-for="(elem, index) in projects" :key="index">
        <div class="card">
          <img class="card-img-top" :src="`${baseUrl}/storage/${elem.img_url}`" alt="elem.title">
          <div class="card-body">
            <h4 class="card-title">{{ elem.title }}</h4>
            <p class="card-text">{{ elem.description }}</p>
          </div>
        </div>
      </div>
      <Card/>
    </div>
  </div>
</template>

<style lang="scss">
@use './style/main.scss';
</style>
