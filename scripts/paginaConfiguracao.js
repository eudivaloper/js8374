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