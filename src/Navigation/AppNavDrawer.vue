<template>
  <mu-drawer @close="handleClose" :open="open" :docked="docked" class="app-drawer" :zDepth="1">

    <div class="logo text-center">
      <div class="pull-left" >
        <mu-icon-button iconClass="black" icon='menu' slot="left" />
      </div>

      <router-link to="/" exact>
        <!--<img src="../assets/js.svg">-->

        <h4 class="gradient-text">

          <span>CODEQUIZ</span>
        </h4>
      </router-link>

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
