const listaSites = JSON.parse(sessionStorage.getItem("historico")) || []

let posicao = JSON.parse(sessionStorage.getItem("posicaoHistorico")) || -1


export function adiciona(endereco) {
    if (endereco !== listaSites[posicao]) {
        listaSites.slice(posicao + 1)
        listaSites.push(endereco)
        sessionStorage.setItem("historico", JSON.stringify(listaSites))
        sessionStorage.setItem("posicaHistorico", posicao)
        posicao++
    }
}

export function volta() {
    const isPrimeiraPosicao = posicao === 0
    if (listaSites.length !== 1 && !isPrimeiraPosicao) {
        posicao = posicao - 1
        return listaSites[posicao]
    }
}

export function avanca() {
    const isUltimaPosicao = posicao === listaSites.length - 1
    if (listaSites.length !== 1 && !isUltimaPosicao) {
        posicao = posicao + 1
        return listaSites[posicao]
    }
}