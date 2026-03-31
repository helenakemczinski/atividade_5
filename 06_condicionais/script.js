
//exemplo de estrutura com "if" e "else":

let idade = 18;

if (idade >= 18) {
    console.log("Você é maior de idade");
} else {
    console.log("Você é menor de idade");
}
//Se a idade for maior ou igual a 18, mostra uma mensagem. Senão, mostra outra.

//exemplo de estrutura com "if", "else if" e "else":

let nota = 7;

if (nota >= 7) {
    console.log("Aprovado");
} else if (nota >= 5) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}

//exemplo de estrutura com "switch":

let dia = 2;

switch (dia) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda");
        break;
    case 3:
        console.log("Terça");
        break;
    default:
        console.log("Outro dia");
}
