const { words } = require('./words');
 
const generateRandomWord = (options) => {
    const getRandomWord = () => {
        return words[Math.floor(Math.random() * words.length)];
    };
    const getRandomWordExact = () => {
        let word = words[Math.floor(Math.random() * words.length)];
        if(options.exact < 2 || options.exact > 22)
            return Error('WRONG_WORD_LENGTH');
        while(word.length != options.exact)
            word = words[Math.floor(Math.random() * words.length)];
        return word;
    };

    const getRandomWordMinMax = () => {
        let word = words[Math.floor(Math.random() * words.length)];
        if(options.min < 2 || options.min > 22 || options.max < 2 || options.max > 22)
            return Error('WRONG_WORD_LENGTH');
        while(word.length < options.min || word.length > options.max)
            word = words[Math.floor(Math.random() * words.length)];
        return word;
    };
    
    if(!options) return getRandomWord();
    if(options.min && options.max) return getRandomWordMinMax();
    if(options.exact) return getRandomWordExact();
    return Error('WRONG_PARAMETERS');
}

module.exports = generateRandomWord;