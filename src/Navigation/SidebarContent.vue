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

    <mu-list>
      <mu-sub-header>Code Quizes</mu-sub-header>
      <mu-list-item title="Javascript Quiz" toggleNested :open="opennav">
        <mu-list-item slot="nested" title="Jquery"></mu-list-item>
        <mu-list-item slot="nested" title="React.js"></mu-list-item>
        <mu-list-item slot="nested" title="Vue.js"></mu-list-item>
      </mu-list-item>

      <mu-list-item title="Python Quiz" toggleNested :open="opennav">
        <mu-list-item slot="nested" title="Jquery"></mu-list-item>
        <mu-list-item slot="nested" title="React.js"></mu-list-item>
        <mu-list-item slot="nested" title="Vue.js"></mu-list-item>
      </mu-list-item>

    </mu-list>

    <mu-divider/>

    <mu-list>
      <mu-sub-header>Cheatsheets</mu-sub-header>

      <mu-list-item title="Jquery"></mu-list-item>
      <mu-list-item title="React.js"></mu-list-item>
      <mu-list-item title="Vue.js"></mu-list-item>


    </mu-list>

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
