export let aceitouSalvar = JSON.parse(localStorage.getItem("aceitouSalvar"))

function setAceitouSalvar(valor) {
    aceitouSalvar = valor
    localStorage.setItem("aceitouSalvar", valor)
}

export function setAceitou() {
    setAceitouSalvar(true)
}

export function setNaoAceitou() {
    setAceitouSalvar(false)
}

