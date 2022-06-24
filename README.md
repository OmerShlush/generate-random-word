npm install --save generate-random-word


const { generateRandomWord } from 'generate-random-word';

generateRandomWord() -- // returns a generated random word

generateRandomWord({exact: 5}) -- // returns a generated random word by exact length 5

generateRandomWord({min: 3, max: 6}) -- // returns a generated random word between 3 to 6 

WRONG_PARAMETERS Error will be returned if params are wrong.

WRONG_WORD_LENGTH Error will be returned if length smaller than 2 or bigger than 22
