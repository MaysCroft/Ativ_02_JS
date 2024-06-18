// Atividade 02 Exercício 02

const ler = require('readline-sync');

let compra = ler.questionFloat("- Digite o Total da Compra: R$ ")

console.log("---------- MENU PAGAMENTO ----------");
console.log("- Identificação de Comprador: ");
console.log("- 1. Cliente Comum \n- 2. Funcionário \n- 3. VIP");
let opt = ler.questionInt("=> ");
let desc = 0;
console.log("------------------------------------");

switch (opt) {
    case 1:
        console.log("Total da Compra: R$ " + compra);
        break;

    case 2:
        desc = compra - ((compra * 10) / 100);
        desc = desc.toFixed(2);
        console.log("Total com Desconto para Funcionários: R$ " + desc);
        break;

    case 3:
        desc = compra - ((compra * 5) / 100);
        desc = desc.toFixed(2);
        console.log("Total com Desconto para VIPs: R$ " + desc);
        break;

    default:
        console.log("Opção Inválida!");
        break;
}