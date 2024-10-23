import express from 'express';
import { allCities } from '../controllers/cities/read.js';
import { cityByName, cityById, cityByCountry, cityByContinent, cityByCurrency } from '../controllers/cities/read.js';
import { create } from '../controllers/cities/create.js';

const routerCity = express.Router();

routerCity.get('/all', allCities); 
routerCity.get('/name/:name', cityByName); 
routerCity.get('/id/:id', cityById); 
routerCity.get('/country/:country', cityByCountry); 
routerCity.get('/continent/:continent', cityByContinent);
routerCity.get('/currency/:currency', cityByCurrency);



routerCity.post('/create', create);



export default routerCity;