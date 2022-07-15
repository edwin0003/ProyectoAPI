const express = require("express")
const { matchedData } = require("express-validator")
const {usersModel} = require("../models")
const router = express.Router()
const customHeader = require("../middleware/customHeader")
const {encrypt, compare} = require("../utils/handlePassword")
const {validatorRegisterItem, validatorLogin} = require("../validators/auth")
const { tokenSign } = require("../utils/handleJwt")
//Todo http://localhost/tracks GET ,POST, DELETE, PUT


router.post("/register",validatorRegisterItem,async(req, res)=>{

   req = matchedData(req);
   const password = await encrypt(req.password);
   const body = {...req, password};
   const dataUser = await usersModel.create(body);
   dataUser.set("password", undefined, {strict:false});

   const data ={
      token: await tokenSign(dataUser),
      user: dataUser
   }
   res.send({data})

})



module.exports= router