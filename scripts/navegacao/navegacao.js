import * as storagePaginaInicial from "/scripts/storage/paginaInicial.js"
import { formataEndereco } from "/scripts/endereco/formataEndereco.js"

const paginaAtual = localStorage.getItem("paginaAtual")

if (paginaAtual !== null) {

    const enderecoCompleto = formataEndereco(paginaAtual)

    $janelaPrincipal.src = enderecoCompleto
    $inputEndereco.value = enderecoCompleto

} else {

    const enderecoCompleto = formataEndereco(storagePaginaInicial.paginaInicial)

    $janelaPrincipal.src = enderecoCompleto
    $inputEndereco.value = enderecoCompleto
}