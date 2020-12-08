import Axios from 'axios'

export const axios = Axios.create({
    baseURL: 'https://vestaplast.com/',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    }
})