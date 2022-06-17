const { matchedData } = require('express-validator');
const {usersModel} = require('../models')
const {handleHttpError} = require ("../utils/handleError")
/**
 * Obtener lista de la base de datos!!
 * @param {*} req 
 * @param {*} res 
 */

const getUsers = async (req, res) => {

    try {
        const data = await usersModel.find({})
        res.send({data});
    } catch (error) {
        handleHttpError(res, "ERROR_GET_USER", 404)
    }

   
    
};
/**
 * Obtener un detalle
 * @param {*} req 
 * @param {*} res 
 */
const getUser =async (req, res) => {
    try {
        req = matchedData(req);
        const {id} = req;
        const data = await usersModel.findById(id);
        res.send({data});

    } catch (error) {
        handleHttpError(res, "ERROR_GET_USER")
    }
};
/**
 * Insertar un registro
 * @param {*} req 
 * @param {*} res 
 */
const createUser = async (req, res) => {

    try {
        const body = matchedData(req)
       console.log(body)
        const data = await usersModel.create(body)
        res.send({data})
        console.log(body)
    } catch (error) {
        handleHttpError(res, "ERROR_CREATE_USER", 404)
    }
    
};
/**
 * Actulizar un registro
 * @param {*} req 
 * @param {*} res 
 */
const updateUser = async (req, res) => {
    
    try {
       
        const {id, ...body} = matchedData(req)
       // console.log(body)
        const data = await usersModel.findOneAndUpdate(
            id, body
        )
        res.send({data})
        console.log(body)
    } catch (error) {
        handleHttpError(res, "ERROR_UPDATE_USER", 404)
    }
    
};
/**
 * Eliminar un registro
 * @param {*} req 
 * @param {*} res 
 */
const deleteUser = async (req, res) => {
    try {
        req = matchedData(req);
        const {id} = req;
        const data = await usersModel.delete({_id:id})
        res.send({data});

    } catch (error) {
        handleHttpError(res, "ERROR_DELETE_USER")
    }
};

module.exports = {getUsers, getUser, createUser, updateUser, deleteUser}