import * as storageAceitouSalvar from "../storage/aceitouSalvar.js"

if (storageAceitouSalvar.aceitouSalvar === null) {

    const aceitouSalvar = confirm('Você aceita que a gente salve suas informações?')

    if (!aceitouSalvar) {
        alert('Você pode mudar isso na página de configurações')
    }

    storageAceitouSalvar.setAceitouSalvar(aceitouSalvar)
}

// export default aceitouSalvar