console.log("Hello, World!");
console.log("This is day 13 of the coding challenge.");
const citys = require("./moroccan_cities_with_incremental_id.json")

const randomCity = (citys) => {
    const randomIndex = Math.floor(Math.random() * citys.length);
    return citys[randomIndex];
}

async function Temperature() {
    const city = randomCity(citys);
    const result = await fetch(`https://wttr.in/${city.name}?format=j1`)
    const data = await result.json();
    console.log(`The weather in ${city.name} is: ${data.current_condition[0].temp_C}°C`);
}

Temperature().catch(console.error);