<template>
    
    <div class="cards_container">
        <div class="tilt_box_wrap">
            <div class="card rgb">
                <div class="card-image">
                    <!-- <img :src="`${baseUrl}/storage/${project.img_url}`" :alt="project.title"> -->
                </div>
                <div class="card-text">
                    <span class="top_rated">categoria</span>
                    <h2>{{ project.title }}</h2>
                    <p>{{  project.description }}</p>
                </div>
                <div class="card-stats">
                    <span class="card-tec">tecnologie:</span>
                    <span>HTML, CSS, PHP</span>
                    
                </div>
            </div>
        </div>
      <!-- <img class="card-img-top" :src="`${baseUrl}/storage/${project.img_url}`" :alt="project.title">
      <div class="card-body">
        <h4 class="card-title">{{ project.title }}</h4>
        <p class="card-text">{{ project.description }}</p>
      </div> -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'Card',
    props: ['project', 'baseUrl'],

    data() {
        return {
            baseUrl: 'http://localhost:8000'
        }
    }
    
  }
 
  </script>
  
  <style lang="scss" scoped>
  /* Stili specifici per il componente Card.vue */
  @use "./style/partials/_variables" as *;
  @use "./style/partials/_mixins" as *;

  .cards_container{
    width: 100%;
   @include dflex_row_center;
   transition: all 350ms;

    .card{
        display: grid;
        grid-template-columns: 300px;
        grid-template-rows: 210px 210px 80px;

        grid-template-areas: "image" "text" "stats";

        border-radius: 18px;
        color: $white;
        background-color: $bkg_blue;
        box-shadow: 5px 5px 15px rgba(0,0,0,0.9);
        text-align: center;
        cursor: pointer;

        position: relative;

        border: 8px solid $bkg_purple;
        outline: 1px solid  rgba($color: $light_blue, $alpha: 0.5);

    }
    .rgb::after{
        content: "";
        background: linear-gradient(45deg,
        #ff0000 0%,
        #ff9a00 10%,
        #d0de21 20%,
        #4fdc4a 30%,
        #3fdad8 40%,
        #2fc9e2 50%,
        #1c7fee 60%,
        #5f15f2 70%,
        #ba0cf8 80%,
        #fb07d9 90%,
        #ff0000 100%)
        repeat 0% 0% / 300% 100%;
        position: absolute;
        inset: -12px;

        border-radius: 16px;

        z-index: -1; 
        animation: rgb 6s linear infinite;
    }
    @keyframes rgb{
        0% {background-position: 0% 50%;}
        50% {background-position: 100% 50%;}
        100% {background-position: 0% 50%;}
    }
    
    
    .card-image{
        grid-area: image;
        pointer-events: none;
        overflow: hidden;
        border-radius: 15px  15px 0 0;

        display: flex;
        align-items: center;
        background-color: $white;

        img{
            filter: saturate(.9);
        }
      
    }
    .card-text{
        grid-area: text;
        margin: 25px;
        pointer-events: none;

        .top_rated{
            color: $main_color;
            font-size: .75rem;
            font-weight: 600;
            letter-spacing: 4px;
        }
        h2{
            margin-top: .55rem;
            margin-bottom: 1.3rem;
            font-size: 1.2rem;
            color: $light_blue;
            letter-spacing: .2rem;
        }
        p{
            color: $mid_gray;
            font-size: 14px;
            text-align: justify;
        }
    }
    .card-stats{
        grid-area: stats;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: 0 1.5rem;

        .card-tec{
            font-size: 14px;
            color: $main_color;
            margin-right: .5rem;
        }
    }
    
    
}
.cards_container:hover{
    transform: scale(1.05);

    .card{
        box-shadow: none;
        outline: none;

        img{
            filter: saturate(1);
        }

    }
  }

  </style>
  