<template>
  <div class="home">
    <div class="col-xs-12">


      <div class="wrap-home top-block">
        <div id="particles-js"></div>
        <div class="text-center mb3">
          <img src="../assets/logo.svg" alt="" style="max-width: 300px">
        </div>

        <h4 class="home-title text-center white mb4">
          Test your skills and <br> improve your knowledge!
        </h4>
      </div>

      <div class="middle-block">
        <div class="container">

          <div class="choose-title">
            <h4 class="main-grey">
              Choose Quiz
            </h4>
          </div>

          <div class="py4">
            <mu-row gutter>


              <mu-col width="100" tablet="30" desktop="30">
                <router-link to="/quiz" >
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
    </div>

  </div>
</template>


<script>

  import {particlesJS} from '../plugins/particles'
  import {particlesData} from '../plugins/particles-data'
  import {store} from '../store/store'

  export default {
    name: 'home',

    data() {
      return {
        open: store.state.open,
        sharedState: store.state
      }

    },


    methods: {
      openChange() {
        this.$store.commit('openChange')
      },
    },

    mounted() {

      this.$store.state.open = false;
      this.$nextTick(function() {
        window.particlesJS("particles-js", particlesData);
      });
    },

    updated() {
      // window.particlesJS("particles-js", particlesData);
    }

  }
</script>


<style lang="sass">

  body {
    padding-top: 0;
  }

  .home {
    background: #d4ddec;
  }

  .home .container {
    position: relative;
    background: #ffffff;
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
  }

  .mu-list .active {
    text-decoration: line-through;
  }

  .wrap-home {
    background-color: #b16cf5;
    background-image: linear-gradient(to left, #b16cf5, #134bb3);
    background-color: #b16cf5;
    background-image: radial-gradient(circle farthest-side at center bottom, #4ab3de, #134bb3 125%);
    /*background: url(http://www.metalinjection.net/wp-content/uploads/2014/07/space-metal.jpg);*/
    /*background-size: cover;*/
    background-attachment: fixed;
    padding: 9rem 0;
    position: relative;
  }

  .home-title {
    font-size: 36px;
  }

  .choose-title {
    position: absolute;
    top: -7.7rem;
    background: #fff;
    width: 100%;
    left: 0;
    border-bottom: 2px solid #f1f1f1;
    padding: 1.5rem 3rem;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  .middle-block .col {
    margin-bottom: 3rem;
  }

  .middle-block .mu-card {
    border-radius: 5px;
    transition: all 350ms ease;
  }

  .middle-block .mu-card:hover {
    box-shadow: 0 3px 10px rgba(0,0,0,.156863), 0 3px 10px rgba(0,0,0,.227451);
  }
</style>
