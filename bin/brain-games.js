#!/usr/bin/env node

import quizzGame from './brain-even.js';
import cli from '../src/cli.js';

const name = cli();
const game = quizzGame();
const check = game ? `Congratulations, ${name}` : `Let's try again, ${name}!`;
console.log(check);
