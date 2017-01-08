<template>
  <mu-paper  class="list-of -items">

    <div v-for="item in items" class="single-item">

      <toggle-list-item  :item="item"></toggle-list-item>

    </div>

  </mu-paper>
</template>

<script>

  import toggleList from '../components/toggleList.vue'

  export default {

    name: 'cheatsheet',

    components: {
      'toggle-list-item': toggleList
    },

    data () {

      return {
        isActive: false,

        items: [
          {
            text: 'Foo',
            desc: 'The Array.from() method creates a new Array instance from an array-like or iterable object.',
          },
          {
            text: 'Bar',
            desc: 'The Array.from() method creates a new Array instance from an array-like or iterable object.',

          }
        ],

      }
    },



  }
</script>

