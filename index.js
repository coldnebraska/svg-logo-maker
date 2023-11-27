const inquirer = require("inquirer")
const fs = require("fs")

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
            if (data.text.length > 3) {
                console.log("Text contains too many characters. Please try again.")
                init()
            }

            writeToFile("logo.svg", data)
        })
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, 
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <${data.shape} cx="150" cy="100" r="80" fill="${data.scolor}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.tcolor}">${data.text}</text>
      
      </svg>`
        , (err) => err ? console.log(err) : console.log("Generated logo.svg"))
}

init()