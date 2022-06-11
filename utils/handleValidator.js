const {validationResult} = require("express-validator")

const validateResults = (req, res, next) => {
    try {
        validationResult(req).throw();
        return next(); //TODO Continua hacia el controlador
    }catch(error){
        res.status(403)
        res.send({errors: error.array() });
    }
}

module.exports = validateResults