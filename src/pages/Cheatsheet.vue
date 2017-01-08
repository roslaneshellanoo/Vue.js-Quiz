<template>
  <div>

    <h2>
      JS Cheatsheet
    </h2>
    <!--:class="{ activeclass: isActive }"-->
    <li v-for="item in basicObjects.arrayMethods"
         :class="{ activeclass: show }">

     <div class="item-text">
       {{item.text}}
     </div>
      <button @click="toggle(item)">show</button>

      <div v-show="item.show"  class="item-desc">
        {{item.desc}}
      </div>

    </li>



  </div>
</template>

<script>
  export default {
    data () {

      let basicObjects = {

        arrayMethods: [

          {
            text: 'concat()',
            desc: 'The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.',
            show: false
          },
          {
            text: 'copyWithin()',
            desc: 'The copyWithin() method shallow copies part of an array to another location in the same array and returns it, without modifying its size.',
            show: false
          },
          {
            text: 'from()',
            desc: 'The Array.from() method creates a new Array instance from an array-like or iterable object.',
            show: false
          },


        ],

        arrayProperties: [

        ]

      };
      return {
        basicObjects,
        touch: false,
        trigger: null,
        isActive: false
      }
    },

    methods: {

      toggle: function (item) {
        item.show = !item.show;
      }
    },

    // props: ['isActive']
  }
</script>

<style lang="css">
  .demo-icon-tip{
    display: block;
    cursor: default;
    position: relative;
    margin-bottom: 1rem;
  }

  .demo-tip-setting p{
    display: flex;
    align-items: center;
  }

  .demo-tip-setting .mu-radio {
    margin-left: 32px;
  }
  .demo-tip-setting .mu-radio:first-child{
    margin-left: 0;
  }
  .demo-tip-setting .mu-switch {
    margin-left: 8px;
  }

  /*.item-desc {*/
    /*display: none;*/
  /*}*/

</style>
