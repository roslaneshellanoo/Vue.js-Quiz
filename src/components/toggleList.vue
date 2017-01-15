<template>



  <div :title="item.text" class="toggle-list-item" :class="{ activeitem: isActive }">

    <div class="item-text">
      <span>
        {{ item.text }}
      </span>
      <span @mouseenter="handleHover" @mouseleave="handleHoverExit">
      <!--<span @click="toggle" >-->
        <mu-icon slot="right" value="info" :size="18" />

      <em v-if="item.es2015" class="mu-badge mu-badge-float">
        <span>
          es2015
        </span>
      </em>

       </span>
    </div>


    <div v-if="isActive" class="item-desc">
      {{item.desc}}
    </div>

  </div>



</template>

<script>
  export default  {

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
        isActive: false,
        es2015: true
      }
    },

  }
</script>
