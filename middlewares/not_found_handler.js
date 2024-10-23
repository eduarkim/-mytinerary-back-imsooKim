const not_found_handler = (req, res, next) => {
    return res.status(404).json({ 
        success: false,
        message: `Not Found - The request with the method ${req.method} with the path ${req.url}`
         });
};

export default not_found_handler;