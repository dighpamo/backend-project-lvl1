import readlineSync from 'readline-sync';

const getRandom = () => Math.floor(Math.random() * 100) + 1;
const operandArray = ['+', '-', '*', '/'];

export default (/** @type {any[]} */ calcGame) => {
  console.log(calcGame.task);
  for (let count = 0; count < 3; count += 1) {
    const firstNum = getRandom();
    const secondNum = getRandom();
    const operand = operandArray[Math.floor(Math.random() * 4)];
    const answer = readlineSync.question(`${calcGame.question} ${firstNum}${operand}${secondNum}${calcGame.answer} `);
    if ((isEven(num) && answer === 'yes') || (!isEven(num) && answer === 'no')) {
      console.log('Correct!');
    } else {
      console.log('\'yes\' is wrong answer ;(. Correct answer was \'no\'');
      return false;
    }
  }
  return true;
};
