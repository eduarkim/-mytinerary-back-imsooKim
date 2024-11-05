import Cities from '../../models/Cities.js';

// Obtener todos los productos
let allCities = async (req, res, next) => {
    try {
        let { name, country, continent, currency } = req.query;
        console.log(name);
     //   console.log(id);
        console.log(country);
        console.log(continent);
        console.log(currency);
        let query ={}
        if(name){
            query.name = {$regex: name, $options: 'i'};
        };
      //  if(id){
    //        query.id = id;
   //     };
        if(country){
            query.country = {$regex:country, $options: 'i'};
        };
        if(continent){
            query.continent = {$regex:continent, $options: 'i'};
        };
        if(currency){
            query.currency = {$regex:currency, $options: 'i'};
        };
        
        
        let all = await Cities.find(query);
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })

    }
}
/*
let cityById = async (req, res) => {
    try {
        let IdQuery = req.params.Id;
        let city = await Cities.findOne({ id: idQuery });
        if (city) {
            return res.status(200).json({ response: city });
        } else {
            return res.status(404).json({ response: 'City not found' });
        }
    } catch (error) {
        return res.status(500).json({ response: error });
    }
}
*/
let cityByName = async (req, res) => {
    try {
        let nameQuery = req.params.name;
        let city = await Cities.findOne({ name: nameQuery });
        if (city) {
            return res.status(200).json({ response: city });
        } else {
            return res.status(404).json({ response: 'City not found' });
        }
    } catch (error) {
        return res.status(500).json({ response: error });
    }
}

let cityByCountry = async (req, res) => {
    try {
        let countryQuery = req.params.country;
        let city = await Cities.find({ country: countryQuery });
        if (city) {
            return res.status(200).json({ response: city });
        } else {
            return res.status(404).json({ response: 'City not found' });
        }
    }
    catch (error) {
        return res.status(500).json({ response: error });
    }
}

let cityByContinent = async (req, res) => {
    try {
        let continentQuery = req.params.continent; 
        let cities = await Cities.find({ continent: continentQuery }); 
        if (cities.length > 0) { 
            return res.status(200).json({ response: cities });
        } else {
            return res.status(404).json({ response: 'No cities found for the specified continent' });
        }
    } catch (error) {
        return res.status(500).json({ response: error });
    }
}

let cityByCurrency = async (req, res) => {
    try {
        let currencyQuery = req.params.currency;
        let city = await Cities.find({ currency: currencyQuery });
        if (city) {
            return res.status(200).json({ response: city });
        } else {
            return res.status(404).json({ response: 'City not found' });
        }
    }
    catch (error) {
        return res.status(500).json({ response: error });
    }
}



export {allCities, cityByName, cityByCountry, cityByContinent, cityByCurrency}

