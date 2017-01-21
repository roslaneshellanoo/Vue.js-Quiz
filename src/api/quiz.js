let
  question3 =
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

  question2 =
    `var name = "John";
function sayHi() {
  alert(name);
}

setTimeout(function() {
  var name = "James";
  sayHi();
}, 1000);
`;


const quiz = {
  title: 'My quiz',
  questions: [

    {
      text: 'What is the correct keyword to declare a Variable?',

      responses: [

        {
          text: 'for',
          id: 1,
          mark: false
        },
        {
          text: 'foo',
          id: 2,
          mark: false
        },
        {
          text: 'bar',
          id: 3,
          mark: false
        },
        {
          text: 'var',
          id: 4,
          mark: true
        }
      ],
      answer: 4

    },

    {
      text: "Which of the following is a String ?",

      responses: [

        {
          text: '$This_is_string',
          id: 1,
          mark: false
        },
        {
          text: '"This is string"',
          id: 2,
          mark: true
        },
        {
          text: 'this is string...',
          id: 3,
          mark: false
        },
        {
          text: '@this is string',
          id: 4,
          mark: false
        }
      ],
      answer: 2


    },

    {
      text: "Question 3",
      textcode: question3,
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
