<script >
import axios from 'axios';
import Card from '../Card.vue';

export default{

  name: 'ProjectList',
  components: {Card},

  data() {
    return {
      projects: [],
      baseUrl: 'http://localhost:8000',
      categories: [],
      selectedCategory: 'all',
  
    }
  },

  mounted() {
    this.getProjects();
    this.getCategories();
  },

  methods: {
    // getProjects(){
    //   axios.get(`${this.baseUrl}/api/projects`)
    //     .then(({ data })=>{
    //       console.log(data.projects)
    //       //inserire nella variabile projects i dati ottenuti dalla API
    //       this.projects = data.projects ;
    //       // console.log(this.projects)
    //     }).catch(e => {
    //       console.error(e)
    //     })
    // },
    getProjects(){
             const params = {
            }
           if (this.selectedCategory !== 'all') {
                params.category_id = this.selectedCategory
           }
          console.log(params)
          console.log(`${this.baseUrl}/api/projects`, { params })
            axios.get(`${this.baseUrl}/api/projects`, { params }).then(res=>{
              console.log(res.data.projects)
                this.projects = res.data.projects
            })
        },

    getCategories(){
      axios.get(`${this.baseUrl}/api/categories`).then(res => {
          this.categories = res.data.categories
      })
    }
  },
}

</script>

<template>

  <h1 class="text-center mt-3 mb-5">Projects Page</h1>

  <div class="container mb-3">
    <label for="" class="form-label">Category Filter</label>
    <select @change="getProjects()" class="form-select form-select-lg" name="" id="" v-model="selectedCategory">
      <option value="all">--all--</option>
      <option :value="element.id" v-for="(element,index) in categories" :key="index">{{element.name}}</option>
    </select>
  </div>

  <div class="card_container mb-5">
    <div class="row gy-5">
      <div v-for="project of projects" :key="project.id" class="col-sm-12 col-md-6 col-lg-3 col-xl-3">
        <Card  :project="project" />
      </div>
    </div>
  </div>

</template>

<style lang="scss">
// @use '../style/main.scss';
</style>