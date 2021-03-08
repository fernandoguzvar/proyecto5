'use strict'

const todoProveedor = require('../models/proveedorModel')

async function listAll_proveedor (req= null){
    const listAll_proveedor= await todoProveedor().listAll_proveedor(req)
    return listAll_proveedor
}

async function agregar_proveedor(req=null){
    const agregar= await todoProveedor().agregar_proveedor(req)
    return agregar
}

async function eliminar_proveedor(req=null){
    const eliminar= await todoProveedor().eliminar_proveedor(req)
    return eliminar
}

async function modificar_proveedor(req=null){
    const modificar= await todoProveedor().modificar_proveedor(req)
    return modificar
}

module.exports={
    listAll_proveedor,
    agregar_proveedor,
    eliminar_proveedor,
    modificar_proveedor,
}