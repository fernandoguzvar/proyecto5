'use strict'

const pool = require('../database')

module.exports= function(){

    async function listAll_proveedor(req){
        let query=('SELECT * FROM proveedor');

        const data= await pool.query(query)
        return data
    }

    async function agregar_proveedor(req){
        await pool.query('insert into proveedor set ?',[req.body]);
    }

    async function eliminar_proveedor(req){
        const {proveedor} = req.params;
        await pool.query('DELETE FROM  proveedor where  id_proveedor= ?',[proveedor]);
    }

    async function modificar_proveedor(req){
        const {id_proveedor} = req.params;
        await pool.query(`UPDATE proveedor set ? where id_proveedor=?`,[req.body,id_proveedor]);
    }


    return{
        listAll_proveedor,
        agregar_proveedor,
        eliminar_proveedor,
        modificar_proveedor,
    }
}