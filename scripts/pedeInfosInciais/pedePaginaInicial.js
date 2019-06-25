import { aceitouSalvar as storageAceitouSalvar } from '../storage/aceitouSalvar.js'
import { paginaInicial, setPaginaInicial } from '../storage/paginaInicial.js'
import { formataEndereco } from '../endereco/formataEndereco.js'

if (storageAceitouSalvar === null || storageAceitouSalvar === true) {

    let paginaInicialDefault = paginaInicial

    if (!paginaInicialDefault) {
        paginaInicialDefault = prompt("Escolha a página inicial")
    }

    if (paginaInicialDefault) {

        const enderecoCompleto = formataEndereco(paginaInicialDefault)

        setPaginaInicial(enderecoCompleto)

    }

}