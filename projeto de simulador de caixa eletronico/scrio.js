let saldo = 1000;

function mostrarMensagem(mensagem) {
    document.getElementById('mensagem').textContent = mensagem;
}

function verificarSaldo() {
    mostrarMensagem("Seu saldo atual é: R$" + saldo.toFixed(2));
}

function depositar() {
    let valor = prompt("digite o valor para depositar;");
    valor = parseFloat(valor);
    if (!isNaN(valor) && valor > 0) {
        saldo +=valor;
        montrarmensagem("deposito realizado com sucesso! seu saldo atual é: R$" + saldo.toFixed(2))
    } else {
        montrarmensagem("valor de deposito invalido.")
    }
}

function sacar() {
    let valor = prompt("digite o valor para saque:")
    valor = parseFloat(valor);
    if (!isNaN(valor) && valor > 0) {
        if (valolr <= saldo) {
            saldo -= valor;
            montrarmensagem("saque realizado com sucesso! seu novo saldo é R$" + saldo.toFixed(2))
        } else {
            montrarmensagem("saldo insuficiente.");
        }
    } else {
        montrarmensagem("valor de saque invalido.");
    }
}