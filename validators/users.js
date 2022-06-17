const {check} = require("express-validator")
const validateResults = require("../utils/handleValidator")

const validatorCreateItem = [
    check("name")
    .exists()
    .notEmpty(),

    check("age")
    .exists()
    .notEmpty(),

    check("email")
    .exists()
    .notEmpty(),

    check("artist")
    .exists()
    .notEmpty(),
    check("artist.name")
    .exists()
    .notEmpty(),
    check("artist.nickname")
    .exists()
    .notEmpty(),
    check("artist.nacionality")
    .exists()
    .notEmpty(),

    check("duration")
    .exists()
    .notEmpty(),
    check("duration.start")
    .exists()
    .notEmpty(),
    check("duration.end")
    .exists()
    .notEmpty(),

    check("mediaId")
    .exists()
    .notEmpty()
    .isMongoId(),
    //.isLength({min:5 , max:90})

    (req,res,next) =>  {
        return validateResults(req, res, next)
    }
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

module.exports = {validatorCreateItem,validatorGetItem}