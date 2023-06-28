<script >
import axios from 'axios';

export default{
  data() {
    return {
      projects: [],
      baseUrl: 'localhost:8000/api'
    }
  },
  mounted() {
    $this.getProjects();
  },
  methods: {
    getProjects(){
      axios.get(`${this.baseUrl}/projects`)
        .then(res=>{
          //inserire nella variabile projects i dati ottenuti dalla API
          this.projects = res.data.projects
        })
    }
  },
}
</script>

<template>
  <h1>Ciao mondo</h1>
</template>

<style lang="scss">
@use './style/main.scss';
</style>
