import { questionDict } from '../src/cli.js';
import { brainGames, name } from './brain-games.js';

const isEven = (/** @type {int} */ num) => num % 2 === 0;

brainGames(questionDict.evenGame, isEven);
