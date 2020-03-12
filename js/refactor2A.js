window.onload = function(){
    const input = document.querySelector('textarea');
    const output = document.querySelector('#translated');

    const morseCode = new TranslateToMorse(input, output);
}