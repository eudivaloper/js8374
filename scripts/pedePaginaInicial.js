const aceitouSalvar = JSON.parse(localStorage.getItem("aceitouSalvar"))

if (aceitouSalvar === null) {

    let paginaInicial = localStorage.getItem("paginaInicial")

    if (!paginaInicial) {
        paginaInicial = prompt("Digite um site")
    }

    // paginaIncial !== null && paginaIncial == false
    // paginaIncial !== null && paginaIncial == ""
    if (paginaInicial) {

        if (paginaInicial.substring(0, 7) !== "http://" &&
            paginaInicial.substring(0, 8) !== "https://") {
            paginaInicial = "http://" + paginaInicial
        }

        $janelaPrincipal.src = paginaInicial
        $inputEndereco.value = paginaInicial

        localStorage.setItem("paginaInicial", paginaInicial)
    }
}
