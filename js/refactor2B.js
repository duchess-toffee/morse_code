class TranslateToMorse{
    static alphaToCode = {
        "a": [1, 0],
        "b": [1, 0, 0, 0],
        "c": [1, 0, 1, 0],
        "d": [1, 0, 0],
        "e": [0],
        "f": [0, 0, 1, 0],
        "g": [1, 1, 0],
        "h": [0, 0, 0, 0],
        "i": [0, 0],
        "j": [0, 1, 1, 1],
        "k": [1, 0, 1],
        "l": [0, 1, 0, 0],
        "m": [1, 1],
        "n": [1, 0],
        "o": [1, 1, 1],
        "p": [0, 1, 1, 0],
        "q": [1, 1, 0, 1],
        "r": [0, 1, 0],
        "s": [0, 0, 0],
        "t": [1],
        "u": [0, 0, 1],
        "v": [0, 0, 0, 1],
        "w": [0, 1, 1],
        "x": [1, 0, 0, 1],
        "y": [1, 0, 1, 1],
        "z": [1, 1, 0, 0],
        "1": [0, 1, 1, 1, 1],
        "2": [0, 0, 1, 1, 1],
        "3": [0, 0, 0, 1, 1],
        "4": [0, 0, 0, 0, 0],
        "5": [1, 0, 0, 0, 0, 0],
        "6": [1, 0, 0, 0, 0],
        "7": [1, 1, 0, 0, 0],
        "8": [1, 1, 1, 0, 0],
        "9": [1, 1, 1, 1, 0],
        "0": [1, 1, 1, 1, 1]
    }

    static space(){
        const space = document.createElement('div');
        space.classList.add('space');
        return space;
    }

    static morse(type){
        const morseLetter = document.createElement('div');
        morseLetter.classList.add(type === 0 ? 'dot' : 'dash');
        return morseLetter;
    }

    constructor(input, output){
        this.input = input;
        this.output = output;

        this.input.addEventListener('input', () => this.translate());
    }

    translate(){
        this.output.innerHTML = [];
        const inputToArray = this.input.value.toLowerCase().split("");
        const inputToCode = inputToArray.map(letter => {
            if (!TranslateToMorse.alphaToCode[letter]){
                return [];
            }
            return TranslateToMorse.alphaToCode[letter]
        });
        const morseLetter = inputToCode.flatMap(letter => {
            const symbols = letter.map(symbol => TranslateToMorse.morse(symbol));
            if(symbols.length !== 0){
                symbols.push(TranslateToMorse.space());
            }
            return symbols;
        });

        morseLetter.forEach(symbol => this.output.appendChild(symbol));
    }

    
}