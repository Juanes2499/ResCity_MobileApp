import axios from 'axios';

export const  createAxiosInstanceSensores = (config) => {
    let minConfig = {
        baseURL: "http://localhost:3010"
    }
    if (config) {
        minConfig = { ...minConfig, ...config }
    }
    return axios.create(minConfig)
}
