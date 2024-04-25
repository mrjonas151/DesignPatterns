export default class BuscaContatosTemplate {
    buscar(nome) {
        const contatos = this.obterContatos();
        return this.filtrarContato(contatos, nome);
    }

    obterContatos() {}
    filtrarContato(contatos, nome) {}
}
