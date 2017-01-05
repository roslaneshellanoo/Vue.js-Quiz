<template>
  <div class="quiz">
    <div class="container">

      <h1 class="text-center gradient-text fw300">Javascript Quiz</h1>

      <mu-stepper :activeStep="activeStep">
        <mu-step>
          <mu-step-label>

          </mu-step-label>
        </mu-step>
        <mu-step>
          <mu-step-label>

          </mu-step-label>
        </mu-step>
        <mu-step>
          <mu-step-label>

          </mu-step-label>
        </mu-step>
        <mu-step>
          <mu-step-label>

          </mu-step-label>
        </mu-step>


      </mu-stepper>


      <!-- index is used to check with current question index -->

      <div v-for="(question, index) in quiz.questions">
        <!-- Hide all questions, show only the one with index === to current question index -->
        <div v-show="index === questionIndex">
          <br>

          <h4>
            <!--{{ questionIndex +1 }}.-->
            <span v-html="question.text">

                        </span>
          </h4>
          <div class="wrap-text-code">


             <pre><code class="language-js">
              {{ question.textcode }}</code>
            </pre>



          </div>


          <mu-divider/>
          <br>
          <ul class="list-reset">
            <li v-for="response in question.responses">


              <label class="mu-radio spacing-bottom">


                <input type="radio"
                       :value="response.id"
                       :name="index"
                       v-model="userResponses[index]"

                >


                <div class="mu-radio-wrapper">
                  <div class="mu-ripple-wrapper mu-radio-ripple-wrapper"></div>
                  <!---->
                  <div class="mu-radio-icon">
                    <i aria-hidden="true"
                       class="mu-icon material-icons mu-radio-icon-uncheck radio_button_unchecked">radio_button_unchecked</i>
                    <i aria-hidden="true"
                       class="mu-icon material-icons mu-radio-icon-checked radio_button_checked">radio_button_checked</i>
                  </div>
                  <div class="mu-radio-label">
                    {{ response.text }}
                  </div>
                </div>
                <!---->
              </label>


            </li>
          </ul>
          <br>
          <!-- The two navigation buttons -->
          <!-- Note: prev is hidden on first question -->
          <mu-raised-button v-if="questionIndex > 0" v-on:click="prev" label="Prev"
                            class="demo-raised-button"/>

          <mu-raised-button @click="next" label="Next"
                            class="demo-raised-button"
                            primary/>

        </div>
      </div>

      <div v-show="questionIndex === quiz.questions.length">
        <h2>
          Quiz finished
        </h2>
        <p>
          Total score: {{ score() }} / {{ quiz.questions.length }}
        </p>
        <mu-raised-button v-on:click="refresh" label="Reload Quiz"
                          class="demo-raised-button"
                          primary/>

      </div>


      <mu-snackbar v-if="snackbar" message="Choose an answer..." action="close"
                   @actionClick="hideSnackbar"
                   @close="hideSnackbar"/>

      <mu-toast v-if="toast" :message="this.userResponses.toString()"
                @close="hideToast"/>


    </div>
  </div>
</template>


<script>
  import Prism from '../plugins/prismjs'
  import quiz from  '../api/quiz.js'

  export default {

    name: 'quiz',
    loading: false,

    data() {

      return {

        activeStep: 0,
        quiz: quiz,
        // Store current question index
        questionIndex: 0,
        // An array initialized with "false" values for each question
        // It means: "did the user answered correctly to the question n?" "no".
        userResponses: Array(quiz.questions.length).fill(false),

        snackbar: false,
        toast: false

      }

    },

    mounted: function () {

//      let pre = document.getElementsByTagName("pre");
//      for (let i = 0, len = pre.length; i < len; i++) {
//        let text = pre[i].firstChild.nodeValue;
//        pre[i].firstChild.nodeValue = text.replace(/^\n+|\n+$/g, "");
//      }


      Prism.highlightAll();

    },

    methods: {

      refresh: function () {

        this.questionIndex = 0;
        this.activeStep = 0;

      },

      // Go to next question
      next: function () {

        if (this.userResponses[this.activeStep] === false) {
          this.showSnackbar();
        }
        else {
          this.questionIndex++;
          this.activeStep++;
          this.showToast();
        }

      },

      // Go to previous question
      prev: function () {
        this.questionIndex--;
        this.activeStep--;
      },

      reload: function () {
        this.questionIndex--;

      },
      // Return "true" count in userResponses
      score: function () {
        let right_answers = 0;

        let quizObj = this.quiz;

        this.userResponses.forEach(function (value, index) {

          if (quizObj.questions[index].answer == value) {

            right_answers++;

          }

        });

        return right_answers;

      },

      showSnackbar () {
        this.snackbar = true;
        if (this.snackTimer) {
          clearTimeout(this.snackTimer);
          this.snackTimer = setTimeout(() => {
            this.snackbar = false
          }, 2000)
        }
      },
      hideSnackbar () {
        this.snackbar = false
        if (this.snackTimer) clearTimeout(this.snackTimer)
      },
      showToast () {
        this.toast = true
        if (this.toastTimer) clearTimeout(this.toastTimer)
        this.toastTimer = setTimeout(() => {
          this.toast = false
        }, 2000)
      },
      hideToast () {
        this.toast = false
        if (this.toastTimer) clearTimeout(this.toastTimer)
      }


    },


  }
</script>













