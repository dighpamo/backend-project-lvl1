import readlineSync from 'readline-sync';

export const questionDict = {
  name: 'May I have your name? ',
  evenGame: {
    task: 'Answer "yes" if the number is even, otherwise answer "no" ',
    question: 'Question:',
    answer: '\nYour answer:',
    // if ((isEven(num) && answer === game.varAnswers.correct) ||
    // (!isEven(num) && answer === game.varAnswers.correct))
    condition: '',
    varAnswers: {
      correct: 'yes',
      incorrect: 'no',
    },
  },
  calcGame: {
    task: 'What is the result of the expression?',
    question: 'Question:',
    answer: '\nYour answer:',
  },
};

export const cli = (/** @type {str} */ dictName) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question(dictName);
  console.log(`Hello, ${name}`);
  return name;
};
