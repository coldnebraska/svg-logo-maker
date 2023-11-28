const inquirer = require("inquirer")
const fs = require("fs")
const { Circle, Triangle, Square } = require("./lib/shapes.js")

function init() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "text",
                message: "Please input up to three characters:"
            },
            {
                type: "input",
                name: "tcolor",
                message: "Please enter a color name or hexadecimal number:"
            },
            {
                type: "list",
                name: "shape",
                message: "Please select a shape:",
                choices: ["circle", "square", "triangle"]
            },
            {
                type: "input",
                name: "scolor",
                message: "Please enter a color name or hexadecimal number:"
            }
        ])
        .then((data) => {
            switch (data.shape) {
                case "circle":
                    var shape = new Circle(
                        data.shape,
                        data.scolor,
                        data.tcolor,
                        data.text
                    )
                    var html = shape.render()
        
                    fs.writeFile("logo.svg", html, (err) => err ? console.log(err) : console.log("File written"))
                    break
                case "triangle":
                    var shape = new Triangle(
                        data.shape,
                        data.scolor,
                        data.tcolor,
                        data.text
                    )
                    var html = shape.render()
        
                    fs.writeFile("logo.svg", html, (err) => err ? console.log(err) : console.log("File written"))
                    break
                case "square":
                    var shape = new Square(
                        data.shape,
                        data.scolor,
                        data.tcolor,
                        data.text
                    )
                    var html = shape.render()
        
                    fs.writeFile("logo.svg", html, (err) => err ? console.log(err) : console.log("File written"))
                    break
            }
        })
        .then(() => {
            console.log("Created logo.svg")
        })
}

init()