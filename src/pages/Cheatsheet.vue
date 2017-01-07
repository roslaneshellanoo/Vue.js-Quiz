<template>


  <div>

    <h2>
      JS Cheatsheet
    </h2>

    <div v-for="item in objectMethods.arrayMethods" class="demo-icon-tip" ref="demo" @mouseenter="handleHover" @mouseleave="handleHoverExit">

     <span>{{item.text}}</span>
      <mu-tooltip :label="item.desc" :show="show" :trigger="trigger" :touch="touch" verticalPosition="top" horizontalPosition="center"/>


    </div>




    <div class="methods" v-for="item in objectMethods.arrayMethods">

      {{item.desc}}

    </div>



  </div>
</template>

<script>
  export default {
    data () {
      let objectMethods = {

        arrayMethods: [

          {
            text: 'concat()',
            desc: 'The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.'
          },
          {
            text: 'copyWithin()',
            desc: 'The copyWithin() method shallow copies part of an array to another location in the same array and returns it, without modifying its size.'
          },
          {
            text: 'from()',
            desc: 'The Array.from() method creates a new Array instance from an array-like or iterable object.'
          },


        ]


      }
      return {
        objectMethods,
        show: false,
        touch: false,
        trigger: null,
      }
    },
    mounted () {
      this.trigger = this.$refs.demo;

      console.log(this.objectMethods.arrayMethods.text)
    },
    methods: {
      handleHover () {
        this.show = true
      },
      handleHoverExit () {
        this.show = false
      }
    }
  }
</script>

<style lang="css">
  .demo-icon-tip{
    display: inline-block;
    cursor: default;
    position: relative;
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

  /*.mu-tooltip {*/

    /*max-width: 200px;*/
    /*height: auto !important;*/

  /*}*/
</style>
