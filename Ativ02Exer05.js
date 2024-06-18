// Atividade 02 Exercício 05

const ler = require ('readline-sync');

let dia = ler.questionInt("- Informe o Dia: ");
let estacoes = ler.questionInt("- Informe o Mes: ");
let ano = ler.questionInt("- Informe o Ano: ");

console.log("- Data Registrada: " + dia + "/" + estacoes + "/" + ano);
console.log("- Confirma? \n- 1. SIM \n- 2. NÃO");
let conf = ler.questionInt("=> ");
console.clear();

if (conf == 1) {
    console.log("--------------------------------------------------------------------");
    switch (estacoes) {
        case 1:
        case '01':
            console.log("- A estação do ano correspondente ao mês de Janeiro é Verão");
            break;

        case 2:
        case '02':
            console.log("- A estação do ano correspondente ao mês de Fevereiro é Verão");
            break;

        case 3:
        case '03':
            console.log("- A estação do ano correspondente ao mês de Março é Verão");
            break;

        case 4:
        case '04':
            console.log("- A estação do ano correspondente ao mês de Abril é Outono");
            break;

        case 5:
        case '05':
            console.log("- A estação do ano correspondente ao mês de Maio é Outono");
            break;

        case 6:
        case'06':
        console.log("- A estação do ano correspondente ao mês de Junho é Outono");
            break;

        case 7:
        case '07':
            console.log("- A estação do ano correspondente ao mês de Julho é Inverno");
            break;

        case 8:
        case '08':
            console.log("- A estação do ano correspondente ao mês de Agosto é Inverno");
            break;

        case 9:
        case '09':
            console.log("- A estação do ano correspondente ao mês de Setembro é Inverno");
            break;

        case 10:
            console.log("- A estação do ano correspondente ao mês de Outubro é Primavera");
            break;

        case 11:
            console.log("- A estação do ano correspondente ao mês de Novembro é Primavera");
            break;

        case 12:
            console.log("- A estação do ano correspondente ao mês de Dezembro é Primavera");
            break;
    
        default:
            console.log("--- Mês Inválido! ---");
            break;
    }
    console.log("--------------------------------------------------------------------");
} else {
    console.log("--- Sistema Encerrado! ---");
}