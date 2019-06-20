import aceitouSalvar from '../storage/aceitouSalvar.js'
import paginaInicial from '../storage/paginaInicial.js'

if (aceitouSalvar === null || aceitouSalvar === true) {

    let paginaInicialDefault = paginaInicial 
    
    if (!paginaInicialDefault) {
        paginaInicialDefault = prompt("Escolha a página inicial")
    }

    if (paginaInicialDefault) {

        if (
            paginaInicialDefault.substring(0, 7) !== 'http://' &&
            paginaInicialDefault.substring(0, 8) !== 'https://'
        ) {
            // Assignement Atribuição
            paginaInicialDefault = 'http://' + paginaInicialDefault
        }

        $janelaPrincipal.src = paginaInicialDefault
        $inputEndereco.value = paginaInicialDefault

        localStorage.setItem('paginaInicial', paginaInicialDefault)
    }
}