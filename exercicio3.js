const fs = require('fs');


const arquivo = fs.readFileSync('faturamentoMensal.json', 'utf-8');

const faturamento = JSON.parse(arquivo);

for (const mes in faturamento) {
    console.log(faturamento[mes])
    console.log(`Começando a análise do mês de ${mes}...`);
    let menorValor = 0;
    let maiorValor = 0;
    let somaTotal = 0;
    let contadorDias = 0;
    for (const dia in faturamento[mes]) {
        valor = faturamento[mes][dia];
        if (valor < menorValor || menorValor === 0){
            menorValor = valor;
        }
        if (valor > maiorValor){
            maiorValor = valor;
        }
        somaTotal += valor;
    }
}