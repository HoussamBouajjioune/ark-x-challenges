console.log("Hello, World!");
console.log("This is day 14 of the coding challenge.");
const fs = require('fs').promises;
// const citys = require("./moroccan_cities_with_incremental_id.json")

const randomCity = (citys) => {
    const randomIndex = Math.floor(Math.random() * citys.length);
    return citys[randomIndex];
}

async function Temperature() {
    const city = randomCity(JSON.parse(await fs.readFile('citys.txt', 'utf8')));
    const result = await fetch(`https://wttr.in/${city.name}?format=j1`)
    const data = await result.json();
    console.log(`The weather in ${city.name} is: ${data.current_condition[0].temp_C}°C`);
}

Temperature().catch(console.error);