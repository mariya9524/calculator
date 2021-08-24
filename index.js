//function that display value 
function display(val) 
{ 
    document.getElementById("result").value+=val 
} 
  
//function that evaluates the digit and return result 
function solve() 
{ 
    let x = document.getElementById("result").value 
    let y = eval(x) 
    document.getElementById("result").value = y 
} 
  
//function that clear the display 
function clr() 
{ 
    document.getElementById("result").value = "" 
} 
function back()
{
    var back= document.getElementById("result").value
    document.getElementById("result").value = back.substr(0, back.length - 1);
}
function sinclicked()
{
    document.getElementById("result").value=Math.sin(document.getElementById("result").value)
}
function cosclicked()
{
    document.getElementById("result").value=Math.cos(document.getElementById("result").value)
}
function tanclicked()
{
    document.getElementById("result").value=Math.tan(document.getElementById("result").value)
}
