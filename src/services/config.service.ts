import axios from "axios";

const BASE_URL = 'https://shop.cyberlearn.vn/api'

export const axiosWithoutAuth = axios.create({
    baseURL: BASE_URL,
    timeout: 180_000
})