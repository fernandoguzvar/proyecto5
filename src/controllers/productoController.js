'use strict'

const todoProducto = require('../models/productoModel')

async function listAll_producto (req= null){
    const listAll_producto= await todoProducto().listAll_producto(req)
    return listAll_producto
}

async function agregar_producto(req=null){
    const agregar= await todoProducto().agregar_producto(req)
    return agregar
}

async function eliminar_producto(req=null){
    const eliminar= await todoProducto().eliminar_producto(req)
    return eliminar
}

async function modificar_producto(req=null){
    const modificar= await todoProducto().modificar_producto(req)
    return modificar
}

module.exports={
    listAll_producto,
    agregar_producto,
    eliminar_producto,
    modificar_producto,
}