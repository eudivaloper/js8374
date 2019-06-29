import * as storagePaginaInicial from "./storage/paginaInicial.js"
import * as storageAceitouSalvar from "./storage/aceitouSalvar.js"

import { Endereco } from "./endereco/Endereco.js"
import { CakeEnderecoInvalidoError } from "./erros/CakeEnderecoInvalidoError.js";


$inputPaginaInicial.value = storagePaginaInicial.paginaInicial
$inputPermitiuSalvar.checked = storageAceitouSalvar.aceitouSalvar

$botaoSalvar.onclick = salvar

function salvar() {
    const funcaoEscolhida = $inputPermitiuSalvar.checked === true
        ? storageAceitouSalvar.setAceitou
        : storageAceitouSalvar.setNaoAceitou

    funcaoEscolhida()

    try {
        const enderecoCompleto = new Endereco($inputPaginaInicial.value)
        $inputPaginaInicial.value = enderecoCompleto.toString()
        storagePaginaInicial.setPaginaInicial(enderecoCompleto)
    } catch (error) {
        if (error instanceof CakeEnderecoInvalidoError) {
            $inputPaginaInicial.value = ""
            alert('Invalido')
        } else {
            throw error
        }
    }
}

$botaoLimpaTudo.addEventListener("click", function () {
    const chavesPermanentes = [
        "aceitouSalvar",
        "aceitouTermos"
    ]

    const listaChavesLocalStorage = Object.keys(localStorage)
    for (let chave of listaChavesLocalStorage) {
        const isChavePermanente = chavesPermanentes.includes(chave)

        if (!isChavePermanente) {
            localStorage.removeItem(chave)
        }
    }

    const listaChaveSessionStorege = Object.keys(sessionStorage)
    for (let chave of listaChaveSessionStorege) {
        sessionStorage.removeItem(chave)
    }

    window.location.reload()
})