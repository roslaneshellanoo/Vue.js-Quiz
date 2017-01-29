<template>
  <div class="home">


      <div class="col-xs-12">

        <div class="">
          <h1 class="text-center gradient-text">
          Test your skills and improve your knowledge!
          </h1>
          <div class="text-center">
            <img src="../assets/coding.svg" alt="" style="max-width: 300px">
          </div>
          <mu-divider/>
          <mu-content-block>

          </mu-content-block>
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
  .mu-list .active {
    text-decoration: line-through;
  }

  .home {
    background-color: #b16cf5;
    background-image: -webkit-linear-gradient(top, #b16cf5, #134bb3);
    background-image: -moz-linear-gradient(top, #b16cf5, #134bb3);
    background-image: -o-linear-gradient(top, #b16cf5, #134bb3);
    background-image: linear-gradient(to bottom, #b16cf5, #134bb3);
  }
</style>
