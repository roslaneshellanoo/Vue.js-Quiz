<template>

  <div>

    <mu-list class="sidebar-nav">
      <mu-list-item>
        <router-link @click="openChange" to="/" exact tag="li">Home</router-link>
      </mu-list-item>
      <mu-list-item>
        <router-link @click="openChange" to="/quiz" tag="li">

            Javascript Quiz


        </router-link>
      </mu-list-item>
      <mu-list-item>
        <router-link @click="openChange" to="/cheatsheet" tag="li">JS Cheatsheet</router-link>
      </mu-list-item>
      <mu-list-item>
        <router-link @click="openChange" to="/todo" tag="li">Vue.js ToDo</router-link>
      </mu-list-item>
    </mu-list>

    <mu-divider/>

    <mu-list>
      <mu-sub-header>Code Quizes</mu-sub-header>
      <mu-list-item title="Javascript Quiz" toggleNested :open="open">
        <mu-list-item slot="nested" title="Jquery"></mu-list-item>
        <mu-list-item slot="nested" title="React.js"></mu-list-item>
        <mu-list-item slot="nested" title="Vue.js"></mu-list-item>
      </mu-list-item>

      <mu-list-item title="Python Quiz" toggleNested :open="open">
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
      }
    },


    methods: {
      openChange() {
        this.$store.commit('openChange')
      },
    }
  }
</script>
