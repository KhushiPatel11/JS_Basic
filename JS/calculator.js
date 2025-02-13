function calculate() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    const op = document.getElementById("operator").value;

    let result;
    switch(op){
        case '+':
            result = num1 + num2;
        break;
        case '-':
            result = num1 - num2;
        break;
        case '*':
            result = num1 * num2;
        break;
        case '/':
            result = num1 / num2;
        break;
        case '%':
            result = num1 % num2;
        break;
        default:
            result = "Invalid Operator";
    }
    document.getElementById("result").value = `${result}`;
}