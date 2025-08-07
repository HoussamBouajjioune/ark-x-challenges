const http = require('http');
const url = require('url');

async function weather(city) {

    const citys = require("./moroccan_cities_with_incremental_id.json")

    if (citys.findIndex(c => c.name.toLocaleLowerCase === city.toLocaleLowerCase ) == -1) {
        return `City ${city} not found in the database.`;
    } else {
        const result = await fetch(`https://wttr.in/${city}?format=j1`)
        const data = await result.json();
        console.log(`The weather in ${city} is: ${data.current_condition[0].temp_C}°C`);
        return `The weather in ${city} is: ${data.current_condition[0].temp_C}°C`
    }

}

const server = http.createServer((req, res) => {
    // Parse the URL
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;



    // Set the content type
    res.setHeader('Content-Type', 'application/json');

    // Define basic routes
    if (path === '/' && req.method === 'GET') {
        res.writeHead(200);
        res.end(JSON.stringify({ message: 'Welcome to the homepage!' }));
    } else if (path.startsWith('/weather/') && req.method === 'GET') {
        const parts = path.split('/');
        const city = parts[2];


        if (city) {
            weather(city).then(weatherInfo => {
                res.writeHead(200);
                res.end(JSON.stringify({ message: weatherInfo }));
            }).catch(err => {
                res.writeHead(500);
                res.end(JSON.stringify({ error: 'Failed to fetch weather data' }));
            });
        } else {
            res.writeHead(400);
            res.end(JSON.stringify({ error: 'city is missing' }));
        }
    } else {
        // Not found
        res.writeHead(404);
        res.end(JSON.stringify({ error: 'Route not found' }));
    }
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
