import { carregar } from "/scripts/navegacao/carregar.js"
import { formataEndereco } from "/scripts/endereco/formataEndereco.js"
import { Endereco } from "/scripts/endereco/Endereco.js"
import { CakeEnderecoInvalidoError } from "/scripts/erros/CakeEnderecoInvalidoError";

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

        try {
            endereco = new Endereco($inputEndereco.value)
        } catch (error) {
            if (erro instanceof CakeEnderecoInvalidoError) {
                alert(error.message)
            } else {
                throw error
            }
        }
        // const enderecoCompleto = formataEndereco($inputEndereco.value)
        carregar(endereco)
    }

})