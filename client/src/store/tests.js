const tests = {
  test1: {
    id: 1,
    name: 'Test One',
    description: 'Test one is about Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas erat velit, commodo in hendrerit nec, cursus at purus.',
    questions: [
      {
        id: 1,
        question: '2 + 2',
        answer: '4',
        fakes: ['1', '2', '55', '100']
      },
      {
        id: 2,
        question: '5 + 5',
        answer: '10',
        fakes: ['1', '2', '55', '100']
      },
      {
        id: 3,
        question: '1 + 1',
        answer: '2',
        fakes: ['1', '4', '55', '100']
      },
      {
        id: 4,
        question: '7 + 7',
        answer: '14',
        fakes: ['1', '4', '55', '100', '111']
      }
    ]
  },
  test2: {
    id: 2,
    name: 'Test Two',
    description: 'Test two is about testing the blah blah of the blah blah blahddy blah',
    questions: [
      {
        id: 1,
        question: '20 + 20',
        answer: '40',
        fakes: ['11', '21', '551', '1001']
      },
      {
        id: 2,
        question: '50 + 50',
        answer: '100',
        fakes: ['12', '22', '552', '1002']
      },
      {
        id: 3,
        question: '10 + 10',
        answer: '20',
        fakes: ['13', '43', '553', '1003']
      }
    ]
  },
  test3: {
    id: 3,
    name: 'Test Three',
    description: 'Test three is agogo yoyo',
    questions: [
      {
        id: 1,
        question: '200 + 200',
        answer: '400',
        fakes: ['100', '200', '5500', '10000']
      },
      {
        id: 2,
        question: '500 + 500',
        answer: '1000',
        fakes: ['100', '200', '5500', '10000']
      },
      {
        id: 3,
        question: '100 + 100',
        answer: '200',
        fakes: ['100', '400', '5500', '10000']
      }
    ]
  }
}

export default tests
