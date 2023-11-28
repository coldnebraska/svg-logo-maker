const inquirer = require("inquirer")
const fs = require("fs")
const Shapes = require("./lib/shapes.js")

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
                choices: ["circle", "square", "triange"]
            },
            {
                type: "input",
                name: "scolor",
                message: "Please enter a color name or hexadecimal number:"
            }
        ])
        .then((data) => {
            const shape = new Shapes(
                data.shape,
                data.scolor,
                data.tcolor,
                data.text
            )
            const html = shape.render()

            fs.writeFile("logo.svg", html, (err) => err ? console.log(err) : console.log("File written"))
        })
        .then(() => {
            console.log("Created logo.svg")
        })
}

init()