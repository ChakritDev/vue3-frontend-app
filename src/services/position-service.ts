import {BASE_API_URL} from "@/constants/index";

import axios, { AxiosResponse } from "axios";

// create axios instance
const http = axios.create({
    baseURL: BASE_API_URL,
    withCredentials:false,
    headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
    }

});

export async function findAll():Promise<AxiosResponse> {
    return await http.get(`/position`);
}