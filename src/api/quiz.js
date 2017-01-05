let
  codex1 =
    `const store = new Vuex.Store({
    state: {
      count: 0
    },
    mutations: {
      increment: state => state.count++,
      decrement: state => state.count--
    }
  });
`,

  codex2 =
    `var name = "John";
function sayHi() {
  alert(name);
}

setTimeout(function() {
  var name = "James";
  sayHi();
}, 1000);
`


const quiz = {
  title: 'My quiz',
  questions: [

    {
      text: 'Inside which HTML element do we put the JavaScript?',
      textcode: codex1,
      responses: [

        {
          text: '<javascript>',
          id: 1,
          mark: false
        },
        {
          text: '<scripting>',
          id: 2,
          mark: false
        },
        {
          text: '<js>',
          id: 3,
          mark: false
        },
        {
          text: '<script>',
          id: 4,
          mark: true
        }
      ],
      answer: 4

    },

    {
      text: "Что выведет этот код? ",
      textcode: codex2,
      responses: [

        {
          text: 'James',
          id: 1,
          mark: false
        },
        {
          text: 'John',
          id: 2,
          mark: true
        },
        {
          text: 'undefined',
          id: 3,
          mark: false
        },
        {
          text: 'error',
          id: 4,
          mark: false
        }
      ],
      answer: 2


    },

    {
      text: "Question 3",
      responses: [

        {
          text: 'Wrong, too bad.',
          id: 1,
          mark: false
        },
        {
          text: 'Right2',
          id: 2,
          mark: true
        },
        {
          text: 'Wrong, too bad.',
          id: 3,
          mark: false
        },
        {
          text: 'Wrong, too bad.',
          id: 4,
          mark: false
        }
      ],
      answer: 2


    },

    {
      text: "Question 4",
      responses: [

        {
          text: 'Wrong, too bad.',
          id: 1,
          mark: false
        },
        {
          text: 'Right2',
          id: 2,
          mark: true
        },
        {
          text: 'Wrong, too bad.',
          id: 3,
          mark: false
        },
        {
          text: 'Wrong, too bad.',
          id: 4,
          mark: false
        }
      ],
      answer: 2


    }


  ]
};


export default quiz
