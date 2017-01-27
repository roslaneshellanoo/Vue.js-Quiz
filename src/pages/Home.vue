<template>
  <div class="home">



    <div class="container">

      <div class="col-xs-12">

        <div class="">
          <h1 class="text-center gradient-text">
          Test your skills and improve your knowledge!
          </h1>
          <div class="text-center">
            <img src="../assets/coding.svg" alt="" style="max-width: 300px">
          </div>
          <mu-divider/>
          <mu-content-block>
         <p>fsdf</p>
          </mu-content-block>
        </div>

        <!---------------------------------------------->

      </div>
    </div>

  </div>
</template>


<script>


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

    },

    methods: {



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
