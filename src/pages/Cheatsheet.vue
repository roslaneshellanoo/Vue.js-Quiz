<template>
<div class="wrap-ch">
  <div class="text-center">
    <h1>Javascript Cheat Sheet</h1>
  </div>
  <div class="list-of-items mu-paper mu-paper-round mu-paper-1">
    <div class="mu-sub-header">Array Methods</div>

    <div v-for="item in items" class="single-item">

      <toggle-list-item  :item="item"></toggle-list-item>

    </div>

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






//        reverse()
//        shift()
//        slice()
//        sort()
//        splice()
//        toString()
//        unshift()
//        valueOf()

        items: [
          {
            text: 'concat()',
            desc: 'The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.',
          },
          {
            text: 'indexOf()',
            desc: 'The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.',

          },
          {
            text: 'join()',
            desc: 'The Array.from() method creates a new Array instance from an array-like or iterable object.',
          },
          {
            text: 'lastIndexOf()',
            desc: 'The Array.from() method creates a new Array instance from an array-like or iterable object.',
          },
          {
            text: 'pop()',
            desc: 'The Array.from() method creates a new Array instance from an array-like or iterable object.',

          },
          {
            text: 'push()',
            desc: 'The Array.from() method creates a new Array instance from an array-like or iterable object.',
          },
        ],

      }
    },



  }
</script>

<style>
  .list-of-items {
    display: flex;
    flex-direction: column;
    max-width: 250px;
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
    padding: 0 16px;
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
    bottom: 4.2rem;
    right: 17px;
    border-radius: 7px 7px 0 7px;
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
