window.onload = function () {
    const input = document.querySelector('textarea');
    const output = document.getElementById('translated');

    const morseCode = new MorseCode(input, output);
}