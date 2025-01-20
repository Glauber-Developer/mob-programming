const saudacoes = require('./../app/saudacoes.js');

test('Deve cumprimentar usuario com nome digitado', () => {

    expect(saudacoes('Danny')).toBe('Olá, Danny');
});

test('Deve cumprimentar o usuário com: olá, você ai', () => {
    
    expect(saudacoes('')).toBe('Olá, você ai');
});
