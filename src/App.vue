<template>
  <div id="app" :class="{ dark_theme: theme_checked, light_theme: !theme_checked }">


    <sidebar-nav @close="toggleNav" :open="this.$store.state.open" :docked="docked"/>

    <mu-appbar title="" class="header-nav-bar" :class="{'nav-hide': !this.$store.state.open}">
      <mu-icon-button @click="openChange" icon='menu' slot="left"/>
      <!--<router-link to="/" exact>Home</router-link>-->
      <!--<router-link to="/quiz">Quiz</router-link>-->
      <!--<mu-icon-button icon='expand_more' slot="right"/>-->

      <div class="nav-title-logo text-center">
        <span>
          codequiz
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





    },

    destroyed () {
      window.removeEventListener('resize', this.Resize)
    },


  }
</script>

<style lang="sass">

  $main-grey: #757e8e;
  $main-blue: #3a5783;
  $title-color: #3c414a;

  html {
    font-family: 'PT Sans', sans-serif;
    font-size: 100%;
    line-height: 1;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    font-family: 'PT Sans', sans-serif !important;
    font-size: 15px;
    background-color: #f2f3f5;
    margin: 0;
    padding-top: 43px;
  }

  #app {
    padding: 0;
  }

  .container {
    max-width: 960px;
    margin: auto;
    padding: 0 1rem;
  }

  .wrapper {
    padding-left: 210px;
    transition: all 0.45s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .wrapper.nav-hide {
    padding-left: 0;
  }

  .mu-appbar.header-nav-bar {
    background: $main-grey;
    position: fixed;
    z-index: 999;
    right: 0;
    top: 0;
    width: auto;
    left: 210px;
    transition: all 0.45s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .header-nav-bar .mu-switch-label {
    font-size: 1rem;
    color: #fff;
  }

  .header-nav-bar.nav-hide {
    left: 0;
  }

  .header-nav-bar a {
    color: #fff !important;
    line-height: 24px;
    transition: color .15s ease;
    display: inline-block;
    vertical-align: middle;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: .075em;
    margin-right: 1.8em
  }

  .header-nav-bar a:hover {
    color: #fff
  }

  .header-nav-bar a.router-link-active {
    color: #fff;
    font-weight: 700
  }

  .header-nav-bar a:nth-child(6) {
    margin-right: 0
  }

  .header-nav-bar .github {
    color: #fff;
    font-size: .9em;
    margin: 0;
    float: right
  }

  .mu-drawer.app-drawer {
    width: 210px;
  }

  .logo {
    padding: 2rem 0;
  }

  .logo img {
    max-width: 80px;
  }

  .logo h4 {
    color: #463c7d;
    font-weight: 100;
    font-size: 3.2rem;
  }

  .dark_theme .logo h4 {
    color: #fff;
  }

  .view {
    max-width: 800px;
    margin: 0 auto;
    position: relative
  }

  .fade-enter-active, .fade-leave-active {
    transition: all .2s ease
  }

  .fade-enter, .fade-leave-active {
    opacity: 0
  }

  .text-code {
    font-family: monospace;
    white-space: pre;
    background-color: #1B2B34;
    color: #C3CAD5;
    padding: 0 2rem;
  }

  #app code[class*=language-], #app pre[class*=language-] {
    font: 14px/17px Consolas, Lucida Console, Menlo, Monaco, monospace;
    z-index: 0;
    text-shadow: none;
    margin: 0;
  }

  @media (max-width: 600px) {
    body {
      font-size: 14px
    }

    .header-nav-bar a {
      margin-right: 1em
    }

    .header-nav-bar .github {
      display: none
    }
  }

  h1.loader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 800px;
    background: rgba(0, 0, 0, 0.55);
    text-align: center;
    z-index: 999999;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    transition: all 350ms ease;
  }

  .md-card {
    width: 100%;
    max-width: 340px;
    margin: 1rem;
    display: inline-block;
    vertical-align: top;
    float: left;
  }

  .quiz .mu-raised-button-primary {
    background-color: $main-blue;
  }

  .quiz .mu-step-label.active .mu-step-label-circle,
  .quiz .mu-step-label.completed .mu-step-label-circle {
    background-color: $main-blue;
  }

  .quiz .mu-step-label.active .mu-step-label-icon,
  .quiz .mu-step-label.completed .mu-step-label-icon,
  .quiz .mu-radio-icon-checked{
    color: $main-blue;
  }

</style>
