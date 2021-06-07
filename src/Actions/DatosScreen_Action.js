import { createAxiosInstanceSensores } from '../Shared/helper';
import axios from 'axios';

export const DatosNodoSensorAction_ConsultarDatos = (json) => {

    let data = {
        "seleccionar":"",
        "condicion": json ? json : {},
        "agrupar":"",
        "ordenar":"",
        "limite": "5"
    }

    const endpoint = 'http://192.168.0.17:3010/api/datosNodoSensor/get'

    console.log(data)

    return new Promise((resolve, reject) => {
        try {
            axios.post(endpoint, data )
            .then(function (response) {
                return resolve(response.data)
            }).catch(err => {
                return reject(err)
            })
        }catch{

            alert("No se ha podido obtener los datos, por favor intentar de nuevo o comunicarse con alguien del área TI.");
        }
    })
}