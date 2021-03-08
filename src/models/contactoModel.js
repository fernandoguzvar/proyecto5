'use strict'

const pool = require('../database')

module.exports= function(){

    async function listAll_contacto(req){
        let query=('SELECT * FROM usuario');

        const data= await pool.query(query)
        return data
    }

    async function agregar_contacto(req){
        await pool.query('insert into usuario set ?',[req.body]);
    }

    async function eliminar_contacto(req){
        const {contacto} = req.params;
        await pool.query('DELETE FROM  usuario where  id_usuario= ?',[contacto]);
    }

    async function modificar_contacto(req){
        const {id_usuario} = req.params;
        await pool.query(`UPDATE usuario set ? where id_usuario=?`,[req.body,id_usuario]);
    }


    return{
        listAll_contacto,
        agregar_contacto,
        eliminar_contacto,
        modificar_contacto,
    }
}