#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { cli, questionDict } from '../src/cli.js';

const getRandom = () => Math.floor(Math.random() * 100) + 1;

export const name = cli(questionDict.name);

export const brainGames = (/** @type {any[]} */ game, /** @type {function} */ func) => {
  console.log(game.task);
  for (let count = 0; count < 3; count += 1) {
    const num = getRandom();
    const answer = readlineSync.question(`${game.question} ${num}${game.answer} `);
    console.log(answer);
    if ((func(num) && answer === game.varAnswers.correct)
       || (!func(num) && answer === game.varAnswers.incorrect)) {
      console.log('Correct!');
    } else {
      console.log(`${game.varAnswers.correct} is wrong answer ;(. Correct answer was ${game.varAnswers.incorrect}`);
      return console.log(`Let's try again, ${name}`);
    }
  }
  return console.log(`Congratulations, ${name}`);
};
