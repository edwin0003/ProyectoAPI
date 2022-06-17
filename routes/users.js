const express = require("express")
const router = express.Router()
const customHeader = require("../middleware/customHeader")
const {getUsers, getUser, createUser,updateUser, deleteUser} = require("../cotrollers/users")

//const {validatorCreateItem,validatorGetItem } = require("../validators/users")
//Todo http://localhost/tracks GET ,POST, DELETE, PUT

/**
 * Lista los items
*/

router.get("/", getUsers)
/**
 * Obtener detalle de item
*/
router.get("/:id", getUser)
/**
 * crear un registro
 */

router.post("/", createUser)

/**
 * Actualizar un registro
 */

 router.put("/:id", updateUser)

 /**
 * Eliminar un registro
 */

  router.delete("/:id", deleteUser)

module.exports= router