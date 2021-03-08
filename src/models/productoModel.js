'use strict'

const pool = require('../database')

module.exports= function(){

    async function listAll_producto(req){
        let query=(`select p.id_producto,p.nombre,p.descripcion, c.categoria,p.url_img
        from producto p
        inner join  categoria as c on p.id_categoria = c.id_categoria`);

        const data= await pool.query(query)
        return data
    }

    async function agregar_producto(req){
        await pool.query('insert into producto set ?',[req.body]);
    }

    async function eliminar_producto(req){
        const {producto} = req.params;
        await pool.query('DELETE FROM  producto where  id_producto= ?',[producto]);
    }

    async function modificar_producto(req){
        const {id_producto} = req.params;
        await pool.query(`UPDATE producto set ? where id_producto=?`,[req.body,id_producto]);
    }


    return{
        listAll_producto,
        agregar_producto,
        eliminar_producto,
        modificar_producto,
    }
}