
function adicionar() {
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("anos").value;
    let linguagem = document.getElementById("linguagem").value;

    if (nome && idade && linguagem) {
        let mensagem = `Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`;
        document.getElementById("mensagem").innerText = mensagem;
    } else {
        alert("Por favor, preencha todos os campos!");
    }
}