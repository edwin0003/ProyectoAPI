const express = require("express")
const router = express.Router()
const customHeader = require("../middleware/customHeader")
const {getItem, getItems, createItem,updateItem, deleteItem} = require("../cotrollers/tracks")

const {validatorCreateItem,validatorGetItem } = require("../validators/tracks")
//Todo http://localhost/tracks GET ,POST, DELETE, PUT

/**
 * Lista los items
*/

router.get("/", getItems)
/**
 * Obtener detalle de item
*/
router.get("/:id",validatorGetItem, getItem)
/**
 * crear un registro
 */

router.post("/",validatorCreateItem, createItem)

/**
 * Actualizar un registro
 */

 router.put("/:id",validatorGetItem,validatorCreateItem, updateItem)

 /**
 * Eliminar un registro
 */

  router.delete("/:id",validatorGetItem, deleteItem)

module.exports= router