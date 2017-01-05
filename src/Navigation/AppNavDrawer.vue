<template>
  <mu-drawer @close="handleClose" :open="open" :docked="docked" class="app-drawer" :zDepth="1">

    <div class="logo text-center">
      <img src="../assets/exam.svg">
      <h4 class="gradient-text">
        <span>Code Quiz</span>
      </h4>
    </div>

    <mu-divider/>
    <mu-list class="sidebar-nav" @itemClick="docked ? '' : toggle()">
      <mu-list-item>
        <router-link to="/" exact>Home</router-link>
      </mu-list-item>
      <mu-list-item>
        <router-link to="/quiz">Javascript Quiz</router-link>
      </mu-list-item>
    </mu-list>


    <mu-list>

      <mu-list-item  title="Javascript Quiz" toggleNested>
        <mu-list-item slot="nested" title="Jquery"></mu-list-item>
        <mu-list-item slot="nested" title="React.js"></mu-list-item>
        <mu-list-item slot="nested" title="Vue.js"></mu-list-item>
      </mu-list-item>

      <mu-list-item title="Python Quiz" toggleNested>
        <mu-list-item slot="nested" title="Jquery"></mu-list-item>
        <mu-list-item slot="nested" title="React.js"></mu-list-item>
        <mu-list-item slot="nested" title="Vue.js"></mu-list-item>
      </mu-list-item>

    </mu-list>

  </mu-drawer>
</template>


<script>
  export default {

    data() {

      return {}
    },

    props: {

      open: {
        type: Boolean,
        default: true
      },
      docked: {
        type: Boolean,
        default: true
      }
    },

    methods: {
      handleClose () {
        this.$emit('close')
      }
    }
  }
</script>

<style>
  .mu-list.sidebar-nav .active {
    text-decoration: none;
  }
</style>
