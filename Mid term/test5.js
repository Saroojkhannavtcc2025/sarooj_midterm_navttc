function number(num1, num2, a) {
    if (a === "+") {
        return num1 + num2;
    } else if (a  === "*") {
        return num1 * num2;

    } else {
        return "Your Answer";
    }
}


document.body.innerHTML=(number(10, 5, "+"));  
document.body.innerHTML=(number(5, 2, "*"));  
