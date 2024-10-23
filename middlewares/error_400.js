const error_400 = (error, req, res, next) => {
    console.log(error);
    if (error.name === 'ValidationError') {
    return res.status(400).json({ 
        success: false,
        response: error,
        message: "Bad Request"
        
    });
}
next(error);
}
export default error_400;