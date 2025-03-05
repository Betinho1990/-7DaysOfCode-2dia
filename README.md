# 📌 Formulário de Aprendizado de Programação

![Banner]([https://pixabay.com/pt/photos/bin%C3%A1rio-c%C3%B3digo-bin%C3%A1rio-2910663/](https://pixabay.com/pt/photos/bin%C3%A1rio-c%C3%B3digo-bin%C3%A1rio-2910663/))

## 🧑 Sobre o Autor

👋 Olá! Meu nome é Roberto Gonçalves Conceição Filho e sou um entusiasta da programação. Você pode me encontrar no GitHub clicando [aqui](https://github.com/Betinho1990)!

<img src = "https://avatars.githubusercontent.com/u/194714356?v=4" width="150" height="150">

## 🚀 Descrição do Projeto

Este é um pequeno projeto desenvolvido em **JavaScript** para capturar informações de um usuário através de um formulário e exibir uma mensagem personalizada sobre seu aprendizado em programação.

## ✨ Funcionalidade

O código captura três informações do usuário:

✅ **Nome**  
✅ **Idade**  
✅ **Linguagem de programação que está aprendendo**  

Após preencher o formulário e clicar no botão, o sistema exibe uma mensagem com os dados inseridos. Caso algum campo esteja vazio, o usuário recebe um alerta solicitando o preenchimento.

## 📝 Código

```javascript
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
```

## 📌 Como Usar

1. Clone este repositório ou copie o código.
2. Crie um arquivo HTML e adicione os campos de entrada correspondentes (`id="nome"`, `id="anos"`, `id="linguagem"`) e um botão para chamar a função `adicionar()`.
3. Adicione um elemento com `id="mensagem"` para exibir o texto formatado.
4. Execute o código no navegador e divirta-se!

## 🎨 Exemplo de Uso

```html
<input type="text" id="nome" placeholder="Digite seu nome">
<input type="number" id="anos" placeholder="Digite sua idade">
<input type="text" id="linguagem" placeholder="Linguagem de programação">
<button onclick="adicionar()">Exibir Mensagem</button>
<p id="mensagem"></p>
```

## 🔗 Tecnologias Utilizadas

- HTML
- CSS *(opcional para estilização do formulário)*
- JavaScript

## 📜 Licença

Este projeto está sob a licença MIT. Sinta-se à vontade para usá-lo e modificá-lo!

---

Se quiser ver mais projetos meus, acesse meu perfil no GitHub: [Seu GitHub](https://github.com/Betinho1990) 🚀
