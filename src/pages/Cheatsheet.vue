<template>
  <div class="wrap-ch">

    <div class="text-center">
      <h1>Javascript Cheat Sheet</h1>
    </div>


    <mu-row gutter>

      <mu-col width="100" tablet="50" desktop="33"
              class="list-of-items mu-paper mu-paper-round mu-paper-1">
        <div class="mu-sub-header">Array Methods</div>
        <toggle-list-item v-for="item in array_methods" class="single-item" :item="item"></toggle-list-item>
      </mu-col>

      <mu-col width="100" tablet="50" desktop="33"
              class="list-of-items mu-paper mu-paper-round mu-paper-1">
        <div class="mu-sub-header">Keywords</div>
        <toggle-list-item v-for="item in keywords" class="single-item" :item="item"></toggle-list-item>
      </mu-col>

    </mu-row>


  </div>
</template>

<script>

  import toggleList from '../components/toggleList.vue'
  import  {array_methods, keywords} from '../api/cheatsheet'

  export default {

    name: 'cheatsheet',

    components: {
      'toggle-list-item': toggleList
    },

    data () {

      return {
        //isActive: false,
        //es2015: false,

        array_methods,
        keywords


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
    font-size: 14px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: justify;
    justify-content: space-between;
    height: 35px;
    border-bottom: 1px solid rgba(158, 158, 158, 0.21);
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

  .mu-badge-circle {
    border-radius: 3px;
    padding: 0;
    width: 45px;
    height: 17px;
    overflow: hidden;
  }

  .item-text .mu-badge-float {
    position: absolute;
    top: 9px;
    right: 43px;
    background: #f9db3d;
    color: #000;
  }

  .mu-badge-float.es2016-badge {
    background: #FFC107;
  }

  .list-of-items .mu-sub-header {
    color: rgba(96, 125, 139, 0.72);
    font-size: 19px;
    line-height: 60px;
    padding-left: 16px;
    width: 100%;
    font-weight: 500;
    border-bottom: 1px dashed rgba(158, 158, 158, 0.21);
    margin-bottom: 1rem;
  }

  .dark_theme .list-of-items .mu-sub-header {
    color: rgba(193, 228, 245, 0.72);
  }

</style>
