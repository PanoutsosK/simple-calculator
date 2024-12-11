//Setting the output panel showing 0
document.getElementsByTagName("div")[1].innerHTML = 0;

//Setting up variables
var count = 0;
var number = 0;
var number2 = 0;
var operation;

//When each button containing a number is clicked
function buttonWhenClicked(button)
{
    number2 *= 10;
    number2 += Number(button.innerHTML);
    document.getElementsByTagName("div")[1].innerHTML = number2;
}

//When the C button is clicked
function buttonCWhenClicked()
{
    number = 0;
    number2 = 0;
    operation = null;
    document.getElementsByTagName("div")[1].innerHTML = number2;
}

//When a button containing an operator is clicked
function buttonOperatorWhenClicked(button)
{
    //Using 2 numbers so we can store the previous number typed
    if(number2 != 0)
    {
        number = number2;
        number2 = 0;
    }
    operation = button.innerHTML.trim();
}

//Logic
function buttonResultWhenClicked(button)
{
    switch(operation){
        case "+":
            number += number2;
            break;
        case "-":
            number -= number2;
            break;
        case "*":
            number *= number2;
            break;
        case "/":
            number /= number2;
            break;
        default:
            number = number2;
            break;
    }
    operation = null;
    number2 = 0;
    document.getElementsByTagName("div")[1].innerHTML = number;
}
