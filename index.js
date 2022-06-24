import words from './words.js';

export const generateRandomWord = (options) => {
    
    const getRandomWord = () => {
        return words[Math.floor(Math.random() * words.length)];
    };
    
    const getRandomWordExact = () => {
        const word = words[Math.floor(Math.random() * words.length)];
        const randomWord = [];
        while(randomWord.length == 0) {
            word = words[Math.floor(Math.random() * words.length)];
            if(word.length == options.exact) {
                return randomWord.push(words[randomIndex]);
            }
        }
        return (randomWord ? randomWord : console.log('Words length only between 2 to 22 !'));
    };

    const getRandomWordMinMax = () => {
        const word = words[Math.floor(Math.random() * words.length)];
        const randomWord = [];
        while(randomWord.length == 0) {
            word = words[Math.floor(Math.random() * words.length)];
            if(word.length >= options.min && words.length <= options.max) {
                return randomWord.push(words[randomIndex]);
            }
        }
        return (randomWord ? randomWord : console.log('Words length only between 2 to 22 !'));
    };
    
    if(!options) return getRandomWord();
    if(options.exact) return getRandomWordExact();
    if(options.min && options.max) return getRandomWordMinMax();
    return Error('WRONG_PARAMETERS');
}
 