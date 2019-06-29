function formataEndereco(enderecoPraFormatar) {
    if (!enderecoPraFormatar || enderecoPraFormatar === "blank") {
        return "blank"
    }

    return enderecoPraFormatar
}

export { formataEndereco }