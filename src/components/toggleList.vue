<template>
  <div class="toggle-list-item"  :class="{ activeitem: isActive }">
    <div>
      {{item.text}}
    </div>

    <button @mouseenter="handleHover" @mouseleave="handleHoverExit">show</button>

    <div v-show="isActive" class="item-desc">
      {{item.desc}}
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
