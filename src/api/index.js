import axios from 'axios';

const loginConfig = {
  baseURL: process.env.VUE_APP_BASE_URL,
  headers: {
    'Content-type': 'application/json'
  }
}

const defaultConfig = {
  baseURL: process.env.VUE_APP_BASE_URL,
  headers: {
    'Content-type': 'application/json'
  }
}

export const LoginAPIInstance = axios.create(loginConfig)
export const DefaultAPIInstance = axios.create(defaultConfig)

DefaultAPIInstance.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers['Authorization'] = token
    return config
  }
  return config
})