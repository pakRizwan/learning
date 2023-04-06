document.getElementById("concatenate").onclick=function(){
    let a="2"; b="5"; let c=a+b;
    document.getElementById("statement").innerHTML=" let a='2'; b='5'; let c=a+b;"
    document.getElementById("output").innerHTML=c;
}

document.getElementById("clearStatement").onclick = function () {
    document.getElementById("statement").innerText = "";
}
document.getElementById("clearOutput").onclick = function () {
    document.getElementById("output").innerText = "";
}

document.getElementById("askName").onclick=function(){
    let firstName = prompt("Please type your first name.");
    let lastName = prompt("Please type your last name.");
    let fullName = firstName + " " + lastName;
    document.getElementById("statement").innerText = fullName;
    document.getElementById("output").innerText = fullName;
}

document.getElementById("comparison").onclick=function(){
    let num1 = prompt("Enter number.");
    let num2 = prompt("Enter number.");
    comparison = num1 === num2;
    console.log(comparison);
    document.getElementById("statement").innerText = "comparison = num1 === num2";
    document.getElementById("output").innerText = comparison;
    if (comparison === true) {
        document.getElementById("output").innerText = "Numbers are Equal With Data Type"
    }
    else {
        document.getElementById("output").innerText = "Numbers are not Equal with Data Type"
    }
}

document.getElementById("ifElse").onclick=function(){
    let marks = prompt("Enter your marks");
    if(marks >= 90){
        document.getElementById("statement").innerText =marks;
        document.getElementById("output").innerText = "You Got A+";
    }
   else if(marks >= 80){
        document.getElementById("statement").innerText =marks;
        document.getElementById("output").innerText = "You Got A";
    }
   else if(marks >= 70){
        document.getElementById("statement").innerText =marks;
        document.getElementById("output").innerText = "You Got B";
    }
   else if(marks >= 60){
        document.getElementById("statement").innerText =marks;
        document.getElementById("output").innerText = "You Got C";
    }
   else if(marks < 60){
        document.getElementById("statement").innerText =marks;
        document.getElementById("output").innerText = "You are Fail";
    }
}

document.getElementById("login").onclick=function(){
    let email = prompt("email");
    let password = prompt("password");
    let information = "Email =" +email + " " + "Password=" + password;
    document.getElementById("statement").innerText =information;
    document.getElementById("output").innerText = "You are successfully login.";
}