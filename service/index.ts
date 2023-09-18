import axios from 'axios'
import type { AxiosRequestConfig, AxiosInstance } from "axios";
const BASE_URL = 'http://codercba.com:9060/music-next/api'
const TIMEOUT = 1000 * 10

export interface IResultData<T> {
  code: number
  data: T
}

class CYRequest {
  instance: AxiosInstance
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config)
    this.instance.interceptors.request.use((config) => {
      return config
    })
    this.instance.interceptors.response.use((res) => {
      return res.data
    })
  }
  request<T>(config: AxiosRequestConfig) {
    return new Promise<T>((reslove, reject) => {
      this.instance.request<any, T>(config).then(res => {
        reslove(res)
      }).catch(err => {
        reject(err)
      })
    })
  }
  get<T>(config: AxiosRequestConfig) {
    return this.request<T>({...config, method: 'GET'})
  }
  post<T>(config: AxiosRequestConfig) {
    return this.request<T>({...config, method: 'POST'})
  }
}



const cyRequest = new CYRequest({
  baseURL: BASE_URL,
  timeout: TIMEOUT
})
export default cyRequest