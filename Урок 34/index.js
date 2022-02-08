let inputWidth = document.querySelector(".input-width")
let inputHeight = document.querySelector(".input-height")
let inputColor = document.querySelector("input-color")
let body = document.querySelector("body")
body.style.background = "rgb(146, 255, 73)";

function createDiv(){
    let newDiv = document.createElement("div")
    newDiv.className = "new_div"
    newDiv.style.background = inputColor
    newDiv.style.width = inputWidth.value + "px"
    newDiv.style.height = inputHeight.value + "px"
    document.querySelector(".container").append(newDiv)
}