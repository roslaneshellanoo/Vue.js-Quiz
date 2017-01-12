<template>

  <div  class="toggle-list-item" :class="{ activeitem: isActive }">

    <div class="item-text">

      <div class="mu-sub-header">{{ item.category }}</div>

      <div>
        <div v-for="list in item.list">
          {{ list.text }}
          <span @mouseenter="handleHover" @mouseleave="handleHoverExit">
      <!--<span @click="toggle" >-->
        <mu-icon slot="right" value="info"/>
                <div v-if="isActive" class="item-desc">
      {{list.desc}}
    </div>
       </span>
        </div>
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
