function mostrarMensagem(){
    var anoDeNascimento = prompt("Olá, Digite o ano de seu nascimento: ");

    var anoAtual = new Date().getFullYear();

    var idade = anoAtual - anoDeNascimento;

    alert(`Você tem ${idade} anos`);
}

mostrarMensagem();