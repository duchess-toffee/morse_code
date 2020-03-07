window.onload = function(){
    const input = document.querySelector('textarea');
    const output = document.getElementById('translated');

    function translateToMorse(e){
        output.innerHTML = [];
        const inputArr = e.target.value.toLowerCase().split("");
        inputArr.map(alphaToCode).flatMap(codeToMorse).forEach(div => output.appendChild(div));
    }
    
    input.addEventListener('input', translateToMorse);


    function codeToMorse(arr){
        const morseLetter = arr.map(char => {
            const morseChar = document.createElement("div");
            if (char === 0){
                morseChar.classList.add("dot")
            }else{
                morseChar.classList.add("dash")
            }
            return morseChar;
        })

        const space = document.createElement("div");
        space.classList.add("space");
        morseLetter.push(space);
        return morseLetter;
    }

function alphaToCode(char){
    switch(char){
        case "a": return [1, 0];
        case "b": return [1, 0, 0, 0];
        case "c": return [1, 0, 1, 0];
        case "d": return [1, 0, 0];
        case "e": return [0];
        case "f": return [0, 0, 1, 0];
        case "g": return [1, 1, 0];
        case "h": return [0, 0, 0, 0];
        case "i": return [0, 0];
        case "j": return [0, 1, 1, 1];
        case "k": return [1, 0, 1];
        case "l": return [0, 1, 0, 0];
        case "m": return [1, 1];
        case "n": return [1, 0];
        case "o": return [1, 1, 1];
        case "p": return [0, 1, 1, 0];
        case "q": return [1, 1, 0, 1];
        case "r": return [0, 1, 0];
        case "s": return [0, 0, 0];
        case "t": return [1];
        case "u": return [0, 0, 1];
        case "v": return [0, 0 ,0, 1];
        case "w": return [0, 1, 1];
        case "x": return [1, 0, 0, 1];
        case "y": return [1, 0, 1, 1];
        case "z": return [1, 1, 0, 0];
        case "1": return [0, 1, 1, 1, 1];
        case "2": return [0, 0, 1, 1, 1];
        case "3": return [0, 0, 0, 1, 1];
        case "4": return [0, 0, 0, 0 ,0];
        case "5": return [1, 0, 0, 0 ,0 ,0];
        case "6": return [1, 0, 0, 0, 0];
        case "7": return [1, 1, 0, 0, 0];
        case "8": return [1, 1, 1, 0, 0];
        case "9": return [1, 1, 1, 1, 0];
        case "0": return [1, 1, 1, 1, 1];
        case " ": return [];
        default: return [];
    }
}
}