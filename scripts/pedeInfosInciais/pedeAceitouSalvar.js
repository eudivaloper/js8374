import * as storageAceitouSalvar from "../storage/aceitouSalvar.js"

if (storageAceitouSalvar.aceitouSalvar === null) {

    const aceitouSalvar = confirm('Você aceita que a gente salve suas informações?')

    if (!aceitouSalvar) {
        alert('Você pode mudar isso na página de configurações')
    }

    const funcaoSalvar = aceitouSalvar === true
    ? storageAceitouSalvar.aceitouSalvar
    : storageAceitouSalvar.setNaoAceitou

    funcaoSalvar()
}

// export default aceitouSalvar