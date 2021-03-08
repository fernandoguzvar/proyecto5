'use strict'

const todoRedes = require('../models/redesModel')

async function listAll_redes (req= null){
    const listAll_redes= await todoRedes().listAll_redes(req)
    return listAll_redes
}

async function agregar_redes(req=null){
    const agregar= await todoRedes().agregar_redes(req)
    return agregar
}

async function eliminar_redes(req=null){
    const eliminar= await todoRedes().eliminar_redes(req)
    return eliminar
}

async function modificar_redes(req=null){
    const modificar= await todoRedes().modificar_redes(req)
    return modificar
}

module.exports={
    listAll_redes,
    agregar_redes,
    eliminar_redes,
    modificar_redes,
}