import { paginaInicial } from "../storage/paginaInicial.js"
import { carregar } from "../navegacao/carregar.js"

$botaoHome.addEventListener("click", function vaiParaHome() {
    carregar(paginaInicial)
})