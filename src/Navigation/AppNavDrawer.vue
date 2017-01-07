<template>
  <mu-drawer @close="handleClose" :open="open" :docked="docked" class="app-drawer" :zDepth="1">

    <div class="logo text-center">

      <router-link to="/" exact>
        <img src="../assets/exam.svg">
      </router-link>
      <h4 class="gradient-text">
        <span>Codexam</span>
      </h4>
    </div>

    <mu-divider/>


    <sidebar-content></sidebar-content>


  </mu-drawer>
</template>


<script>

  import SidebarContent from './SidebarContent.vue'

  export default {

    components: {
      'sidebar-content': SidebarContent
    },

    data() {

      return {

      }
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

      handleClose: ()=> {
        this.$emit('close')
      },

    },

  }
</script>

<style>
  .mu-list.sidebar-nav .active {
    text-decoration: none;
  }
</style>
