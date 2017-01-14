<template>


  <div  class="toggle-list-item" :class="{ activeitem: isActive }">

    {{ item.category }}

    <div v-for="list in item.list" class="wrap-cont">


      <div class="item-text">
      <span>
        {{ list.text }}
      </span>
        <span @mouseenter="handleHover" @mouseleave="handleHoverExit">
      <!--<span @click="toggle" >-->
        <mu-icon slot="right" value="info"/>
       </span>
      </div>


      <div v-if="isActive" class="item-desc">
        {{list.desc}}
      </div>
    </div>

  </div>


</template>

<script>
  export default {

    props: ['item'],

    methods: {
      toggle() {
        this.isActive = !this.isActive;
      },

      handleHover () {
        this.isActive = true
      },
      handleHoverExit () {
        this.isActive = false
      }

    },

    data() {
      return {
        isActive: false
      }
    },

  }
</script>
