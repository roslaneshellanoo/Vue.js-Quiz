<template>


  <div class="list-of-items">
    <div class="text-center">
      <h1>Javascript Cheat Sheet</h1>
    </div>

    <div v-for="item in items" class="single-item">

      <toggle-list-item  :item="item"></toggle-list-item>

    </div>

  </div>
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

<style>
  .list-of-items {
    display: flex;
    flex-direction: column;
  }

  .single-item {
    max-width: 250px;
  }

  .item-text {
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 40px;
    border-bottom: 1px solid #e4e4e4;
  }

  .list-of-items .mu-icon {
    display: block;
  }

  .toggle-list-item {
    position: relative;
  }

  .item-desc {
    position: absolute;
    background: rgba(0, 0, 0, 0.81);
    color: #fff;
    padding: 1.5rem;
    display: block;
    top: -9.4rem;
    bottom: auto;
    right: 2px;
    border-radius: 7px 7px 0px 7px;
  }

  .item-desc:after {
    border-left: solid transparent 10px;
    border-right: solid transparent 10px;
    border-top: solid rgba(0, 0, 0, 0.81) 10px;
    bottom: -10px;
    content: " ";
    height: 0;
    right: 0;
    margin-left: -13px;
    position: absolute;
    width: 0;
  }

</style>
