import express from 'express';
import { allCities } from '../controllers/cities/read.js';
import { cityByName, cityByCountry, cityByContinent, cityByCurrency } from '../controllers/cities/read.js';
import { create } from '../controllers/cities/create.js';
import { updateCityByName, updateCityByCountry, updateCityByContinent, updateCityByCurrency } from '../controllers/cities/update.js';
import { deleteCityByName, deleteCitiesByCountry, deleteCitiesByContinent, deleteCitiesByCurrency } from '../controllers/cities/delete.js';


const routerCity = express.Router();

routerCity.get('/all', allCities); 
routerCity.get('/name/:name', cityByName); 
//routerCity.get('/id/:id', cityById); 
routerCity.get('/country/:country', cityByCountry); 
routerCity.get('/continent/:continent', cityByContinent);
routerCity.get('/currency/:currency', cityByCurrency);
routerCity.put('/update/name/:name', updateCityByName);
routerCity.put('/update/country/:country', updateCityByCountry);
routerCity.put('/update/continent/:continent', updateCityByContinent);
routerCity.put('/update/currency/:currency', updateCityByCurrency);
routerCity.delete('/delete/name/:name', deleteCityByName);
routerCity.delete('/delete/country/:country', deleteCitiesByCountry);
routerCity.delete('/delete/continent/:continent', deleteCitiesByContinent);
routerCity.delete('/delete/currency/:currency', deleteCitiesByCurrency);




routerCity.post('/create', create);




export default routerCity;