export function CakeEnderecoInvalidoError(endereco) {

    if (this === undefined || (this !== undefined && !(this instanceof Endereco))
    ) {
        return new Endereco(endereco)
    }

    const erro = new ("CakeEnderecoInvalidorError")
    this.stack = erro.stack
    this.endereco = endereco
    this.message = `Não consegui enterder o endereço: \n\n ${endereco}`
}

CakeEnderecoInvalidoError.prototype = Error.prototype
CakeEnderecoInvalidoError.prototype.toString = function() {
    return `${this.message}\n\n${this.stack}`
}