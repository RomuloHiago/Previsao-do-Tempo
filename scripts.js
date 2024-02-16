const buttonSearch = document.querySelector(".btn-search"); // Seleciona o elemento HTML com a classe ".btn-search" e atribui a uma variável chamada buttonSearch

// Define uma função chamada putDataInSreem(data) que recebe um objeto de dados como argumento
function putDataInSreem(data) {

    // Seleciona os elementos HTML com as classes específicas e atribui a variáveis correspondentes
    const city = document.querySelector(".city");
    const temperature = document.querySelector(".temp");
    const weatherDescription = document.querySelector(".weather");
    const umidityDescription = document.querySelector(".umidity");
    const cloudDescription = document.querySelector(".cloud");

    // Atualiza o conteúdo dos elementos HTML selecionados com os dados recebidos
    city.innerHTML = "Tempo em " + data.name;
    temperature.innerHTML = Math.floor(data.main.temp) + "ºC";
    weatherDescription.innerHTML = data.weather[0].description;
    umidityDescription.innerHTML = "Umidade " + data.main.humidity + "%";
    cloudDescription.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

    
    console.log(data);
}

// Define uma função assíncrona chamada showCity(city) que recebe o nome de uma cidade como argumento
async function showCity(city) {
    
    const apikey = '6a4070a09dfe767e9559baf621897ce6'; // Define a chave de API para acessar os dados da API do OpenWeatherMap

    // Realiza uma requisição assíncrona para a API do OpenWeatherMap para obter os dados da cidade específica
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&lang=pt_br&units=metric`)
        .then(element => element.json());

    
    putDataInSreem(data);
}

// Define uma função chamada searchCity() para lidar com a busca da cidade quando o botão de busca é clicado
function searchCity() {
    
    const inputCity = document.querySelector(".input-city").value;  // Obtém o valor inserido no campo de entrada de texto com a classe ".input-city"

    
    showCity(inputCity);  // Chama a função showCity() passando o nome da cidade como argumento
}

// Adiciona um ouvinte de evento de clique ao botão de busca, que chama a função searchCity() quando clicado
buttonSearch.addEventListener("click", searchCity);
