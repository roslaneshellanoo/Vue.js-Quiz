<template>
  <div class="home">


      <div class="col-xs-12">

        <div class="wrap-home">

          <div class="text-center">
            <img src="../assets/code-1.png" alt="" style="max-width: 300px">
          </div>

          <h4 class="home-title text-center white">
          Test your skills and <br> improve your knowledge!
          </h4>



        </div>

        <!---------------------------------------------->

      </div>


  </div>
</template>


<script>
import {store} from '../store/store'

  export default {
    name: 'home',

    data() {

      return {

        open: store.state.open,
        sharedState: store.state
      }

    },


    methods: {

      openChange() {
        this.$store.commit('openChange')
      },


    },

    mounted() {
      this.$store.state.open = false
    }

  }
</script>


<style>

  body {
    padding-top: 0;
  }

  .mu-appbar.header-nav-bar {
    background: transparent!important;
  }

  .mu-list .active {
    text-decoration: line-through;
  }

  .home {
    background-color: #b16cf5;
    background-image: -webkit-linear-gradient(top, #b16cf5, #134bb3);
    background-image: -moz-linear-gradient(top, #b16cf5, #134bb3);
    background-image: -o-linear-gradient(top, #b16cf5, #134bb3);
    background-image: linear-gradient(to bottom, #b16cf5, #134bb3);
    padding-top: 7rem;
  }

  .wrap-home {
    padding: 4rem 0;
  }
</style>
