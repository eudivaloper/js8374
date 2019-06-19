import aceitouSalvar from './aceitouSalvar.js'

if (aceitouSalvar === null || aceitouSalvar === true) {

    let paginaInicial = localStorage.getItem('paginaInicial')
    
    if (!paginaInicial) {
        paginaInicial = prompt("Escolha a página inicial")
    }

    if (paginaInicial) {

        if (
            paginaInicial.substring(0, 7) !== 'http://' &&
            paginaInicial.substring(0, 8) !== 'https://'
        ) {
            // Assignement Atribuição
            paginaInicial = 'http://' + paginaInicial
        }

        $janelaPrincipal.src = paginaInicial
        $inputEndereco.value = paginaInicial

        localStorage.setItem('paginaInicial', paginaInicial)
    }
}