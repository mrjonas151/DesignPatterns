import Contato from "../contatos/Contato.js";
import GerenciadorContatos from "../contatos/GerenciadorContatos.js";

export default class GerenciadorContatosFacade {
    constructor() {
        this.gerenciador = new GerenciadorContatos();
    }

    adicionarContato(nome, telefone, email) {
        const contato = new Contato(nome, telefone, email);
        this.gerenciador.adicionarContato(contato);
    }

    removerContato(nome) {
        this.gerenciador.removerContato(nome);
    }

    listarContatos() {
        return this.gerenciador.listarContatos();
    }

    buscarContato(nome) {
        return this.gerenciador.listarContatos().find(contato => contato.nome === nome);
    }
}