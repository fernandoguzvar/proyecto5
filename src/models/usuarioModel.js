'use strict'

const pool = require('../database')

module.exports= function(){

    async function listAll_usuario(req){
        let query=(`select u.id_usuario, u.nombre, u.email, u.apellido, u.numero_cedula, u.direccion, u.whatsapp, r.nombre1 
         from usuario u
         inner join rol  as r on u.id_rol = r.id_rol`);

        const data= await pool.query(query)
        return data
    }

    async function agregar_usuario(req){
        await pool.query('insert into usuario set ?',[req.body]);
    }

    async function eliminar_usuario(req){
        const {usuario} = req.params;
        await pool.query('DELETE FROM  usuario where  id_usuario= ?',[usuario]);
    }

    async function modificar_usuario(req){
        const {id_usuario} = req.params;
        await pool.query(`UPDATE usuario set ? where id_usuario=?`,[req.body,id_usuario]);
    }


    return{
        listAll_usuario,
        agregar_usuario,
        eliminar_usuario,
        modificar_usuario,
    }
}