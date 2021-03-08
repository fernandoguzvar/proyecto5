'use strict'

const todoCorporativo = require('../models/corporativoModel')

async function listAll_corporativo (req= null){
    const listAll_corporativo= await todoCorporativo().listAll_corporativo(req)
    return listAll_corporativo
}

async function agregar_corporativo(req=null){
    const agregar= await todoCorporativo().agregar_corporativo(req)
    return agregar
}

async function eliminar_corporativo(req=null){
    const eliminar= await todoCorporativo().eliminar_corporativo(req)
    return eliminar
}

async function modificar_corporativo(req=null){
    const modificar= await todoCorporativo().modificar_corporativo(req)
    return modificar
}

module.exports={
    listAll_corporativo,
    agregar_corporativo,
    eliminar_corporativo,
    modificar_corporativo,
}