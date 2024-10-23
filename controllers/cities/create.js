import Cities from "../../models/Cities.js";

let create = async (req, res) => {
    
        try {
            let city = req.body
            let all = await Cities.create(city);
            return res.status(201).json({ response: all });
            
        } catch (error) {
            res.status(500).json({ message: "Error inserting data", error });
        }
    }

export {create}
