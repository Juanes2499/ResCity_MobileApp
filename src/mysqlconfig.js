import {createPool} from "mysql";

const ConnectionDB = new Promise ((resolve,reject)=>{
    const conexion = createPool({
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: '',
        database: 'proyecto_grado_api',
    });
    module.exports = conexion;
    resolve(conexion)
})

ConnectionDB
    .then((conexion)=>{
        console.log(`Successful connection`);
    }).catch((err)=>{
        console.log(err);
    })