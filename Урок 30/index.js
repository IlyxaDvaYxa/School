let name=prompt("Input yout name:");
let backColor=prompt(name + " Input color for background :");
let mainHeading = document.querySelector("h1");
let buttonFirst = document.querySelector(".button-first");
let background = document.querySelector("body");
let buttonSecond = document.querySelector(".button-second");
mainHeading.style.color="rgb(111, 197, 255)";
background.style.fontFamily="Montserrat, sans-serif";
background.style.fontWeight="600";
background.style.background=backColor;
function changeColor(){
    mainHeading.style.color="rgb(10, 161, 91)";
    background.style.background="rgb(253, 230, 124)";
    buttonFirst.style.borderRadius="10px";
    buttonFirst.style.border="3px solid rgb(10, 161, 91)";
    mainHeading.style.fontWeight="500";
    mainHeading.style.fontSize="60px";
    buttonFirst.style.fontSize="20px";
    buttonSecond.style.borderRadius="0px";
    buttonSecond.style.border="none";
    mainHeading.style.transition="all 1.1s";
    buttonFirst.style.transition="all 1s";
    background.style.transition="all 1s";
    buttonSecond.style.fontSize="14px";
}
function changeColor2(){
    background.style.background="lightgreen";
    mainHeading.style.fontWeight="300";
    mainHeading.style.fontSize="60px";
    mainHeading.style.color="rgb(313, 130, 200)"
    buttonSecond.style.fontSize="20px";
    buttonFirst.style.fontSize="14px";
    background.style.transition="all 1s";
    buttonSecond.style.borderRadius="10px";
    buttonSecond.style.border="3px solid rgb(313, 130, 200)";
    buttonFirst.style.borderRadius="0px";
    buttonFirst.style.border="none";
    mainHeading.style.transition="all 1.1s";
    buttonFirst.style.transition="all 1s";
    buttonSecond.style.transition="all 1s";
}
