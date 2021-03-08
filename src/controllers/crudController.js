'use strict'

const todoCrud = require('../models/crudModel')

async function listAll_crud (req= null){
    const listAll_crud= await todoCrud().listAll_crud(req)
    return listAll_crud
}

async function agregar_crud(req=null){
    const agregar= await todoCrud().agregar_crud(req)
    return agregar
}

async function eliminar_crud(req=null){
    const eliminar= await todoCrud().eliminar_crud(req)
    return eliminar
}

async function modificar_crud(req=null){
    const modificar= await todoCrud().modificar_crud(req)
    return modificar
}

module.exports={
    listAll_crud,
    agregar_crud,
    eliminar_crud,
    modificar_crud,
}