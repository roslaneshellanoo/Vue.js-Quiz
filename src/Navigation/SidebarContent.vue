<template>

  <div>


    <mu-list class="sidebar-nav">
      <mu-list-item @click.native="openChange">
        <router-link   to="/" exact tag="div">Home</router-link>
      </mu-list-item>
      <mu-list-item  @click.native="openChange">
        <router-link to="/quiz" tag="div">
            Javascript Quiz
        </router-link>
      </mu-list-item>
      <mu-list-item @click.native="openChange">
        <router-link  to="/cheatsheet" tag="div">
          JS Cheatsheet
        </router-link>
      </mu-list-item>
    </mu-list>

    <mu-divider/>


  </div>


</template>

<script>
  import {store} from '../store/store'

  export default {

    data() {
      return {
        open: store.state.open,
        opennav: false,
      }
    },


    methods: {
      openChange() {
        this.$store.commit('openChange')
      },
    }
  }
</script>
