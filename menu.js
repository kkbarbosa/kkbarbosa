const ler = require('readline-sync');
const { gerenciarProdutos,  gerenciarClientes, gerenciarFornecedores, gerenciarParceiros, ajuda, sobre } = require('./codigos.js');
let produtos = require('./produtos.js');
let clientes = require('./clientes');
let historico_compras = require('./historico_compras.js');
const fornecedores = require('./fornecedores.js');


let check = true;
    while (check) {
        console.log("-------- Sistema de Gerenciamento de Estoque --------");
        console.log("--- Escolha as Opções Abaixo. -----------------------");
        console.log("1 - Produtos. ---------------------------------------");
        console.log("2 - Clientes. ---------------------------------------");
        console.log("3 - Fornecedores. -----------------------------------");
        console.log("4 - Parceiros. --------------------------------------");
        console.log("5 - Ajuda. ------------------------------------------");
        console.log("6 - Sobre. ------------------------------------------");
        console.log("7 - Sair. -------------------------------------------");
        console.log('-----------------------------------------------------');
    let opt = ler.questionInt("=> ");
    
    switch (opt) {
        case 1:
            console.clear();
            gerenciarProdutos();
            break;
        case 2:
            console.clear();
            gerenciarClientes();
            break;
        case 3:
            console.clear();
            gerenciarFornecedores();
            break;
        case 4:
            console.clear();
            gerenciarParceiros();
            break;
        case 5:
            console.clear();
            ajuda();
            break;
        case 6:
            console.clear();
            sobre();
            break;
        case 7:
            check = false;    
            console.clear();
            console.log("Você saiu!");
            break;
        default:
            console.log("Opção Inválida!");
    }
}