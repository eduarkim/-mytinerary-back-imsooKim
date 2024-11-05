import Cities from '../../models/Cities.js';

// Actualizar una ciudad por nombre
let updateCityByName = async (req, res) => {
    try {
        const nameQuery = req.params.name; // Obtener el nombre de la ciudad desde los parámetros
        const updateData = req.body; // Obtener los datos de actualización desde el cuerpo de la solicitud

        // Buscar y actualizar la ciudad
        const updatedCity = await Cities.findOneAndUpdate({ name: nameQuery }, updateData, { new: true });

        if (updatedCity) {
            return res.status(200).json({ response: updatedCity });
        } else {
            return res.status(404).json({ response: 'City not found' });
        }
    } catch (error) {
        return res.status(500).json({ response: error });
    }
}

// Actualizar una ciudad por país
let updateCityByCountry = async (req, res) => {
    try {
        const countryQuery = req.params.country; // Obtener el país desde los parámetros
        const updateData = req.body; // Obtener los datos de actualización desde el cuerpo de la solicitud

        // Actualizar todas las ciudades que coinciden con el país
        const updatedCities = await Cities.updateMany({ country: countryQuery }, updateData);

        if (updatedCities.modifiedCount > 0) {
            return res.status(200).json({ response: `${updatedCities.modifiedCount} cities updated` });
        } else {
            return res.status(404).json({ response: 'No cities found for the specified country' });
        }
    } catch (error) {
        return res.status(500).json({ response: error });
    }
}

// Actualizar una ciudad por continente
let updateCityByContinent = async (req, res) => {
    try {
        const continentQuery = req.params.continent; // Obtener el continente desde los parámetros
        const updateData = req.body; // Obtener los datos de actualización desde el cuerpo de la solicitud

        // Actualizar todas las ciudades que coinciden con el continente
        const updatedCities = await Cities.updateMany({ continent: continentQuery }, updateData);

        if (updatedCities.modifiedCount > 0) {
            return res.status(200).json({ response: `${updatedCities.modifiedCount} cities updated` });
        } else {
            return res.status(404).json({ response: 'No cities found for the specified continent' });
        }
    } catch (error) {
        return res.status(500).json({ response: error });
    }
}

// Actualizar una ciudad por moneda
let updateCityByCurrency = async (req, res) => {
    try {
        const currencyQuery = req.params.currency; // Obtener la moneda desde los parámetros
        const updateData = req.body; // Obtener los datos de actualización desde el cuerpo de la solicitud

        // Actualizar todas las ciudades que coinciden con la moneda
        const updatedCities = await Cities.updateMany({ currency: currencyQuery }, updateData);

        if (updatedCities.modifiedCount > 0) {
            return res.status(200).json({ response: `${updatedCities.modifiedCount} cities updated` });
        } else {
            return res.status(404).json({ response: 'No cities found for the specified currency' });
        }
    } catch (error) {
        return res.status(500).json({ response: error });
    }
}

// Exportar las funciones
export { updateCityByName, updateCityByCountry, updateCityByContinent, updateCityByCurrency };