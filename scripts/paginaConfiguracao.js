import * as storagePaginaInicial from "./storage/paginaInicial.js"
import * as storageAceitouSalvar from "./storage/aceitouSalvar.js"


$inputPaginaInicial.value = storagePaginaInicial.paginaInicial
$inputPermitiuSalvar.checked = storageAceitouSalvar.aceitouSalvar

$botaoSalvar.onclick = salvar

function salvar() {
    storageAceitouSalvar.setAceitouSalvar($inputPermitiuSalvar.checked)
    storagePaginaInicial.setPaginaInicial($inputPaginaInicial.value)
}