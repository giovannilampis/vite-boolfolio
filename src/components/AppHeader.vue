<template>
    <div>
        <nav class="navbar navbar-expand-sm navbar-light bg-light">
              <div class="container">
                <router-link class="navbar-brand" :to="{ name: 'home' }">Boolfolio</router-link>
                <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavId">xdf
                    <ul class="navbar-nav me-auto mt-2 mt-lg-0">
                        <li class="nav-item">
                            <router-link class="nav-link active" :to="{ name: 'home' }" aria-current="page">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{ name: 'projects' }">Portfolio</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{ name: 'contacts' }">Contacts</router-link>
                        </li>
                     
                    </ul>
                  
                </div>
          </div>
        </nav>
        
    </div>
</template>

<script>
export default {
    name: 'AppHeader',
    data() {
        
        return {}
    }
}
</script>

<style lang="scss" scoped>

#collapsibleNavId .router-link-active {
    border-bottom: 3px solid #fb07d9;
}

</style>