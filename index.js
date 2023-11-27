const inquirer = require("inquirer")

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
                choices: ["Circle", "Square", "Triange"]
            },
            {
                type: "input",
                name: "scolor",
                message: "Please enter a color name or hexadecimal number:"
            }
        ])
        .then((data) => {
            console.log(data)
        })
    }

init()