<template>
<div class="wrap-ch">

  <div class="text-center">
    <h1>Javascript Cheat Sheet</h1>
  </div>
  <div class="list-of-items mu-paper mu-paper-round mu-paper-1">



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

        items: [

          {
            category: "fruits",
            list: [
              {
                text: 'applesconcat()',
                desc: 'The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.',
              },
              {
                text: 'applesindexOf()',
                desc: 'The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.',

              },
              {
                text: 'applesjoin()',
                desc: 'The join() method joins all elements of an array into a string.',
              },
              {
                text: 'appleslastIndexOf()',
                desc: 'The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.',
              },
              {
                text: 'applespop()',
                desc: 'The pop() method removes the last element from an array and returns that element. This method changes the length of the array.',

              },
              {
                text: 'applespush()',
                desc: 'The push() method adds one or more elements to the end of an array and returns the new length of the array.',
              },
            ]


          },

          {
            category: "cars",
            list: [
              {
                text: 'applesconcat()',
                desc: 'The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.',
              },
              {
                text: 'applesindexOf()',
                desc: 'The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.',

              },
              {
                text: 'applesjoin()',
                desc: 'The join() method joins all elements of an array into a string.',
              },
              {
                text: 'appleslastIndexOf()',
                desc: 'The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.',
              },
              {
                text: 'applespop()',
                desc: 'The pop() method removes the last element from an array and returns that element. This method changes the length of the array.',

              },
              {
                text: 'applespush()',
                desc: 'The push() method adds one or more elements to the end of an array and returns the new length of the array.',
              },
            ]


          }
        ],



      }
    },



  }
</script>

<style>
  /*.list-of-items {*/
    /*display: flex;*/
    /*flex-direction: column;*/
    /*max-width: 250px;*/
  /*}*/

  /*.single-item {*/
    /*max-width: 250px;*/
  /*}*/

  /*.item-text {*/
    /*font-size: 15px;*/
    /*display: flex;*/
    /*align-items: center;*/
    /*justify-content: space-between;*/
    /*height: 40px;*/
    /*border-bottom: 1px solid #e4e4e4;*/
    /*padding: 0 16px;*/
  /*}*/

  /*.list-of-items .mu-icon {*/
    /*display: block;*/
    /*cursor: pointer;*/
  /*}*/

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
    right: 0;
    border-radius: 7px;
    margin: 0 -1rem;

    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.72);
  }

  .item-desc:after {
    border-left: solid transparent 10px;
    border-right: solid transparent 10px;
    border-top: solid rgba(0, 0, 0, 0.81) 10px;
    bottom: -10px;
    content: " ";
    height: 0;
    right: 29px;
    margin-left: 0;
    position: absolute;
    width: 0;
  }


</style>
