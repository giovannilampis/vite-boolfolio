<script >
import axios from 'axios';
import Card from '../Card.vue';

export default{

  name: 'ProjectList',
  components: {Card},

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
        .then(({ data })=>{
          console.log(data.projects)
          //inserire nella variabile projects i dati ottenuti dalla API
          this.projects = data.projects ;
          console.log(this.projects)
        //   console.log(this.projects)
        }).catch(e => {
          console.error(e)
        })
    }
  },
}

</script>

<template>

  <h1 class="text-center mt-3 mb-5">Projects Page</h1>

  <div class="dev_container">
    <div class="row gy-5">
      <div v-for="project of projects" :key="project.id" class="col-sm-12 col-md-6 col-lg-6 col-xl-3">
        <Card  :project="project" />
      </div>
    </div>
  </div>
  
</template>

<style lang="scss">
// @use '../style/main.scss';
</style>