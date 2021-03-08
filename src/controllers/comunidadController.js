'use strict'

const todoComunidad = require('../models/comunidadModel')

async function listAll_comunidad (req= null){
    const listAll_comunidad= await todoComunidad().listAll_comunidad(req)
    return listAll_comunidad
}

async function agregar_comunidad(req=null){
    const agregar= await todoComunidad().agregar_comunidad(req)
    return agregar
}

async function eliminar_comunidad(req=null){
    const eliminar= await todoComunidad().eliminar_comunidad(req)
    return eliminar
}

async function modificar_comunidad(req=null){
    const modificar= await todoComunidad().modificar_comunidad(req)
    return modificar
}

module.exports={
    listAll_comunidad,
    agregar_comunidad,
    eliminar_comunidad,
    modificar_comunidad,
}