
//set the display numbers as strings so they can be converted into numbers later
let num1 = "";
let num2 = "";
let displayNum = "";
let resultNum = "";
let operand = "";
let operandClick = 0;


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
    let aConvert = Number(a);
    let bConvert = Number(b);
    
    if(operand === "+")
    {
        return add(aConvert, bConvert);
    }
    else if(operand === "-")
    {
        return subtract(aConvert, bConvert);
    }
    else if(operand === "*")
    {
        return multiply(aConvert, bConvert);
    }
    else if(operand === "/")
    {
        return divide(aConvert, bConvert);
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
    console.log(`FIRST VALUE IS ${num1}, SECOND VALUE IS ${num2}, RESULT IS ${resultNum}`);
    if(e.target.tagName === "BUTTON")
    {
        //clear values if the user clicks clear
        if(e.target.id === "clear")
        {
            num1 = "";
            num2 = "";
            resultNum = "";
            operand = "";
            display.textContent = "";
        }
        
        //requires both values to be entered before allowing the user to calculate the answer
        if(e.target.id === "=")
        {
            if(num1 !== "" && num2 !== "")
            {
                equals();
            }
        }

        //skip this section if an operand button is pressed
        else if(e.target.className !== "operandButtons")
        {
        //if the result value is not empty (meaning the user did one calculation), the num1 defaults to the result value. The user can then do another operation on the result number
        //if the operand is defined, update the second number
        if(num1 !== "" && operand !== "")
            {
                num2 += e.target.id;
                num2Span.textContent = num2;
                display.appendChild(num2Span);
            }    
        
        else if(resultNum !== "")
            {
                num1 = resultNum;
                resultNum.toString();
                resultNum = "";            
            }

        //Updates the first number if the operand is not defined
            else if(operand === "")
            {
                num1 += e.target.id;
                num1Span.textContent = num1;
                display.appendChild(num1Span);
            }
        }

        //if the buttons are operators, set the operand value to their id
        else
        {

        if(operandClick > 0)
        {
            operandClick = 0;
            equals();
            result = num1;
        }

        operandClick++;    
        if(e.target.id === "multiply")
        {
            operand = "*"

        }
        else if(e.target.id === "divide")
        {
            operand = "/"
        }
        else if(e.target.id === "subtract")
        {
            operand = "-"
        }
        else if(e.target.id === "add")
        {
            operand = "+"
        }

        }
        //if the buttons are numbers, set the relevant number value to the button's ID. Display it on the screen
        display.textContent = `${num1} ${operand} ${num2}`;
    }
})


//separate equals function. Needed this to call if an operand is already defined and the user clicks an operand button again. Calculator can only display two pairs of numbers at once
function equals()
{
    
    let result = operate(operand, num1, num2);
    resultNum = result;
    // //converts result to number with only two decimal places
    let resConvert = +resultNum.toFixed(2);
    Number(resConvert);

    // //Sets the num1 variable to the result. Num2 and operand variables are reset after converting them back to a string
    num1 = resConvert;
    num2 = "";
    operand = "";
    operandSpan.textContent = "";
    operandClick = 0;
}


