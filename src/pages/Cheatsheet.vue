<template>
<div class="wrap-ch">

  <div class="text-center">
    <h1>Javascript Cheat Sheet</h1>
  </div>


  <mu-row gutter>

    <mu-col width="100" tablet="50" desktop="33"
            class="list-of-items mu-paper mu-paper-round mu-paper-1">
      <div class="mu-sub-header">Array Methods</div>
      <toggle-list-item v-for="item in items" class="single-item"  :item="item"></toggle-list-item>
    </mu-col>



  </mu-row>


</div>
</template>

<script>

  import toggleList from '../components/toggleList.vue'
  import  items from '../api/cheatsheet'

  export default {

    name: 'cheatsheet',

    components: {
      'toggle-list-item': toggleList
    },

    data () {

      return {
        isActive: false,


        items: items


      }
    },



  }
</script>

<style>
  .list-of-items {
    margin-bottom: 2rem;
  }

  .single-item {

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
    cursor: pointer;
  }

  .toggle-list-item {
    position: relative;
  }

  .item-desc {
    position: absolute;
    background: rgba(0, 0, 0, 0.89);
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
