class MorseCode {
    static Encoding = {
        a: [1, 0],
        b: [1, 0, 0, 0],
        c: [1, 0, 1, 0],
        d: [1, 0, 0],
        e: [0],
        f: [0, 0, 1, 0],
        g: [1, 1, 0],
        h: [0, 0, 0, 0],
        i: [0, 0],
        j: [0, 1, 1, 1],
        k: [1, 0, 1],
        l: [0, 1, 0, 0],
        m: [1, 1],
        n: [1, 0],
        o: [1, 1, 1],
        p: [0, 1, 1, 0],
        q: [1, 1, 0, 1],
        r: [0, 1, 0],
        s: [0, 0, 0],
        t: [1],
        u: [0, 0, 1],
        v: [0, 0, 0, 1],
        w: [0, 1, 1],
        x: [1, 0, 0, 1],
        y: [1, 0, 1, 1],
        z: [1, 1, 0, 0],
        "1": [0, 1, 1, 1, 1],
        "2": [0, 0, 1, 1, 1],
        "3": [0, 0, 0, 1, 1],
        "4": [0, 0, 0, 0, 0],
        "5": [1, 0, 0, 0, 0, 0],
        "6": [1, 0, 0, 0, 0],
        "7": [1, 1, 0, 0, 0],
        "8": [1, 1, 1, 0, 0],
        "9": [1, 1, 1, 1, 0],
        "0": [1, 1, 1, 1, 1],
        " ": []
    };

    static space() {
        const div = document.createElement('div');
        div.classList.add('space');
        return div;
    }

    static renderSymbol(code) {
        const symbol = document.createElement('div');
        symbol.classList.add(code === 0 ? 'dot' : 'dash');
        return symbol;
    }

    constructor(input, output) {
        this.input = input;
        this.output = output;

        this.input.addEventListener('input', () => this.render());
    }

    render() {
        this.output.innerHTML = [];
        const inputText = this.input.value.toLowerCase();

        for (let i = 0; i !== inputText.length; ++i) {
            const encoding = MorseCode.Encoding[inputText[i]];
            if (!encoding) {
                continue;
            }

            for (let j = 0; j !== encoding.length; ++j) {
                this.output.appendChild(MorseCode.renderSymbol(encoding[j]));
            }
            this.output.appendChild(MorseCode.space());
        }
    }
}