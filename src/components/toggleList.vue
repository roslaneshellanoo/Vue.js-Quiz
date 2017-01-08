<template>
  <mu-list-item :title="item.text" class="toggle-list-item"  :class="{ activeitem: isActive }">


    <div @mouseenter="handleHover" @mouseleave="handleHoverExit">
      <mu-icon slot="right" value="info"/>
    </div>


    <div v-show="isActive" class="item-desc">
      {{item.desc}}
    </div>

  </mu-list-item>
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
