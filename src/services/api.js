import axios from 'axios'

const api = axios.create({
    baseURL: 'https://parseapi.back4app.com'
})

export default api