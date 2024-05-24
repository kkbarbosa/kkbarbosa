const ler = require('readline-sync');
const fs = require('fs');
const clientes = require('./clientes');
const produtos = require('./produtos');
const historico_compras = require('./historico_compras');
const fornecedores = require('./fornecedores.js');
const parceiros = require('./parceiros.js');


module.exports = produtos;

const gerenciarProdutos = () => {
    let check = true;
    while (check) {
        console.log("------------- Escolha as Opções Abaixo. -------------");
        console.log("1 - Listar produtos. --------------------------------");
        console.log("2 - Pesquisar por produtos. -------------------------");
        console.log("3 - Cadastrar produtos. -----------------------------");
        console.log("4 - Excluir produtos. -------------------------------");
        console.log("5 - Sair. -------------------------------------------");
        console.log('-----------------------------------------------------');
    let opt = ler.questionInt("=> ");
    
    switch (opt) {
        case 1:
            console.clear();
            listarProd();
            break;
        case 2:
            console.clear();
            listarProdNome();
            break;
        case 3:
            console.clear();
            cadProd();
            break;
        case 4:
            console.clear();
            excProd();
            break;
        case 5:
            check = false; 
            console.clear();   
            console.log("Você saiu!");
            break;
        default:
            console.clear();
            console.log("Opção Inválida!");
            break;
    }
    }
};

const listarProd = () => {
    console.log("--------- Produtos Cadastradas ---------");
    produtos.forEach((produtos => console.log(
        `Categoria: ${produtos.categoria}---------------------------
        Tipo: ${produtos.tipo}
        Nome: ${produtos.nome}
        Marca: ${produtos.marca}
        Preço: ${produtos.preco}
        Vendas: ${produtos.vendas}
        Anuncios: ${produtos.anuncios}
        -------------------------------------------------------------
        `)));
}

const cadProd = () => {
    let categoria = ler.question('Digite a categoria do produto: ');
    let tipo = ler.question('Digite o tipo do produto: ')
    let nome = ler.question('Digite o nome do produto: ')
    let marca = ler.question('Digite a marca do produto: ');
    let preco = ler.questionFloat('Digite o preço do produto: ');
    let vendas = ler.questionInt('Digite quantos foram vendidos: ');
    let anuncios = ler.questionInt("Quantos foram anunciados: ");
    addProd(categoria, tipo, nome, marca, preco, vendas, anuncios);
};

const addProd = (categoria, tipo, nome, marca, preco, vendas, anuncios) => {
    produtos.push({categoria, tipo, nome, marca, preco, vendas, anuncios});
    console.log("Peça cadastrada com sucesso!");
    ler.question("Pressione Enter para voltar");
    console.clear();
}

const listarProdNome = () => {
    check = true;
    while(check){
        let nome = ler.question("Qual o nome do produto: ");
        let prod = produtos.find(prod => prod.nome === nome);
        if(prod){
            console.log(
                `Categoria: ${prod.categoria}---------------------------
                Tipo: ${prod.tipo}
                Nome: ${prod.nome}
                Marca: ${prod.marca}
                Preço: ${prod.preco}
                Vendas: ${prod.vends}
                Anuncios: ${prod.anun}
                -------------------------------------------------------------
                `);
        let opt = ler.questionInt("Deseja buscar outro produto? (1 - Sim / 2 - Não): ");
    if (opt === 1) {
        console.clear();
    } else {
        check = false;
        console.clear();
    }
    } else {
        console.log("Produto não encontrado!");
}
    }
}

const excProd = () => {
    check = true;
    while(check){
        let nome = ler.question("Qual o nome do produto: ");
        let prod = produtos.find((prod) => prod.nome === nome);
        let nome_ex = produtos.findIndex(p => p.nome === nome);
        if(prod){
            console.log(
                `Categoria: ${prod.categoria}---------------------------
                Tipo: ${prod.tipo}
                Nome: ${prod.nome}
                Marca: ${prod.marca}
                Preço: ${prod.preco}
                Vendas: ${prod.vendas}
                Anuncios: ${prod.anuncios}
                -------------------------------------------------------------
                `);
        let opt = ler.questionInt("Deseja excluir essa peça? (1 - Sim / 2 - Não): ");
        if (opt === 1) {
            produtos.splice(nome_ex, 1);
            console.log("Produto removido!");
            console.log(".....");
            ler.question("Presione Enter para voltar.");
            check = false;
        } else {
            check = false;
            console.clear();
        }
        } else {
            console.log("ID não encontrado!");
        }
    }
}

module.exports = clientes;

const gerenciarClientes = () => {
        let check = true;
        while (check) {
            console.log("------------- Escolha as Opções Abaixo. -------------");
            console.log("1 - Cadastrar novo. ---------------------------------");
            console.log("2 - Listar todos. -----------------------------------");
            console.log("3 - Pesquisar clientes. -----------------------------");
            console.log("4 - Excluir clientes. -------------------------------");
            console.log("5 - Histórico de compras. ---------------------------");
            console.log("6 - Sair. -------------------------------------------");
            console.log('-----------------------------------------------------');
        let opt = ler.questionInt("=> ");
        
        switch (opt) {
            case 1:
                console.clear();
                cadClie();
                break;
            case 2:
                console.clear();
                listarClie();
                break;
            case 3:
                console.clear();
                pesqClie();
                break;
            case 4:
                console.clear();
                excClie();
                break;
            case 5:
                console.clear();
                histComp();
                break;
            case 6:
                check = false; 
                console.clear();   
                console.log("Você saiu!");
                break;
            default:
                console.clear();
                console.log("Opção Inválida!");
                break;
        }
        }
    };

const cadClie = () => {
    let nome_completo = ler.question('Digite o nome do cliente: ');
    let email = ler.question('Digite o email do cliente: ');
    let contato = ler.questionInt('Digite contato do cliente: ');
    let cpf = ler.questionInt("Qual o CPF do cliente: ");
    let data_nascimento = ler.questionInt("Qual a data de nascimento do cliente: ");
    addClie(nome_completo, email, contato, cpf, data_nascimento);
}

const addClie = (nome_completo, email, contato, cpf, data_nascimento) => {
    clientes.push({nome_completo, email, contato, cpf, data_nascimento});
    console.log("Cliente cadastrado com sucesso!");
    ler.question("Pressione Enter para voltar");
    console.clear();
}

const listarClie = () => {
    console.log("--------- Clientes Cadastrados ---------");
    clientes.forEach((clientes => console.log(
        `Nome: ${clientes.nome_completo}---------------------------
        Email: ${clientes.email}
        Contado: ${clientes.contato}
        CPF: ${clientes.cpf}
        Data de nascimento: ${clientes.data_nascimento}
        -----------------------------------------------
        `)));
}

const pesqClie = () => {
    check = true;
    while(check){
        let nome_completo = ler.question("Qual o nome do cliente: ");
        let clie = clientes.find(clie => clie.nome_completo === nome_completo);
        if(clie){
            console.log(
                `Nome: ${clie.nome_completo}---------------------------
                Email: ${clie.email}
                Contado: ${clie.contato}
                CPF: ${clie.cpf}
                Data de nascimento: ${clie.data_nascimento}
                -----------------------------------------------
                `);
        let opt = ler.questionInt("Deseja buscar outro cliente? (1 - Sim / 2 - Não): ");
    if (opt === 1) {
        console.clear();
    } else {
        check = false;
        console.clear();
    }
    } else {
        console.log("Cliente não encontrado!");
}
    }
}

const excClie = () => {
    check = true;
    while(check){
        let nome_completo = ler.question("Qual o nome do cliente: ");
        let clie = clientes.find((clie) => clie.nome_completo === nome_completo);
        let nome_ex = clientes.findIndex(c => c.nome_completo === nome_completo);
        if(clie){
            console.log(
                `Nome: ${clie.nome_completo}---------------------------
                Email: ${clie.email}
                Contado: ${clie.contato}
                CPF: ${clie.cpf}
                Data de nascimento: ${clie.data_nascimento}
                -----------------------------------------------
                `);
        let opt = ler.questionInt("Deseja excluir esse cliente? (1 - Sim / 2 - Não): ");
        if (opt === 1) {
            clientes.splice(nome_ex, 1);
            console.log("Cliente removido!");
            console.log(".....");
            ler.question("Presione Enter para voltar.");
            check = false;
        } else {
            check = false;
            console.clear();
        }
        } else {
            console.log("Cliente não encontrado!");
        }
    }
}

module.exports = historico_compras

const histComp = () => {
    console.log("----- Histórico de Compras -----");
    historico_compras.forEach((compra) =>
        console.log(
            `Cliente: ${compra.clientes}---------------------------
            Data de Compra: ${compra.data_compra}
            Itens Comprados: ${compra.itens_comprados}
            Quantidade: ${compra.quantidade}
            Total: ${compra.total}
            -----------------------------------------------
            `));
    console.log(".....");
    ler.question("Pressione Enter para voltar.");
    check = false;
    console.clear();
}

module.exports = fornecedores;

const gerenciarFornecedores = () => {
    let check = true;
    while (check) {
        console.log("------------- Escolha as Opções Abaixo. -------------");
        console.log("1 - Cadastrar novo. ---------------------------------");
        console.log("2 - Listar todos. -----------------------------------");
        console.log("3 - Pesquisar fornecedor. ---------------------------");
        console.log("4 - Excluir fornecedor. -----------------------------");
        console.log("5 - Sair. -------------------------------------------");
        console.log('-----------------------------------------------------');
    let opt = ler.questionInt("=> ");
    
    switch (opt) {
        case 1:
            console.clear();
            cadForn();
            break;
        case 2:
            console.clear();
            listarForn();
            break;
        case 3:
            console.clear();
            pesqForn();
            break;
        case 4:
            console.clear();
            excForn();
            break;
        case 5:
            check = false;
            console.clear();    
            console.log("Você saiu!");
            break;
        default:
            console.clear();
            console.log("Opção Inválida!");
            break;
    }
    }
};

const cadForn = () => {
    let nome = ler.question('Digite o nome do fornecedor: ');
    let contato = ler.question('Digite o contato do fornecedor: ');
    let endereco = ler.question('Digite o endereço do fornecedor: ');
    let produtos_fornecidos = ler.question("Qual os produtos oferecidos: ");
    addForn(nome, contato, endereco, produtos_fornecidos);
}

const addForn = (nome, contato, endereco, produtos_fornecidos) => {
    fornecedores.push({nome, contato, endereco, produtos_fornecidos});
    console.log("Fornecedor cadastrado com sucesso!");
    ler.question("Pressione Enter para voltar");
    console.clear();
}

const listarForn = () => {
        console.log("------- Fornecedores Cadastrados -------");
        fornecedores.forEach((fornecedor => console.log(
            `Nome: ${fornecedor.nome}---------------------------
            Contato: ${fornecedor.contato}
            Endereço: ${fornecedor.endereco}
            Produtos fornecidos: ${fornecedor.produtos_fornecidos}
            -----------------------------------------------
            `)));
}

const pesqForn = () => {
    check = true;
    while(check){
        let nome = ler.question("Qual o nome do fornecedor: ");
        let forn = fornecedores.find(forn => forn.nome === nome);
        if(forn){
            console.log(
                `Nome: ${forn.nome}---------------------------
                Contato: ${forn.contato}
                Endereço: ${forn.endereco}
                Produtos fornecidos: ${forn.produtos_fornecidos}
                -----------------------------------------------
                `)
        let opt = ler.questionInt("Deseja buscar outro fornecedor? (1 - Sim / 2 - Não): ");
    if (opt === 1) {
        console.clear();
    } else {
        check = false;
        console.clear();
    }
    } else {
        console.log("Fornecedor não encontrado!");
}
    }
}

const excForn = () => {
    check = true;
    while(check){
        let nome = ler.question("Qual o nome do fornecedor: ");
        let fornIndex = fornecedores.findIndex(forn => forn.nome === nome);
        if(fornIndex !== -1){
            fornecedores.splice(fornIndex, 1);
            console.log("Fornecedor removido!");
            console.log(".....");
            ler.question("Pressione Enter para voltar.");
            check = false;
            console.clear();
        } else {
            console.log("Fornecedor não encontrado!");
        }
    }
}

module.exports = parceiros;

const gerenciarParceiros = () => {
    let check = true;
    while (check) {
        console.log("------------- Escolha as Opções Abaixo. -------------");
        console.log("1 - Cadastrar novo. ---------------------------------");
        console.log("2 - Listar todos. -----------------------------------");
        console.log("3 - Pesquisar Parceiro. -----------------------------");
        console.log("4 - Excluir Parceiro. -------------------------------");
        console.log("5 - Sair. -------------------------------------------");
        console.log('-----------------------------------------------------');
    let opt = ler.questionInt("=> ");
    
    switch (opt) {
        case 1:
            console.clear();
            cadPar();
            break;
        case 2:
            console.clear();
            listarPar();
            break;
        case 3:
            console.clear();
            pesqPar();
            break;
        case 4:
            console.clear();
            excPar();
            break;
        case 5:
            check = false;
            console.clear();    
            console.log("Você saiu!");
            break;
        default:
            console.clear();
            console.log("Opção Inválida!");
            break;
    }
    }
}

const cadPar = () => {
    let nome = ler.question('Digite o nome do parceiro: ');
    let contato = ler.question('Digite o contato do parceiro: ');
    let endereco = ler.question('Digite o endereço do parceiro: ');
    let cnpj = ler.question("Quais o cnpj do parceiro: ");
    addPar(nome, contato, endereco, cnpj)
}
const addPar = (nome, contato, endereco, cnpj) =>{
    parceiros.push({nome, contato, endereco, cnpj});
    console.log("Parceiro cadastrado com sucesso!");
    ler.question("Pressione Enter para voltar");
    console.clear();
}   

const listarPar = () => {
    console.log("------- Parceiros Cadastrados -------");
    parceiros.forEach(parceiro => console.log(
        `Nome: ${parceiro.nome}---------------------------
        Contato: ${parceiro.contato}
        Endereço: ${parceiro.endereco}
        CNPJ: ${parceiro.cnpj}
        -----------------------------------------------
        `));
}

const pesqPar = () => {
    let nome = ler.question("Qual o nome do parceiro: ");
    let parc = parceiros.find(parceiro => parceiro.nome === nome);
    if (parc) {
        console.log(
            `Nome: ${parceiros.nome}---------------------------
            Contato: ${parceiros.contato}
            Endereço: ${parceiros.endereco}
            CNPJ: ${parceiros.cnpj}
            -----------------------------------------------
            `);
        let opt = ler.questionInt(`Quer procurar outro parceiro? (1 - SIM/ 2 - NÃO)`);
        if (opt === 1) {
            console.clear();
    } else {
        check = false;
        console.clear();  
    }
}else {
    console.log("Parceiro não encontrado!");
}
}


const excPar = () => {
    let check = true;
    while (check) {
        let nome = ler.question("Qual o nome do parceiro: ");
        let par = parceiros.findIndex(par => par.nome === nome);
        let parc = parceiros.findIndex(p => p.nome === nome);
        if (par) {
            console.log(
                `Nome: ${parceiros.nome}---------------------------
                Contato: ${parceiros.contato}
                Endereço: ${parceiros.endereco}
                CNPJ: ${parceiros.cnpj}
                -----------------------------------------------
                `);
        let opt = ler.questionInt("Deseja excluir esse Parceiro (1 - SIM/2 - NÃO)");
        if (opt) {
            console.log("Parceiro removido!");
            console.log(".....");
            ler.question("Pressione Enter para voltar.");
            check = false;
            console.clear();
        } else {
            check = false;
            console.clear();
        }
        } else {
            console.log("Parceiro não encontrado!");
        }
    }
}

const ajuda = () => {
    console.log("------- Ajuda -------");
    console.log("Bem-vindo à ajuda!");
    console.log("Comandos disponíveis:");
    console.log("1. Lista de Produtos (Listar todos, pesquisar produto, cadastrar novo e excluir).");
    console.log("2. Lista de Clientes (Cadastrar novo, listar todos, pesquisar cliente, e excluir).");
    console.log("3. Lista de Fornecedores (Cadastrar novo, listar todos, pesquisar fornecedor, e excluir).");
    console.log("4. Lista de Parceiros (Cadastrar novo, listar todos, pesquisar fornecedor, e excluir).");
    console.log("Cada uma das opções acima abre um menu com as opções acima");
    console.log("Caso tenha mais dúvidas, vá nesse link: https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    console.log("5. Sair.");
    let opt = ler.questionInt("=> "); 
    if (opt === 5) {
        console.log("Você saiu!");
        check = false;
        console.clear();
    } else {
        console.log("Opção inválida!"); 
    }
}

const sobre = () => {
        console.log("------- Sobre -------");
    console.log("Esse sitema tem como objetivo otimizar e organizar cada critério ,esse sistema foi desenvolvido por Arthur Correa, V1.0");
    let opt = ler.questionInt(`1 - Sair`);
    if (opt === 1) {
        console.log("Você saiu!");
        check = false;
        console.clear();
}
}

const dados = {
    produtos: produtos,
    clientes: clientes,
    fornecedores: fornecedores,
    parceiros: parceiros,
    historico_compras: historico_compras
};

// Função para salvar dados em formato JSON
function salvarJSON() {
    // Verifica se o arquivo existe
    if (fs.existsSync('data.JSON')) {
        // Lê o conteúdo do arquivo e converte para objeto JavaScript
        const dadosAntigos = JSON.parse(fs.readFileSync('data.JSON', 'utf8'));
        // Mescla os dados antigos com os novos
        Object.assign(dadosAntigos, dados);
        // Converte o objeto mesclado de volta para JSON
        const dadosJSON = JSON.stringify(dadosAntigos, null, 2);
        // Escreve os dados no arquivo
        fs.writeFileSync('data.JSON', dadosJSON);
        console.log(`Dados adicionados ao arquivo ${nomeArquivo}`);
    } else {
        // Se o arquivo não existe, cria um novo e escreve os dados
        const dadosJSON = JSON.stringify(dados, null, 2);
        fs.writeFileSync('data.JSON', dadosJSON);
        console.log(`Arquivo ${'data.JSON'} criado com os dados`);
    }
}

/*const dadosJSON = JSON.stringify(parceiros, fornecedores, historico_compras, clientes, produtos, null, 2);

fs.writeFileSync('arquivo.json'), dadosJSON, 'utf-8', (erro) => {
    if (erro){
        console.log("Erro ao gravar dados no JSON", erro)
    } else {
        console.log("Dados salvos com sucesso em 45.1.usuarios.JSON")
    }
};

const exibirDados = fs.readFileSync('arquivo.json', 'utf-8');
let users = JSON.parse(exibirDados);
*/

module.exports = { salvarJSON, gerenciarProdutos, gerenciarClientes, gerenciarFornecedores, gerenciarParceiros, ajuda, sobre };
//Intel Core i7-10700K

