import * as storagePaginaInicial from "./storage/paginaInicial.js"
import * as storageAceitouSalvar from "./storage/aceitouSalvar.js"


$inputPaginaInicial.value = storagePaginaInicial.paginaInicial
$inputPermitiuSalvar.checked = storageAceitouSalvar.aceitouSalvar

$botaoSalvar.onclick = salvar

function salvar() {
    const funcaoEscolhida = $inputPermitiuSalvar.checked === true
    ? storageAceitouSalvar.setAceitou
    : storageAceitouSalvar.setNaoAceitou

    funcaoEscolhida()

    storagePaginaInicial.setPaginaInicial($inputPaginaInicial.value)
}