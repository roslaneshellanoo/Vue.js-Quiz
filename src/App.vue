<template>
  <div id="app" :class="[ this.$route.name + ' page' , {dark_theme: theme_checked, light_theme: !theme_checked}]">


    <sidebar-nav @close="toggleNav" :open="this.$store.state.open" :docked="docked"/>

    <mu-appbar title="" class="header-nav-bar" :class="{'nav-hide': !this.$store.state.open}">
      <mu-icon-button @click="openChange" icon='menu' slot="left"/>
      <!--<router-link to="/" exact>Home</router-link>-->
      <!--<router-link to="/quiz">Quiz</router-link>-->
      <!--<mu-icon-button icon='expand_more' slot="right"/>-->

      <div class="nav-title-logo text-left">
        <span>
          CODEQUIZ
        </span>
      </div>


      <mu-switch @change="checkNum" label="Change Theme" v-model="theme_checked" slot="right"
                 class="theme-switch"/>

    </mu-appbar>

    <div class="wrapper" :class="{'nav-hide': !this.$store.state.open}">

        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>


    </div>


  </div>
</template>

<script>
  import light from '!raw-loader!muse-ui/dist/theme-default.css'
  import dark from '!raw-loader!muse-ui/dist/theme-dark.css'


  import Home from './pages/Home.vue'
  import AppNavDrawer from './Navigation/AppNavDrawer.vue'

  import {store} from './store/store'


  export default {
    name: 'app',

    components: {
      'sidebar-nav': AppNavDrawer
    },
    data() {
      return {
        routeClass: this.$route.name,
        sharedState: store.state,
        open: true,
        docked: true,
        theme: 'dark',
        themes: {
          light,
          dark
        },
        theme_checked: false
      };
    },


    methods: {
      openChange() {
        this.$store.commit('openChange')
      },


      toggleNav () {
        this.open = !this.open;

      },

      getThemeStyle: function () {
        const themeId = 'muse-theme';
        let styleEl = document.getElementById(themeId);
        if (styleEl) return styleEl
        styleEl = document.createElement('style');
        styleEl.id = themeId;
        document.body.appendChild(styleEl);
        return styleEl
      },

      changeTheme: function (theme) {
        this.theme = theme;
        const styleEl = this.getThemeStyle();
        styleEl.innerHTML = this.themes[theme] || '';
        console.log(styleEl)
      },

      checkNum: function () {
        if (this.theme_checked === true) {
          this.changeTheme('light')
        } else {
          this.changeTheme('dark');

        }
      },

      Resize(event) {
          if(window.innerWidth > 993) {
            this.open = true;
          }
          else {
            this.open = false;
          }

      },


    },



    mounted() {

      window.addEventListener('resize', this.Resize);

      //Init
      this.Resize()
      console.info(this.$route.name)


    },

    destroyed () {
      window.removeEventListener('resize', this.Resize)
    },


  }
</script>

<style lang="sass">

  .nav-title-logo.text-left {
    font-size: 15px;
  }


</style>
