class Shapes {
    constructor(shape, scolor, tcolor, text) {
        if (text.length < 3) {
            throw new Error("Text contains too many characters. Please try again.")
        }

        this.shape = shape
        this.scolor = scolor
        this.tcolor = tcolor
        this.text = text
    }

    render() {
        return `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <${this.shape} cx="150" cy="100" r="80" fill="${this.scolor}" />

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.tcolor}">${this.text}</text>

</svg>`
    }
}

module.exports = Shapes