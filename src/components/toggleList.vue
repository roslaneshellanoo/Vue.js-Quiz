<template>


  <div  class="toggle-list-item" :class="{ activeitem: isActive }">
    <div v-for="item in items">
    <div class="mu-sub-header cat-name">{{ item.category }}</div>

    <ul class="wrap-list">


        <li v-for="list in item.list">

          <span class="item-text">
            {{ list.text }}
          </span>

          <span class="item-icon" @mouseenter="handleHover" @mouseleave="handleHoverExit">
            <!--<span @click="toggle" >-->
            <mu-icon slot="right" value="info"/>
         </span>
          <div v-if="isActive" class="item-desc">
            {{list.desc}}
          </div>
        </li>


    </ul>


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
