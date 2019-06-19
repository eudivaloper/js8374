(function() {
    "use strict"
    
    const aceitouAnteriomente = localStorage.getItem("aceitouSalvar")
    
    if (!aceitouAnteriomente) {
        const aceitouSalvar = confirm("Você aceita que suas informações sejam salvas?")
        if (!aceitouSalvar) {
            alert("Você pode mudar depois em configurações")
        }
        localStorage.setItem("aceitouSalvar", aceitouSalvar)
    }

})()
