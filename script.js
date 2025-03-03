const Convertbutton = document.querySelector("#Conversor")
const Alteraçao = document.querySelector(".Seletor2")
const ValordoOutros = document.querySelector(".ValorConvertido") // Valor Da Conversao



function Convertendo() {
    const InputValor = document.querySelector(".Input-Resultado").value

    const ValorDolar = 5.8
    const ValorEuro = 6.1
    const ValorLibra = 7.4
    if (Alteraçao.value == 'Dolar') {
        ValordoOutros.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(InputValor / ValorDolar)
    }
    if (Alteraçao.value == 'Euro') {
        ValordoOutros.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(InputValor / ValorEuro)
    }
    if (Alteraçao.value == 'Libra') {
        ValordoOutros.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(InputValor / ValorLibra)


    }
    const ValordoReal = document.querySelector(".ValorConverter") // Valor real

    ValordoReal.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(InputValor)

}
function TrocaSeletor() {
    const Band = document.getElementById("Bandeira")
    const imagemMoeda = document.querySelector(".Moeda-Dolar")

    if (Alteraçao.value == 'Dolar') {
        Bandeira.innerHTML = "Dolar Americano"
        imagemMoeda.src = 'assets/Dolar.png'
    }

    if (Alteraçao.value == 'Euro') {
        Bandeira.innerHTML = "Euro"
        imagemMoeda.src = 'assets/Euro.png'

    }

    if (Alteraçao.value == "Libra") {
        Bandeira.innerHTML = "Libra"
        imagemMoeda.src = "assets/libra 1.png"
    }
    Convertendo()
}

Alteraçao.addEventListener('change', TrocaSeletor)
Convertbutton.addEventListener("click", Convertendo)

