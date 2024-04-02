import readline from 'readline';
import { default as GerenciadorContatosFacade } from './facade/GerenciadorContatosFacade.js';

const readLine = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const gerenciadorFacade = new GerenciadorContatosFacade();

function exibirComandos() {
    console.log("\nLista de Comandos:");
    console.log("1. Adicionar Contato");
    console.log("2. Remover Contato");
    console.log("3. Listar Contatos");
    console.log("4. Buscar Contato");
    console.log("sair. Sair do programa\n");
}

async function loopCLI() {
    while (true) {
        exibirComandos();
        const resposta = await perguntar('Digite o número do comando: ');
        const comando = resposta.trim();

        switch (comando) {
            case '1':
                const nome = await perguntar('Digite o nome do contato: ');
                const telefone = await perguntar('Digite o telefone do contato: ');
                const email = await perguntar('Digite o email do contato: ');
                gerenciadorFacade.adicionarContato(nome, telefone, email);
                console.log("Contato adicionado com sucesso!");
                break;
            case '2':
                const nomeRemover = await perguntar('Digite o nome do contato a ser removido: ');
                gerenciadorFacade.removerContato(nomeRemover);
                console.log("Contato removido com sucesso!");
                break;
            case '3':
                console.log("Lista de contatos:");
                console.log(gerenciadorFacade.listarContatos());
                break;
            case '4':
                const nomeBuscar = await perguntar('Digite o nome do contato a ser buscado: ');
                const contatoEncontrado = gerenciadorFacade.buscarContato(nomeBuscar);
                if (contatoEncontrado) {
                    console.log("Contato encontrado:", contatoEncontrado);
                } else {
                    console.log("Contato não encontrado.");
                }
                break;
            case 'sair':
                console.log("Saindo do programa...");
                readLine.close();
                return;
            default:
                console.log("Comando inválido.");
        }
    }
}

function perguntar(pergunta) {
    return new Promise(resolve => {
        readLine.question(pergunta, resposta => {
            resolve(resposta);
        });
    });
}

loopCLI();