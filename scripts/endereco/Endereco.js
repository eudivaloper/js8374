import { CakeEnderecoInvalidoError } from "/scripts/erros/CakeEnderecoInvalidoError";

export function Endereco(endereco) {

    if (this === undefined || (this !== undefined && !(this instanceof Endereco))
    ) {
        return new Endereco(endereco)
    }

    let enderecoCompleto
    let enderecoResumido

    if (!endereco || endereco === "blank") {
        enderecoCompleto = "blank"
        enderecoResumido = "blank"
    } else {

        if (
            endereco.substring(0, 7) !== 'http://' &&
            endereco.substring(0, 8) !== 'https://'
        ) {
            // Assignement Atribuição
            endereco = 'http://' + endereco
        }

        let url
        try {
            url = new URL(endereco)
        } catch (error) {
            const erroCustomizado = new CakeEnderecoInvalidoError(endereco)
            throw erroCustomizado
        }

        if (url.hostname === "localhost") {
            const paginaLocal = url.pathname.replace("/", "")
            enderecoCompleto = paginaLocal
            enderecoResumido = paginaLocal
        } else {
            enderecoCompleto = url.toString()
            enderecoResumido = url.hostname
        }

    }
    this.urlCompleta = enderecoCompleto
    this.urlResumida = enderecoResumido

}

Endereco.prototype = {
    toString: function () {
        return this.urlCompleta
    }
}