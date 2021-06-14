import axios from 'axios';

export const SubscribeScreenAction_Subscribe = (data) => {

    let json = data

    console.log(json)

    const endpoint = 'http://192.168.20.21:3010/api/datosNodoSensor/crearSubs'

    return new Promise((resolve, reject) => {
        try {
            axios.post(endpoint, json )
            .then(function (response) {
                return resolve(true)
            }).catch(err => {
                return reject(false)
            })
        }catch{

            alert("No se ha podido obtener los datos, por favor intentar de nuevo o comunicarse con alguien del área TI.");
        }
    })

}
