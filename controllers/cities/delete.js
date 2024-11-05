import Cities from '../../models/Cities.js';

// Eliminar una ciudad por nombre
let deleteCityByName = async (req, res) => {
    try {
        const nameQuery = req.params.name; // Obtener el nombre de la ciudad desde los parámetros

        // Buscar y eliminar la ciudad
        const deletedCity = await Cities.findOneAndDelete({ name: nameQuery });

        if (deletedCity) {
            return res.status(200).json({ response: 'City deleted successfully', deletedCity });
        } else {
            return res.status(404).json({ response: 'City not found' });
        }
    } catch (error) {
        return res.status(500).json({ response: error });
    }
}

// Eliminar ciudades por país
let deleteCitiesByCountry = async (req, res) => {
    try {
        const countryQuery = req.params.country; // Obtener el país desde los parámetros

        // Eliminar todas las ciudades que coinciden con el país
        const result = await Cities.deleteMany({ country: countryQuery });

        if (result.deletedCount > 0) {
            return res.status(200).json({ response: `${result.deletedCount} cities deleted` });
        } else {
            return res.status(404).json({ response: 'No cities found for the specified country' });
        }
    } catch (error) {
        return res.status(500).json({ response: error });
    }
}

// Eliminar ciudades por continente
let deleteCitiesByContinent = async (req, res) => {
    try {
        const continentQuery = req.params.continent; // Obtener el continente desde los parámetros

        // Eliminar todas las ciudades que coinciden con el continente
        const result = await Cities.deleteMany({ continent: continentQuery });

        if (result.deletedCount > 0) {
            return res.status(200).json({ response: `${result.deletedCount} cities deleted` });
        } else {
            return res.status(404).json({ response: 'No cities found for the specified continent' });
        }
    } catch (error) {
        return res.status(500).json({ response: error });
    }
}

// Eliminar ciudades por moneda
let deleteCitiesByCurrency = async (req, res) => {
    try {
        const currencyQuery = req.params.currency; // Obtener la moneda desde los parámetros

        // Eliminar todas las ciudades que coinciden con la moneda
        const result = await Cities.deleteMany({ currency: currencyQuery });

        if (result.deletedCount > 0) {
            return res.status(200).json({ response: `${result.deletedCount} cities deleted` });
        } else {
            return res.status(404).json({ response: 'No cities found for the specified currency' });
        }
    } catch (error) {
        return res.status(500).json({ response: error });
    }
}

// Exportar las funciones
export { deleteCityByName, deleteCitiesByCountry, deleteCitiesByContinent, deleteCitiesByCurrency };