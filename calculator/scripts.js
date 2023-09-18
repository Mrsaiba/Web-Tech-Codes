//taking the buttons reference
let clearButton = document.getElementById("clear");
let resultButton = document.getElementById("result");
let inputField = document.getElementById("value");

//taking the operator buttons reference
let plusButton = document.getElementById("plus");
let minusButton = document.getElementById("minus");
let divideButton = document.getElementById("divide");
let multiplyButton = document.getElementById("multiply");

//taking the number reference
let nineButton = document.getElementById("nine");
let eightButton = document.getElementById("eight");
let sevenButton = document.getElementById("seven");
let sixButton = document.getElementById("six");
let fiveButton = document.getElementById("five");
let fourButton = document.getElementById("four");
let threeButton = document.getElementById("three");
let twoButton = document.getElementById("two");
let oneButton = document.getElementById("one");
let zeroButton = document.getElementById("zero");


//all funtions here
function buttonClick()
{
    inputField.value += this.textContent;
}

function clearValue()
{
    inputField.value = "";
}

function result()
{
    inputField.value = eval(inputField.value);
}

function hoverButtonColor()
{
    this.style.backgroundColor = "#f0f0f0";
}

function restoreButtonColor()
{
    this.style.backgroundColor = "";

}

function oprButtonColor()
{
    this.style.backgroundColor = "#87ceeb";
}

function resultButtonColor()
{
    resultButton.style.backgroundColor ="#ffcc99";
}

function clearButtonColor()
{
    clearButton.style.backgroundColor = "#ffc0cb"
}

function numberPress()
{
    this.style.backgroundColor = "#cccccc";
}

function clearPress()
{
    this.style.backgroundColor = "red";
}

function oprPress()
{
    this.style.backgroundColor = "#87CEEB";
}

function resultPress()
{
    this.style.backgroundColor = "#ff6600";
}



//adding event listeners for special buttons
clearButton.addEventListener("click",clearValue);
resultButton.addEventListener("click",result);

//adding event listeners for operator buttons
plusButton.addEventListener("click",buttonClick);
minusButton.addEventListener("click",buttonClick);
divideButton.addEventListener("click",buttonClick);
multiplyButton.addEventListener("click",buttonClick);

//adding event listeners for numbers
nineButton.addEventListener("click",buttonClick);
eightButton.addEventListener("click",buttonClick);
sevenButton.addEventListener("click",buttonClick);
sixButton.addEventListener("click",buttonClick);
fiveButton.addEventListener("click",buttonClick);
fourButton.addEventListener("click",buttonClick);
threeButton.addEventListener("click",buttonClick);
twoButton.addEventListener("click",buttonClick);
oneButton.addEventListener("click",buttonClick);
zeroButton.addEventListener("click",buttonClick);



//event listeners for mouse over color changer

        //number buttons
nineButton.addEventListener("mouseover",hoverButtonColor);
eightButton.addEventListener("mouseover",hoverButtonColor);
sevenButton.addEventListener("mouseover",hoverButtonColor);
sixButton.addEventListener("mouseover",hoverButtonColor);
fiveButton.addEventListener("mouseover",hoverButtonColor);
fourButton.addEventListener("mouseover",hoverButtonColor);
threeButton.addEventListener("mouseover",hoverButtonColor);
twoButton.addEventListener("mouseover",hoverButtonColor);
oneButton.addEventListener("mouseover",hoverButtonColor);
zeroButton.addEventListener("mouseover",hoverButtonColor);

        //operator buttons
plusButton.addEventListener("mouseover",oprButtonColor);
minusButton.addEventListener("mouseover",oprButtonColor);
divideButton.addEventListener("mouseover",oprButtonColor);
multiplyButton.addEventListener("mouseover",oprButtonColor);

        //special buttons
resultButton.addEventListener("mouseover",resultButtonColor);
clearButton.addEventListener("mouseover",clearButtonColor);




//event listeners for mouse out color remove
        
        //number buttons
nineButton.addEventListener("mouseout",restoreButtonColor);
eightButton.addEventListener("mouseout",restoreButtonColor);
sevenButton.addEventListener("mouseout",restoreButtonColor);
sixButton.addEventListener("mouseout",restoreButtonColor);
fiveButton.addEventListener("mouseout",restoreButtonColor);
fourButton.addEventListener("mouseout",restoreButtonColor);
threeButton.addEventListener("mouseout",restoreButtonColor);
twoButton.addEventListener("mouseout",restoreButtonColor);
oneButton.addEventListener("mouseout",restoreButtonColor);
zeroButton.addEventListener("mouseout",restoreButtonColor);

        //operator buttons
plusButton.addEventListener("mouseout",restoreButtonColor);
minusButton.addEventListener("mouseout",restoreButtonColor);
divideButton.addEventListener("mouseout",restoreButtonColor);
multiplyButton.addEventListener("mouseout",restoreButtonColor);

        //special buttons
resultButton.addEventListener("mouseout",restoreButtonColor);
clearButton.addEventListener("mouseout",restoreButtonColor);



//listeners for mouse press

        //number buttons
nineButton.addEventListener("mousedown",numberPress);
eightButton.addEventListener("mousedown",numberPress);
sevenButton.addEventListener("mousedown",numberPress);
sixButton.addEventListener("mousedown",numberPress);
fiveButton.addEventListener("mousedown",numberPress);
fourButton.addEventListener("mousedown",numberPress);
threeButton.addEventListener("mousedown",numberPress);
twoButton.addEventListener("mousedown",numberPress);
oneButton.addEventListener("mousedown",numberPress);
zeroButton.addEventListener("mousedown",numberPress);

        //operator buttons
plusButton.addEventListener("mousedown",oprPress);
minusButton.addEventListener("mousedown",oprPress);
divideButton.addEventListener("mousedown",oprPress);
multiplyButton.addEventListener("mousedown",oprPress);

        //special buttons
clearButton.addEventListener("mousedown",clearPress);
resultButton.addEventListener("mousedown",resultPress);




//listeners for mouse up
        
        //number buttons
nineButton.addEventListener("mouseup",restoreButtonColor);
eightButton.addEventListener("mouseup",restoreButtonColor);
sevenButton.addEventListener("mouseup",restoreButtonColor);
sixButton.addEventListener("mouseup",restoreButtonColor);
fiveButton.addEventListener("mouseup",restoreButtonColor);
fourButton.addEventListener("mouseup",restoreButtonColor);
threeButton.addEventListener("mouseup",restoreButtonColor);
twoButton.addEventListener("mouseup",restoreButtonColor);
oneButton.addEventListener("mouseup",restoreButtonColor);
zeroButton.addEventListener("mouseup",restoreButtonColor);


        //operator buttons
plusButton.addEventListener("mouseup",restoreButtonColor);
minusButton.addEventListener("mouseup",restoreButtonColor);
divideButton.addEventListener("mouseup",restoreButtonColor);
multiplyButton.addEventListener("mouseup",restoreButtonColor);


        //special buttons
clearButton.addEventListener("mouseup",restoreButtonColor);
resultButton.addEventListener("mouseup",restoreButtonColor);