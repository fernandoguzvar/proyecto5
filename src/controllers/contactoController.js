'use strict'

const todoContacto = require('../models/contactoModel')

async function listAll_contacto (req= null){
    const listAll_contacto= await todoContacto().listAll_contacto(req)
    return listAll_contacto
}

async function agregar_contacto(req=null){
    const agregar= await todoContacto().agregar_contacto(req)
    return agregar
}

async function eliminar_contacto(req=null){
    const eliminar= await todoContacto().eliminar_contacto(req)
    return eliminar
}

async function modificar_contacto(req=null){
    const modificar= await todoContacto().modificar_contacto(req)
    return modificar
}

module.exports={
    listAll_contacto,
    agregar_contacto,
    eliminar_contacto,
    modificar_contacto,
}