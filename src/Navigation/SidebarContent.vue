<template>

  <div>

    <mu-list class="sidebar-nav">
      <mu-list-item>
        <router-link to="/" exact>Home</router-link>
      </mu-list-item>
      <mu-list-item>
        <router-link to="/quiz">Javascript Quiz</router-link>
      </mu-list-item>
      <mu-list-item>
        <router-link to="/cheatsheet">JS Cheatsheet</router-link>
      </mu-list-item>
    </mu-list>



    <mu-list>

      <mu-list-item  title="Javascript Quiz" toggleNested :open="open">
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


  </div>



</template>

<script>
  export default {

    data() {
      return{
        open: false
      }
    },


    methods: {

    }
  }
</script>
