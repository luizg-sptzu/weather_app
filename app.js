const prompt = require('prompt-sync')();
let city = prompt('City: ');

const fetchData = async (city) => {
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city},id=524901&appid=967a2f57a95170e7a6abccdfbea506ed`
    const response = await fetch(url);
    const data = await response.json();
    return data;
};

const getData = async (city) => {
    try {
        const data = await fetchData(city);
        console.log(`The weather forecast calls for ${data.list[0].weather[0].description} in ${city}.`);
    }   catch (error) {
        console.error(error.message);
    }
};

getData(city);
