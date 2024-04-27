
//set the display numbers as strings so they can be converted into numbers later
let num1 = "";
let num2 = "";
let displayNum = "";
let resultNum = 0;
let operand = "";


function add(a, b)
{
    return (a + b);
}

function subtract(a, b)
{
    return (a - b);
}

function multiply(a, b)
{
    return (a * b);
}

function divide (a, b)
{
    return (a / b);
}

//calls the relevant function based on the operand type 
function operate(operand, a, b)
{
    //converts the strings to numbers when the operand function is called
    Number(a);
    Number(b);
    
    if(operand === "+")
    {
        resultNum = add(a, b);
        return resultNum;
    }
    else if(operand === "-")
    {
        return subtract(a, b);
    }
    else if(operand === "*")
    {
        return multiply(a, b);
    }
    else if(operand === "/")
    {
        return divide(a, b);
    }
}


displayNum = operate(operand, num1, num2);

//sets a variable to target the display's DOM node and create the relevant spans
let display = document.querySelector(".input");
let num1Span = document.createElement("span");
let operandSpan = document.createElement("span");
let num2Span = document.createElement("span");

//Sets updates the calculator's DOM with the relevant button id when a button is clicked
document.addEventListener("click", function(e)
{
    if(e.target.tagName === "BUTTON")
    {
        //hookup logic surrounding the clear button later...
        // if(e.target.id === "clear")
        // {
        //     operand = ""
        //     display.textContent += "MO";
        //     num1 = "";
        //     num2 = "";
        //     resultNum = "";
        //     console.log(num1);
        //     console.log(num2);
        // }

        //if the buttons are operators, set the operand value to their id
        if(e.target.id === "multiply")
        {
            operand = "*"
            operandSpan.textContent += "*";
        }
        else if(e.target.id === "divide")
        {
            operand = "/"
            operandSpan.textContent += "/";
        }
        else if(e.target.id === "subtract")
        {
            operand = "-"
            operandSpan.textContent += "-";
        }
        else if(e.target.id === "add")
        {
            operand = "+"
            operandSpan.textContent += "+";
        }
        else if(e.target.id === "=")
        {
            let result = operate(operand, num1, num2);
            resultNum = result;
            //resets the num1 and num2 variables after calling the operate function
            num1 = "";
            num2 = "";
            display.textContent = result;
        }
        //if the buttons are numbers, set the relevant number value to the button's ID. Display it on the screen
        else
        {
        //Updates the first number if the operand is not defined
            if(operand === "")
            {
                num1 += e.target.id;
                num1Span.textContent = num1;
                console.log(num1);
            }
            //if the operand is defined, update the second number
            else if(num1 !== "" && operand !== "")
            {
                num2 += e.target.id;
                num2Span.textContent = num2;
                console.log(num2);
            }
            // else if (num1 !== "" && operand !== "")
            // {
            //     return resultNum;
            // }
            display.appendChild(num1Span);
            display.appendChild(operandSpan);
            display.appendChild(num2Span);
            console.log(num1);
            console.log(num2);
            console.log(resultNum);
        }
    }
})


