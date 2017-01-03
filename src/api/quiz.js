const quiz = {
  title: 'My quiz',
  questions: [

    {
      text: 'Inside which HTML element do we put the JavaScript?',
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
      text: "Question 2",
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
