

let paginaIncial = prompt("Digite um site")

if (paginaIncial.substring(0, 7) !== "http://" && paginaIncial.substring(0, 8) !== "https://") {
    paginaIncial = "http://" + paginaIncial
}

$janelaPrincipal.src = paginaIncial
$inputEndereco.value = paginaIncial