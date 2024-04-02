import GerenciadorContatosFacade from "../facade/GerenciadorContatosFacade.js";
import BuscaContatosTemplate from "./BuscaContatosLinear.js";

export default class BuscaContatosLinear extends BuscaContatosTemplate {
    obterContatos() {
        return new GerenciadorContatosFacade().listarContatos();
    }

    filtrarContato(contatos, nome) {
        return contatos.find(contato => contato.nome === nome);
    }
}