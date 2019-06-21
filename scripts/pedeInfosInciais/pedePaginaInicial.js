import {aceitouSalvar as storageAceitouSalvar} from '../storage/aceitouSalvar.js'
import {paginaInicial, setPaginaInicial} from '../storage/paginaInicial.js'

if (storageAceitouSalvar === null || storageAceitouSalvar === true) {

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

        setPaginaInicial(paginaInicialDefault)
    }
}