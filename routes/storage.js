
const express = require("express")
const router= express.Router()
const uploadMiddleware = require("../utils/handleStorage")
const {createItem} = require("../cotrollers/storage")
const {getItems, getItem, deleteItem} = require("../cotrollers/storage")
const {validatorGetItem } = require("../validators/storage")
router.post("/", uploadMiddleware.single("myfile"), createItem)

router.get("/", getItems)
router.get("/:id", validatorGetItem, getItem)
router.delete("/:id", validatorGetItem, deleteItem)
module.exports= router;