import * as storagePaginaInicial from "./storage/paginaInicial.js"
import * as storageAceitouSalvar from "./storage/aceitouSalvar.js"

import { formataEndereco } from "./endereco/formataEndereco.js"


$inputPaginaInicial.value = storagePaginaInicial.paginaInicial
$inputPermitiuSalvar.checked = storageAceitouSalvar.aceitouSalvar

$botaoSalvar.onclick = salvar

function salvar() {
    const funcaoEscolhida = $inputPermitiuSalvar.checked === true
        ? storageAceitouSalvar.setAceitou
        : storageAceitouSalvar.setNaoAceitou

    funcaoEscolhida()

    const enderecoCompleto = formataEndereco($inputPaginaInicial.value)
    $inputPaginaInicial.value = enderecoCompleto

    storagePaginaInicial.setPaginaInicial($inputPaginaInicial.value)
}

$botaoLimpaTudo.addEventListener("click", function () {
    const chavesPermanentes = [
        "aceitouSalvar",
        "aceitouTermos"
    ]

    const listaChavesLocalStorage = Object.keys(localStorage)
    for(let chave of listaChavesLocalStorage) {
        const isChavePermanente = chavesPermanentes.includes(chave)

        if(!isChavePermanente) {
            localStorage.removeItem(chave)
        }
    }

    const listaChaveSessionStorege = Object.keys(sessionStorage)
    for(let chave of listaChaveSessionStorege) {
        sessionStorage.removeItem(chave)
    }

    window.location.reload()
})