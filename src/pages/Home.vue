<template>
  <div class="home" :class="{scrolled: scrolled}">
    <div class="col-xs-12">


      <div class="wrap-home top-block" :style="{'background-image': `url(${require('../assets/cosmos-2.jpg')})`}">
        <div id="particles-js"></div>
        <div class="text-center mb3">
          <img src="../assets/logo.svg" alt="" style="max-width: 300px">
        </div>

        <h4 class="home-title text-center white mb4">
          Test your skills and <br> improve your knowledge!
        </h4>
      </div>


      <div class="middle-block">
        <div class="container white-bg">

          <div class="choose-title">
            <h4 class="main-grey">
              Choose Quiz
            </h4>
          </div>

          <div class="wrap-main-boxes py4">
            <mu-row gutter>


              <mu-col width="100" tablet="30" desktop="30">
                <router-link to="/quiz">
                  <mu-card>
                    <mu-card-text>
                      <img class="pull-left mr3" src="../assets/code-icons/js.svg"/>

                      <h4>
                        Javascript
                      </h4>


                      <h4 class="main-grey">
                        24 Questions
                      </h4>
                    </mu-card-text>
                    <mu-card-actions>
                      <!--<mu-flat-button label="click here"/>-->

                    </mu-card-actions>
                  </mu-card>
                </router-link>
              </mu-col>


              <mu-col width="100" tablet="30" desktop="30">
                <mu-card>
                  <mu-card-text>
                    <img class="pull-left mr3" src="../assets/code-icons/vuejs.svg"/>
                    <h4>
                      VueJS
                    </h4>
                    <h4 class="main-grey">
                      34 Questions
                    </h4>
                  </mu-card-text>
                  <mu-card-actions>
                    <!--<mu-flat-button label="click here"/>-->

                  </mu-card-actions>
                </mu-card>
              </mu-col>

              <mu-col width="100" tablet="30" desktop="30">
                <mu-card>
                  <mu-card-text>
                    <img class="pull-left mr3" src="../assets/code-icons/nodejs.svg"/>
                    <h4>
                      NodeJS
                    </h4>
                    <h4 class="main-grey">
                      17 Questions
                    </h4>
                  </mu-card-text>
                  <mu-card-actions>
                    <!--<mu-flat-button label="click here"/>-->

                  </mu-card-actions>
                </mu-card>
              </mu-col>

            </mu-row>

            <mu-row gutter>

              <mu-col width="100" tablet="30" desktop="30">
                <mu-card>
                  <mu-card-text>
                    <img class="pull-left mr3" src="../assets/code-icons/react.svg"/>
                    <h4>
                      React
                    </h4>
                    <h4 class="main-grey">
                      24 Questions
                    </h4>
                  </mu-card-text>
                  <mu-card-actions>
                    <!--<mu-flat-button label="click here"/>-->

                  </mu-card-actions>
                </mu-card>
              </mu-col>

              <mu-col width="100" tablet="30" desktop="30">
                <mu-card>
                  <mu-card-text>
                    <img class="pull-left mr3" src="../assets/code-icons/python.svg"/>
                    <h4>
                      Python
                    </h4>
                    <h4 class="main-grey">
                      24 Questions
                    </h4>
                  </mu-card-text>
                  <mu-card-actions>
                    <!--<mu-flat-button label="click here"/>-->

                  </mu-card-actions>
                </mu-card>
              </mu-col>

              <mu-col width="100" tablet="30" desktop="30">
                <mu-card>
                  <mu-card-text>
                    <img class="pull-left mr3" src="../assets/code-icons/jquery.svg"/>
                    <h4>
                      jQuery
                    </h4>
                    <h4 class="main-grey">
                      24 Questions
                    </h4>
                  </mu-card-text>
                  <mu-card-actions>
                    <!--<mu-flat-button label="click here"/>-->

                  </mu-card-actions>
                </mu-card>
              </mu-col>

            </mu-row>

          </div>

        </div>
      </div>


      <div class="wrap-main-info my4">
        <div class="container white-bg">
          <div class="main-info py4">
            <mu-row gutter>
              <mu-col width="100" tablet="50" desktop="45">
                <img src="../assets/temp-image.svg" alt="">
              </mu-col>
              <mu-col width="100" tablet="50" desktop="55">
                <h5 class="f24">
                  There are many kinds of narratives and organizing principles. Science is driven by evidence gathered
                  in experiments.
                  <br>
                  <br>
                  By the falsification their existence is derived from their effects.
                </h5>
              </mu-col>
            </mu-row>
          </div>
        </div>
      </div>

      <div class="wrap-cheatsheet full-width"  :style="{'background-image': `url(${require('../assets/space-three.jpg')})`}">
        <div class="overlay-block">
          <div class="container">
            <div class="wrap-image text-center">
              <!--<img src="../assets/code-icons/coding.svg" width="200" alt="">-->
              <h2 class="white uppercase">Check our Cheatsheet</h2>
              <mu-raised-button label="Cheatsheet" class="demo-raised-button" secondary/>
            </div>
          </div>
        </div>
      </div>


    </div>

  </div>
</template>


<script>

  import {particlesJS} from '../plugins/particles'
  import {particlesData} from '../plugins/particles-data'
  import {store} from '../store/store'

  export default {
    name: 'home',
    metaInfo: {
      title: 'Quizio - Test your code skills',
      // override the parent template and just use the above title only
      titleTemplate: null
    },
    data() {
      return {
        // open: store.state.open,
        // sharedState: store.state
        scrolled: false
      }

    },

    methods: {
      handleScroll() {
        if (window.scrollY > 50) {
          this.scrolled = true
        }
        else {
          this.scrolled = false
        }

      }
    },

    mounted() {

      // this.$store.state.open = false;
      window.addEventListener('scroll', this.handleScroll);

      this.$nextTick(function () {
        window.particlesJS("particles-js", particlesData);
      });
    },

    updated() {
      // window.particlesJS("particles-js", particlesData);
    }

  }
</script>


<style lang="scss">

  body {
    padding-top: 0;
  }

  .home {
    background: #f5f5fa;
  }

  .home .container {
    position: relative;
  }

  .home #particles-js {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .home #particles-js canvas {
    width: 100%;
    height: 100%;
  }

  @media (min-width: 993px) {
    .home .container {
      padding: 0 5rem;
    }
  }

  .home .mu-appbar.header-nav-bar {
    background: transparent;
    box-shadow: none;
    transition: all 350ms ease;
  }

  .home .mu-appbar.header-nav-bar.scrolled {
    background: linear-gradient(to right, #134bb3, #4ab3de);
    box-shadow: 0 1px 6px rgba(0, 0, 0, .117647), 0 1px 4px rgba(0, 0, 0, .117647);
  }

  .mu-list .active {
    text-decoration: line-through;
  }




</style>
