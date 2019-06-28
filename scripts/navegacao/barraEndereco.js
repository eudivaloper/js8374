import { carregar } from "/scripts/navegacao/carregar.js"
import { formataEndereco } from "/scripts/endereco/formataEndereco.js"
import { Endereco } from "/scripts/endereco/Endereco.js"

let endereco

$janelaPrincipal.addEventListener("load", function () {
    endereco = new Endereco($janelaPrincipal.contentWindow.location.href)
})

$inputEndereco.addEventListener("focus", exibeEnderecoCompleto)
$inputEndereco.addEventListener("blur", exibeEnderecoResumido)
$janelaPrincipal.addEventListener("load", exibeEnderecoResumido)

function exibeEnderecoCompleto() {
    $inputEndereco.value = endereco.urlCompleta
}

function exibeEnderecoResumido() {
    $inputEndereco.value = endereco.urlResumida
}

$inputEndereco.addEventListener("keyup", function (evento) {
    const apertouEnter = event.key === "Enter"
    if (apertouEnter) {
        // const enderecoCompleto = formataEndereco($inputEndereco.value)
        endereco = new Endereco($inputEndereco.value)
        carregar(endereco)
    }

})