// Função para calcular o saldo de vitórias
function calcularSaldoVitorias(vitorias, derrotas) {
    return vitorias - derrotas;
}

// Função para determinar o nível do jogador
function determinarNivel(saldoVitorias) {
    let nivel;
    if (saldoVitorias < 10) {
        nivel = "Ferro";
    } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
        nivel = "Bronze";
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        nivel = "Prata";
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        nivel = "Ouro";
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        nivel = "Diamante";
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        nivel = "Lendário";
    } else if (saldoVitorias >= 101) {
        nivel = "Imortal";
    }
    return nivel;
}

// Função main que executa as duas funções
function main(vitorias, derrotas) {
    let saldoVitorias = calcularSaldoVitorias(vitorias, derrotas);
    let nivel = determinarNivel(saldoVitorias);
    console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`);
}

// Exemplo de uso da função main
main(120, 10);  // Substitua "120" e "10" pelas informações do seu jogador
