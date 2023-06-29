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
          console.log(this.projects)
        })
    }
  },
}
</script>

<template>
  <h1 class="text-center mt-2 mb-5">Projects Page</h1>

  <div class="container">
    <div class="row">
      <div class="col-4" v-for="(elem, index) in projects" :key="index">
        <Card :project="elem"/>
      </div>

    </div>
  </div>
</template>

<style lang="scss">
@use './style/main.scss';
</style>
