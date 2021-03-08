'use strict'

const pool = require('../database')

module.exports= function(){

    async function listAll_grafico(req){
        let query=(
            `select p.nombre,p.valor,v.cantidad ,sum(v.cantidad * p.valor) as valor_total,p.descripcion,v.dia_venta,p.url_img
            from venta v
            inner join producto as p on v.id_producto = p.id_producto` );

        const data= await pool.query(query)
        return data
    }

    async function agregar_grafico(req){
        await pool.query('insert into venta set ?',[req.body]);
    }

    async function eliminar_grafico(req){
        const {venta} = req.params;
        await pool.query('DELETE FROM  venta where  id_venta= ?',[venta]);
    }

    async function modificar_grafico(req){
        const {id_venta} = req.params;
        await pool.query(`UPDATE venta set ? where id_venta=?`,[req.body,id_venta]);
    }


    return{
        listAll_grafico,
        agregar_grafico,
        eliminar_grafico,
        modificar_grafico,
    }
}