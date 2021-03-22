let formula = "";
function clickBtn(value) {
    switch (value) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case '.':
        case '+':
        case '-':
        case '*':
        case '/':
        case '(':
        case ')':
            formula += "" + value;
            break;
        case '=':
            try {
                formula = eval(formula);
            } catch (e) {
                alert("Sai cú pháp");
            }
            break;
        case 'DEL':
            if (formula && formula.length > 0) {
                formula = formula.slice(0, -1);
            }
            break;
        case 'AC':
            formula = "";
            break;
        default:
            break;
    }
    document.getElementById("result").value = formula;


}