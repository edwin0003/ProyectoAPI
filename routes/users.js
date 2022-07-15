const express = require("express")
const router = express.Router()
const customHeader = require("../middleware/customHeader")
const {getUser, getUsers, createUser,updateUser, deleteUser} = require("../cotrollers/users")

const {validatorCreateUser, validatorGetUser} = require("../validators/users")
//Todo http://localhost/tracks GET ,POST, DELETE, PUT

/**
 * Lista los Users
*/

router.get("/", getUsers)
/**
 * Obtener detalle de item
*/
router.get("/:id",validatorGetUser, getUser)
/**
 * crear un registro
 */

router.post("/",validatorCreateUser, createUser)

/**
 * Actualizar un registro
 */

 router.put("/:id",validatorGetUser,validatorCreateUser, updateUser)

 /**
 * Eliminar un registro
 */

  router.delete("/:id",validatorGetUser, deleteUser)

module.exports= router