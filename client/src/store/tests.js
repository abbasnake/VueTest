const tests = {
  test1: {
    id: 1,
    name: 'Test One',
    description: 'Test one is about blah bah blah',
    question1: {
      question: '2 + 2',
      answer: '4',
      fakes: ['1', '2', '55', '100']
    },
    question2: {
      question: '5 + 5',
      answer: '10',
      fakes: ['1', '2', '55', '100']
    },
    question3: {
      question: '1 + 1',
      answer: '2',
      fakes: ['1', '4', '55', '100']
    }
  },
  test2: {
    id: 2,
    name: 'Test Two',
    description: 'Test two is about bSDFSDFSDF',
    question1: {
      question: '20 + 20',
      answer: '40',
      fakes: ['10', '20', '550', '1000']
    },
    question2: {
      question: '50 + 50',
      answer: '100',
      fakes: ['10', '20', '550', '1000']
    },
    question3: {
      question: '10 + 10',
      answer: '20',
      fakes: ['10', '40', '550', '1000']
    }
  },
  test3: {
    id: 3,
    name: 'Test Three',
    description: 'Test three is agogo yoyo',
    question1: {
      question: '200 + 200',
      answer: '400',
      fakes: ['100', '200', '5500', '10000']
    },
    question2: {
      question: '500 + 500',
      answer: '1000',
      fakes: ['100', '200', '5500', '10000']
    },
    question3: {
      question: '100 + 100',
      answer: '200',
      fakes: ['100', '400', '5500', '10000']
    }
  }
}

export default tests
