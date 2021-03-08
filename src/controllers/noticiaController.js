'use strict'

const todoNoticia = require('../models/noticiaModel')

async function listAll_noticia (req= null){
    const listAll_noticia= await todoNoticia().listAll_noticia(req)
    return listAll_noticia
}

async function agregar_noticia(req=null){
    const agregar= await todoNoticia().agregar_noticia(req)
    return agregar
}

async function eliminar_noticia(req=null){
    const eliminar= await todoNoticia().eliminar_noticia(req)
    return eliminar
}

async function modificar_noticia(req=null){
    const modificar= await todoNoticia().modificar_noticia(req)
    return modificar
}

module.exports={
    listAll_noticia,
    agregar_noticia,
    eliminar_noticia,
    modificar_noticia,
}