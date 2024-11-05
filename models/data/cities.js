import 'dotenv/config.js';
import '../../config/database.js';
import Cities from '../Cities.js'; 

let cities = [
    { name: "Buenos Aires", country: "Argentina", continent: "America", currency: "Pesos" },
    { name: "Santiago", country: "Chile", continent: "America", currency: "Pesos" },
    { name: "Lima", country: "Peru", continent: "America", currency: "Soles" },
    { name: "Rio de Janeiro", country: "Brazil", continent: "America", currency: "Reais" },
    { name: "Mexico City", country: "Mexico", continent: "America", currency: "Pesos" },
    { name: "New York", country: "USA", continent: "America", currency: "Dollars" },
    { name: "Los Angeles", country: "USA", continent: "America", currency: "Dollars" },
    { name: "Toronto", country: "Canada", continent: "America", currency: "Dollars" },
    { name: "Vancouver", country: "Canada", continent: "America", currency: "Dollars" },
    { name: "London", country: "England", continent: "Europe", currency: "Pounds" },
    { name: "Paris", country: "France", continent: "Europe", currency: "Euros" },
    { name: "Berlin", country: "Germany", continent: "Europe", currency: "Euros" },
    { name: "Rome", country: "Italy", continent: "Europe", currency: "Euros" },
    { name: "Madrid", country: "Spain", continent: "Europe", currency: "Euros" },
    { name: "Moscow", country: "Russia", continent: "Europe", currency: "Rubles" },
    { name: "Istanbul", country: "Turkey", continent: "Europe", currency: "Lira" },
    { name: "Cairo", country: "Egypt", continent: "Africa", currency: "Pounds" },
    { name: "Cape Town", country: "South Africa", continent: "Africa", currency: "Rand" },
    { name: "Marrakesh", country: "Morocco", continent: "Africa", currency: "Dirhams" },
    { name: "Nairobi", country: "Kenya", continent: "Africa", currency: "Shillings" },
    { name: "Mumbai", country: "India", continent: "Asia", currency: "Rupees" },
    { name: "Tokyo", country: "Japan", continent: "Asia", currency: "Yen" },
    { name: "Beijing", country: "China", continent: "Asia", currency: "Yuan" },
    { name: "Seoul", country: "South Korea", continent: "Asia", currency: "Won" },
    { name: "Bangkok", country: "Thailand", continent: "Asia", currency: "Baht" },
    { name: "Sydney", country: "Australia", continent: "Oceania", currency: "Dollars" },
    { name: "Auckland", country: "New Zealand", continent: "Oceania", currency: "Dollars" }
];

Cities.insertMany(cities)