function saudacoes(nome) {
    if (!nome) {
        return 'Olá, você ai';
    }
    return `Olá, ${nome}`;
}

module.exports = saudacoes;