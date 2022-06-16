import readlineSync from 'readline-sync';

const isEven = (num) => num % 2 === 0;
const getRandom = () => Math.floor(Math.random() * 100) + 1;

export default () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no" ');
  for (let count = 0; count < 3; count += 1) {
    const num = getRandom();
    const answer = readlineSync.question(`Question: ${num}\nYour answer: `);
    if ((isEven(num) && answer === 'yes') || (!isEven(num) && answer === 'no')) {
	    console.log('Correct!');
    } else {
      console.log(`'yes' is wrong answer ;(. Correct answer was 'no'`);
      return false;
    }
  }
  return true;
};
