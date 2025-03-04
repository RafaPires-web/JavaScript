const Convertbutton = document.querySelector("#Conversor") // Botao
const Alteraçao = document.querySelector(".Seletor2") // Segundo Seletor
const ValordoOutros = document.querySelector(".ValorConvertido") // Valor Da Conversao
const primeiro = document.querySelector(".Seletor1")
const pvalor = document.querySelector('.ValorConverter')


function Convertendo() {
    const InputValor = document.querySelector(".Input-Resultado").value

    const ValorDolar = 5.8
    const ValorEuro = 6.1
    const ValorLibra = 7.4
    const ValorBrasil = 5.3

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

function converter() {

    const bandeiraCima = document.getElementById("ValorBr")
    const Texto = document.getElementById("P1")

    if (primeiro.value == "Dolinho") {
        bandeiraCima.src = 'assets/Dolar.png'
        Texto.innerHTML = "Dolar"

    }
    if (primeiro.value == "Real") {
        bandeiraCima.src = "assets/Real.png"
        Texto.innerHTML = "Reais"

    }

}

function eli(){
    const InputValor = document.querySelector(".Input-Resultado").value

    const ValorDolar = 5.8
    const ValorEuro = 6.1
    const ValorLibra = 7.4
    const ValorBrasil = 5.3
    
    if (primeiro.value == "Dolinho"){
        pvalor.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(InputValor / ValorLibra)

    }
    
    if (Alteraçao.value == 'Libra') {
        ValordoOutros.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format()


    }
}
primeiro.addEventListener('change', converter)
Alteraçao.addEventListener('change', TrocaSeletor)
Convertbutton.addEventListener("click", Convertendo)

