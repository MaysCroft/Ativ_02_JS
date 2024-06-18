// Atividade 02 Exercício 04

const ler = require('readline-sync');

let valor = ler.questionFloat("- Digite o Valor da Compra: R$ ");

console.log("---------- FINALIZAR COMPRA ----------");
console.log("- Selecione a Forma de Pagamento: \n- 1. À Vista \n- 2. À Prazo 30 Dias \n- 3. À Prazo 60 Dias \n- 4. À Prazo 90 Dias \n- 5. Cartão de Débito");
let opt = ler.questionInt("=> ");
let desc = 0;
console.log("--------------------------------------");

switch (opt) {
    case 1:
        desc = valor - (valor * 10) / 100;
        console.log("Valor Final da Compra À Vista: R$ " + desc);
        break;

    case 2:
        desc = valor - (valor * 5) / 100;
        console.log("Valor Final da Compra no Prazo de 30 Dias: R$ " + desc);
        break;

    case 3:
        console.log("Valor Final da Compra no Prazo de 60 Dias: R$ " + valor);
        break;

    case 4:
        let acre = valor + (valor * 8) / 100;
        console.log("Valor Final da Compra no Prazo de 90 Dias: R$ " + acre);
        break;

    case 5:
        desc = valor - (valor * 8) / 100;
        console.log("Valor Final da Compra no Cartão de Débito: R$ " + desc);
        break;

    default:
        console.log("Forma de Pagamento Inválida!");
        break;
}