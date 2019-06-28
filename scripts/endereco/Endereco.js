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
        const url = new URL(endereco)

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