'use strict'

const pool = require('../database')

module.exports= function(){

    async function listAll_team(req){
        let query=('SELECT * FROM team');

        const data= await pool.query(query)
        return data
    }

    async function agregar_team(req){
        await pool.query('insert into team set ?',[req.body]);
    }

    async function eliminar_team(req){
        const {team} = req.params;
        await pool.query('DELETE FROM  team where  id_team= ?',[team]);
    }

    async function modificar_team(req){
        const {id_team} = req.params;
        await pool.query(`UPDATE team set ? where id_team=?`,[req.body,id_team]);
    }


    return{
        listAll_team,
        agregar_team,
        eliminar_team,
        modificar_team,
    }
}