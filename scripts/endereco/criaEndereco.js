export function Endereco(endereco) {

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
    return {
        urlCompleta: enderecoCompleto,
        urlResumida: enderecoResumido
    }
}