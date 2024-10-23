import 'dotenv/config.js';
import '../../config/database.js';
import Cities from '../Cities.js'; 

let cities = [
    { name: "Buenos Aires", id: 1, country: "Argentina", continent: "America", currency: "Pesos" },
    { name: "Santiago", id: 2, country: "Chile", continent: "America", currency: "Pesos" },
    { name: "Lima", id: 3, country: "Peru", continent: "America", currency: "Soles" },
    { name: "Rio de Janeiro", id: 4, country: "Brazil", continent: "America", currency: "Reais" },
    { name: "Mexico City", id: 5, country: "Mexico", continent: "America", currency: "Pesos" },
    { name: "New York", id: 6, country: "USA", continent: "America", currency: "Dollars" },
    { name: "Los Angeles", id: 7, country: "USA", continent: "America", currency: "Dollars" },
    { name: "Toronto", id: 8, country: "Canada", continent: "America", currency: "Dollars" },
    { name: "Vancouver", id: 9, country: "Canada", continent: "America", currency: "Dollars" },
    { name: "London", id: 10, country: "England", continent: "Europe", currency: "Pounds" },
    { name: "Paris", id: 11, country: "France", continent: "Europe", currency: "Euros" },
    { name: "Berlin", id: 12, country: "Germany", continent: "Europe", currency: "Euros" },
    { name: "Rome", id: 13, country: "Italy", continent: "Europe", currency: "Euros" },
    { name: "Madrid", id: 14, country: "Spain", continent: "Europe", currency: "Euros" },
    { name: "Moscow", id: 15, country: "Russia", continent: "Europe", currency: "Rubles" },
    { name: "Istanbul", id: 16, country: "Turkey", continent: "Europe", currency: "Lira" },
    { name: "Cairo", id: 17, country: "Egypt", continent: "Africa", currency: "Pounds" },
    { name: "Cape Town", id: 18, country: "South Africa", continent: "Africa", currency: "Rand" },
    { name: "Marrakesh", id: 19, country: "Morocco", continent: "Africa", currency: "Dirhams" },
    { name: "Nairobi", id: 20, country: "Kenya", continent: "Africa", currency: "Shillings" },
    { name: "Mumbai", id: 21, country: "India", continent: "Asia", currency: "Rupees" },
    { name: "Tokyo", id: 22, country: "Japan", continent: "Asia", currency: "Yen" },
    { name: "Beijing", id: 23, country: "China", continent: "Asia", currency: "Yuan" },
    { name: "Seoul", id: 24, country: "South Korea", continent: "Asia", currency: "Won" },
    { name: "Bangkok", id: 25, country: "Thailand", continent: "Asia", currency: "Baht" },
    { name: "Sydney", id: 26, country: "Australia", continent: "Oceania", currency: "Dollars" },
    { name: "Auckland", id: 27, country: "New Zealand", continent: "Oceania", currency: "Dollars" }
];

Cities.insertMany(cities)