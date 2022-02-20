let inputWidth = document.querySelector(".input-width")
let inputHeight = document.querySelector(".input-height");
let inputColor = document.querySelector(".input-color");
let body = document.querySelector("body");
let checkBox = document.querySelector('.checkbox')
var num = 0;
console.log(num)
let newDiv;
function createDiv(){
    if(inputWidth.value >= 51 && inputWidth.value <= 400 && inputHeight.value >= 51 && inputHeight.value <= 400){
        if(inputWidth.value + "px"=="px" || inputHeight.value + "px"=="px"){
            console.log("Hello world");
        }else{
        newDiv = document.createElement("div"); 
        newDiv.className = "new_div";
        newDiv.style.width = inputWidth.value + "px";
        newDiv.style.height = inputHeight.value + "px";
        newDiv.style.background = inputColor.value;
        if(checkBox.checked){
            newDiv.style.borderRadius="20px";
        }else {
            newDiv.style.borderRadius="0px";    
        }
        console.log(checkBox)
        var div = ++num;
        console.log(div);
        if (div>=2){
            console.log("All")
            var div = num--;
            console.log(div)
        }else{
        var newDiv = document.querySelector(".container").append(newDiv);
        var div = +div + 1;
        }
        console.log(div);
    }}else if(inputWidth.value < 49 && inputHeight.value < 49){
        alert("Too tiny block!")
    }
    else{
        alert("Too huge block!")
    }
}
function deleteDiv(){
    let delDiv = document.querySelector(".new_div");
    delDiv.remove();
    var div = num--;
    console.log(div);
}

let stepH = 0;
let stepV = 0;

function moveUp(){
    if (stepV <= 0){
        return;
    }
    stepV -= 30;
    let moveDiv = document.querySelector(".new_div");
    moveDiv.style.marginTop = stepV + "px";
}

function moveDown(){
    if (530 - (+stepV + +inputHeight.value + 30) >= 0){
        stepV += 30;
        let moveDiv = document.querySelector(".new_div");
        moveDiv.style.marginTop = stepV + "px";
    }
}

function moveRight(){
    if (530 - (+stepH + +inputHeight.value + 30) >= 0){
        stepH += 30;
        let moveDiv = document.querySelector(".new_div");
        moveDiv.style.marginLeft = stepH + "px";
    }
}

function moveLeft(){
    if (stepH <= 0){
        return;
    }
    stepH -= 30;
    let moveDiv = document.querySelector(".new_div");
    moveDiv.style.marginLeft = stepH + "px";
}