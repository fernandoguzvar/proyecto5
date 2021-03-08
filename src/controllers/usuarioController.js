'use strict'

const todoUsuario = require('../models/usuarioModel')

async function listAll_usuario (req= null){
    const listAll_usuario= await todoUsuario().listAll_usuario(req)
    return listAll_usuario
}

async function agregar_usuario(req=null){
    const agregar= await todoUsuario().agregar_usuario(req)
    return agregar
}

async function eliminar_usuario(req=null){
    const eliminar= await todoUsuario().eliminar_usuario(req)
    return eliminar
}

async function modificar_usuario(req=null){
    const modificar= await todoUsuario().modificar_usuario(req)
    return modificar
}

module.exports={
    listAll_usuario,
    agregar_usuario,
    eliminar_usuario,
    modificar_usuario,
}