<script >
import axios from 'axios';
import Card from '../Card.vue';

export default{
  name: 'SingleProject',
  components: {
  Card
},

  data() {
    return {

      baseUrl: 'http://localhost:8000'
    }
  },
  mounted() {
    // this.getProjects();
  },
  methods: {
    // getProjects(){
    //   axios.get(`${this.baseUrl}/api/projects`)
    //     .then(res=>{
    //       //inserire nella variabile projects i dati ottenuti dalla API
    //       this.projects = res.data.projects
    //     //   console.log(this.projects)
    //     })
    // }
  },
}
</script>

<template>
    
  <h1 class="text-center mt-3 mb-5">Single Project</h1>

</template>

<style lang="scss">
// @use '../style/main.scss';
</style>