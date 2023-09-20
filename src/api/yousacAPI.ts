import axios from 'axios'

// Change this for env variables
const api_url = import.meta.env.VITE_API_URL//importa variable de env 

const yousacApi = axios.create({// sirve para hacer la peticion al backend
    baseURL: api_url
})

yousacApi.interceptors.request.use(config => {

    config.headers = {
        ...config.headers,
        'auth-token': localStorage.getItem('auth-token') || ''//sirve para guardar un token para el local storage en el navegador
    }

    return config
})

export default yousacApi;