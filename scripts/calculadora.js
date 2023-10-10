function calcular() {
    event.preventDefault(); //para o submit do formulário

    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);
    let op = document.getElementById("operacao").value;
    let resultado;

    if (isNaN(n1) || isNaN(n2)) {
        alert("É necessário digitar apenas números");
        return;
    }

    if (op == "+") {
        resultado = somar(n1, n2);
    } else if (op == "-") {
        resultado = subtrair(n1, n2);
    } else if (op == "/") {
        resultado = dividir(n1, n2);
    } else if (op == "*") {
        resultado = multiplicar(n1, n2);
    } else {
        alert("Selecione uma operação");
        return;
    }

    //inserir o resultado no HTM (DOM)
    document.getElementById('result').innerText = resultado

    // alert(`O resultado da operação é = ${resultado}`);
}

function somar(x, y) {
    return x + y;
}

function subtrair(x, y) {
    return x - y;
}

function dividir(x, y) {
    if (y == 0) {
        return "Não existe divisão por 0!";
    }
    return x / y;
}

function multiplicar(x, y) {
    return x * y;
}
