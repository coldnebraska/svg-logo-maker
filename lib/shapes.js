class Shapes {
    constructor(scolor, tcolor, text) {
        
        this.scolor = scolor
        this.tcolor = tcolor
        this.text = text
    }
}

class Circle extends Shapes {
    constructor(shape, scolor, tcolor, text) {
        super(scolor, tcolor, text)
        this.shape = shape
    }

    render(color) {
        return `<circle cx="150" cy="100" r="80" fill="${color}" />`
    }

    createLogo() {
        return `
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

                <${this.shape} cx="150" cy="100" r="80" fill="${this.scolor}" />

                <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.tcolor}">${this.text}</text>

            </svg>`
    }
}

class Triangle extends Shapes {
    constructor(shape, scolor, tcolor, text) {
        super(scolor, tcolor, text)
        this.shape = shape
    }

    render(color) {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${color}" />`
    }

    createLogo() {
        return `
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

                <polygon points="150, 18 244, 182 56, 182" fill="${this.scolor}" />

                <text x="150" y="160" font-size="60" text-anchor="middle" fill="${this.tcolor}">${this.text}</text>

            </svg>`
    }
}

class Square extends Shapes {
    constructor(shape, scolor, tcolor, text) {
        super(scolor, tcolor, text)
        this.shape = shape
    }

    render(color) {
        return `<rect x="75" y="25" width="150" height="150" fill="${color}" />`
    }

    createLogo() {
        return `
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

                <rect x="75" y="25" width="150" height="150" fill="${this.scolor}" />

                <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.tcolor}">${this.text}</text>

            </svg>`
    }
}

module.exports = {Circle, Triangle, Square}