const key = "be1e141886d036261acd29010ae3c0b0" // api OpenWeather 



function colocarDadosNaTela(dados) {
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "ºC"
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

}
document.addEventListener('DOMContentLoaded', function () {
    const inputCidade = document.querySelector(".input-cidade");

    inputCidade.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault()
            // Coloque o código que você quer executar quando 'Enter' é pressionado aqui
            //console.log('Texto no input: ', inputCidade.value);
            // Chame a função que você deseja executar quando 'Enter' é pressionado
            cliqueiNoBotao();

        }
    })


});


async function buscarCidade(cidade) {

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())

    colocarDadosNaTela(dados)
}

function cliqueiNoBotao() {
    const cidade = document.querySelector(".input-cidade").value

    buscarCidade(cidade)
}

