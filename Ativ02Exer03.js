// Atividade 02 Exercício 03

const ler = require('readline-sync');

let num = ler.questionFloat("- Digite um Numero: ");

console.log("---------- CALCULADORA ----------");
console.log("- Selecione: ");
console.log("- 101. Raiz Quadrada \n- 102. A Metade \n- 103. 10% do Número \n- 104. O Dobro");
let opt = ler.questionInt("=> ")
let calc = 0;
console.log("---------------------------------");

switch (opt) {
    case 101:
        calc = Math.sqrt(num);
        calc = calc.toFixed(2);
        console.log("O Resultado é: " + calc);
        break;
        
    case 102:
        calc = num / 2;
        calc = calc.toFixed(2);
        console.log("O Resultado é: " + calc);
        break;

    case 103:
        calc = (num * 10) / 100;
        calc = calc.toFixed(2);
        console.log("O Resultado é: " + calc);
        break;

    case 104:
        calc = num * 2;
        calc = calc.toFixed(2);
        console.log("O Resultado é: " + calc);
        break;

    default:
        console.log("Opção Inválida!");
        break;
}