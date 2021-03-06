const {check} = require("express-validator")
const validateResults = require("../utils/handleValidator")

const validatorCreateUser = [
    check("name")
    .exists()
    .notEmpty(),

    check("age")
    .exists()
    .notEmpty(),

    check("email")
    .exists()
    .notEmpty(),

    check("password")
    .exists()
    .notEmpty(),

    check("role")
    .exists()
    .notEmpty(),
    //.isLength({min:5 , max:90})

    (req,res,next) =>  {
        return validateResults(req, res, next)
    }
];
const validatorGetUser = [
    check("id")
    .exists()
    .notEmpty()
    .isMongoId(),
    //.isLength({min:5 , max:90})

    (req,res,next) =>  {
        return validateResults(req, res, next)
    }
]

module.exports = {validatorCreateUser, validatorGetUser}