<template>
  <mu-drawer @close="handleClose" :open="open" :docked="docked" class="app-drawer" :zDepth="1">

    <mu-appbar class="sidebar-nav-appbar logo text-left" :zDepth="0">
      <mu-icon-button @click="openChange" iconClass="black" icon='menu' slot="left"/>
      <h4 class="logo-title">
        <span>Qwizio</span>
      </h4>
    </mu-appbar>



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

      handleClose: () => {
        this.$emit('close')
      },

      openChange() {
        this.$store.commit('openChange')
      },

    },

  }
</script>

<style>
  .mu-list.sidebar-nav .active {
    text-decoration: none;
  }
</style>
