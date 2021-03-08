'use strict'

const todoGrafico = require('../models/graficoModel')

async function listAll_grafico (req= null){
    const listAll_grafico= await todoGrafico().listAll_grafico(req)
    return listAll_grafico
}

async function agregar_grafico(req=null){
    const agregar= await todoGrafico().agregar_grafico(req)
    return agregar
}

async function eliminar_grafico(req=null){
    const eliminar= await todoGrafico().eliminar_grafico(req)
    return eliminar
}

async function modificar_grafico(req=null){
    const modificar= await todoGrafico().modificar_grafico(req)
    return modificar
}

module.exports={
    listAll_grafico,
    agregar_grafico,
    eliminar_grafico,
    modificar_grafico,
}