<template>
  <div class="home">


    <div class="container">

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
         <p>fsdf</p>
            <button @click="openChange">Change open state...</button>
          </mu-content-block>
        </div>

        <!---------------------------------------------->

      </div>
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
</style>
