let botao = document.getElementById("botao")
let select = document.getElementById("select-moedas")





async function convertermoedas() {
    let moedas = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL").then(function (resposta) {
        return resposta.json()
    })

    let dolar = moedas.USDBRL.high
    let euro = moedas.EURBRL.high

    console.log(dolar)
    console.log(euro)


    let inputvaloremreais = Number(document.getElementById("input").value)
    let inputmoedas = document.getElementById("input-moedas")
    let textoreal = document.getElementById("texto-real")

    if (select.value === "US$ dollar") {
        let valoremdolares = inputvaloremreais / dolar
        inputmoedas.innerHTML = valoremdolares.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        })
    }


    if (select.value === "€ euro") {
        let valoremeuros = inputvaloremreais / euro
        inputmoedas.innerHTML = valoremeuros.toLocaleString("de-DE", {
            style: "currency",
            currency: "EUR"
        })


    }

    textoreal.innerHTML = inputvaloremreais.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL"
    })
}
//funcao responsavel por coverter as banddeiras das moedas
function trocademoeda() {
    let textomoedas = document.getElementById("texto-moedas")
    let bandeiramoedas = document.getElementById("bandeira-moedas")


    if (select.value === "US$ dollar") {
        textomoedas.innerHTML = "dolar Americano"
        bandeiramoedas.src = "./download.jfif"
    }


    if (select.value === "€ euro") {
        textomoedas.innerHTML = "euro"
        bandeiramoedas.src = "./euro.png"
    }

    convertermoedas()
}

botao.addEventListener("click", convertermoedas)
select.addEventListener("change", trocademoeda)