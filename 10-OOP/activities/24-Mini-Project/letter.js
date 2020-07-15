class Letter {
    constructor(letter) {
        this.visible = false;
        if (this.isString(letter)) {
            this.visible = true;
        }

        this.letter = letter;


    }

    isString(letter) {
        if (typeof letter === "string" || typeof letter === "number") {
            return "_";
        }

    }

    guess(char) {
        if (this.letter === char) {
            this.visible = true;
        }
        return this.visible;
    }

    getSolution() {
        if (this.visible === true) {
            return this.letter;
        }
        else {
            return "_";
        }
    }
}

module.exports = Letter;