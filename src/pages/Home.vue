<template>
  <div class="home">

    <p>{{ count }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>

    <div class="container">

      <div class="col-xs-12">

        <div class="">
          <h1 class="text-center">Simple ToDo made with Vue.js</h1>
          <mu-divider/>
          <mu-content-block>
            <div class="v-for-complex">
              <div id="myvueinstance" class="container">


                <mu-list :value="value" @change="handleChange">


                  <mu-list-item v-for="library in libraries"
                                :title="library.text"
                                :value="library"
                                v-bind:class="[{ active: library.isActive }]"
                  >


                    <mu-checkbox class="demo-checkbox"
                                 v-model="library.isActive"
                                 slot="left"
                                 uncheckIcon="visibility"
                                 checkedIcon="visibility_off"
                    />


                    <!--<mu-icon value="call" color="indigo" slot="left"/>-->


                    <mu-icon v-on:click="removeLibrary(library)"
                             value="remove_circle"
                             slot="right"
                             color="red700"


                    />


                  </mu-list-item>


                </mu-list>


                <br/>

                <div @keyup.enter="addLibrary">
                  <mu-text-field v-model="newlibrary"
                                 label="Add to library"
                                 labelFloat/>


                </div>


                <mu-raised-button v-on:click="addLibrary"
                                  label="Click to add library"
                                  class="demo-raised-button spacing-bottom"
                                  backgroundColor="blue500"/>


                <mu-raised-button v-on:click="deleteLastLibrary"
                                  label="Click to delete last library"
                                  class="demo-raised-button spacing-bottom"
                                  backgroundColor="deepOrange700"/>


                <mu-raised-button v-on:click="deleteLibraries"
                                  label="Click to delete all libraries"
                                  class="demo-raised-button spacing-bottom"
                                  backgroundColor="pink800"/>

                <p></p>

                <div class="row">


                </div>

              </div>

            </div>
          </mu-content-block>
        </div>

        <!---------------------------------------------->

      </div>
    </div>

  </div>
</template>


<script>
  import Vue from 'vue'
  import Vuex from 'vuex'

  Vue.use(Vuex);

  const store = new Vuex.Store({
    state: {
      count: 0
    },
    mutations: {
      increment: state => state.count++,
      decrement: state => state.count--
    }
  });

  export default {
    name: 'home',

    data() {

      return {

        libraries: [],
        newlibrary: '',
        value: 1,
        activeClass: 'active',

        isActive: false
      }

    },

    computed: {
      count () {
        return store.state.count
      }
    },

    methods: {

      increment () {
        store.commit('increment')
      },
      decrement () {
        store.commit('decrement')
      },


      handleChange (val) {
        this.value = val
      },
      addLibrary: function () {

        //trim() is used to remove whitespace from both ends of a string
        var task = this.newlibrary.trim();
        //if task is not an empty string
        if (task) {
          //Push an object containing the task to the taskList array
          this.libraries.push({
            text: task,
            isActive: false
          });
          //Reset newTask to an empty string so the input field is cleared
          this.newlibrary = "";


        }


      },

      deleteLibraries: function () {
        this.libraries = [];
      },

      deleteLastLibrary: function () {
        this.libraries.pop();
      },

      removeLibrary: function (library) {
        this.libraries.splice(this.libraries.indexOf(library), 1);
        this.libraries.indexOf(library)

      },

      markLibrary: function () {
        //this.libraries.classList.toggle('aaaaaaaaaa');
        this.isActive = !this.isActive;
      }
    },

  }
</script>


<style>
  .mu-list .active {
    text-decoration: line-through;
  }
</style>
