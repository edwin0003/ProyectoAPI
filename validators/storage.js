const {check} = require("express-validator")
const validateResults = require("../utils/handleValidator")

const validatorCreateItem = [
   
];
const validatorGetItem = [
    check("id")
    .exists()
    .notEmpty()
    .isMongoId(),
    //.isLength({min:5 , max:90})

    (req,res,next) =>  {
        return validateResults(req, res, next)
    }
]

module.exports = {validatorGetItem}