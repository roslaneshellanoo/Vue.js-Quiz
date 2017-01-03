<template>
    <mu-drawer @close="handleClose" :open="open" :docked="docked" class="app-drawer" :zDepth="1">

        <div class="logo text-center">
          <img src="../assets/exam.svg">
          <h4 class="gradient-text">
            <span>Code Quiz</span>
          </h4>
        </div>

        <mu-divider/>
        <mu-list class="sidebar-nav" @itemClick="docked ? '' : toggle()">
            <mu-list-item >
                <router-link to="/quiz">Javascript Quiz</router-link>
            </mu-list-item>
            <mu-list-item >
                <router-link to="/quiz">Vue.js Quiz</router-link>
            </mu-list-item>
            <mu-list-item title="Menu Item 3"/>

        </mu-list>



        <mu-list >

            <mu-list-item title="Javascript"  toggleNested>
                <mu-icon slot="left" value="inbox"/>

                <mu-list-item slot="nested" title="Jquery">
                    <mu-icon slot="left" value="grade"/>
                </mu-list-item>
              <mu-list-item slot="nested" title="React.js">
                <mu-icon slot="left" value="grade"/>
              </mu-list-item>
              <mu-list-item slot="nested" title="Vue.js">
                <mu-icon slot="left" value="grade"/>
              </mu-list-item>

            </mu-list-item>

          <mu-list-item title="Python"  toggleNested>
            <mu-icon slot="left" value="inbox"/>

            <mu-list-item slot="nested" title="Jquery">
              <mu-icon slot="left" value="grade"/>
            </mu-list-item>
            <mu-list-item slot="nested" title="React.js">
              <mu-icon slot="left" value="grade"/>
            </mu-list-item>
            <mu-list-item slot="nested" title="Vue.js">
              <mu-icon slot="left" value="grade"/>
            </mu-list-item>

          </mu-list-item>



        </mu-list>


    </mu-drawer>
</template>


<script>
    export default {

        data() {

            return{


            }
        },

        props: {

            open: {
                type: Boolean,
                default: true
            },
            docked: {
                type: Boolean,
                default: true
            }
        },

        methods: {
            handleClose () {
                this.$emit('close')
            }
        }
    }
</script>

<style>
    .mu-list.sidebar-nav .active {
        text-decoration: none;
    }
</style>
