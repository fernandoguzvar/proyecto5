'use strict'

const todoTeam = require('../models/teamModel')

async function listAll_team (req= null){
    const listAll_team= await todoTeam().listAll_team(req)
    return listAll_team
}

async function agregar_team(req=null){
    const agregar= await todoTeam().agregar_team(req)
    return agregar
}

async function eliminar_team(req=null){
    const eliminar= await todoTeam().eliminar_team(req)
    return eliminar
}

async function modificar_team(req=null){
    const modificar= await todoTeam().modificar_team(req)
    return modificar
}

module.exports={
    listAll_team,
    agregar_team,
    eliminar_team,
    modificar_team,
}