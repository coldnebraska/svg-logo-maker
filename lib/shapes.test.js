const { Circle, Triangle, Square } = require("./shapes")

describe("Shapes", () => {
    describe("Create circle", () => {
        it("should create a new circle with a fill color of blue", () => {
            // Arrange
            const subject = new Circle()

            // Act
            const actual = subject.render("blue")

            // Assert
            expect(actual).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />')
        })
    })

    describe("Create triangle", () => {
        it("should create a new triangle with a fill color of blue", () => {
            // Arrange
            const subject = new Triangle()

            // Act
            const actual = subject.render("blue")

            // Assert
            expect(actual).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />')
        })
    })

    describe("Create square", () => {
        it("should create a new square with a fill color of blue", () => {
            // Arrange
            const subject = new Square()

            // Act
            const actual = subject.render("blue")

            // Assert
            expect(actual).toEqual('<rect x="75" y="25" width="150" height="150" fill="blue" />')
        })
    })
})