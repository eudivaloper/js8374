import { Endereco } from "/scripts/endereco/Endereco.js"

export function carregar(seiLa) {

    let endereco

    if (typeof seiLa === 'string') {
        endereco = new Endereco(seiLa)
    } else if (seiLa instanceof Endereco) {
        endereco = seiLa
    } else {
        throw new Error(`
            Não foi possivel carregar o seguinte endereco:
                Valor: ${JSON.stringify(seiLa)}
                Tipo: ${typeof seila}
        `)
    }

    $janelaPrincipal.src = endereco.urlCompleta
    $inputEndereco.value = endereco.urlCompleta
}
