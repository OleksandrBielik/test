import { LoginAPIInstance, DefaultAPIInstance } from '@/api';

export const AuthAPI = {
  // login(login, password) {
  //   const url = '/login';
  //   const data = { login, password };
  //   return LoginAPIInstance.post(url, data);
  // },
  // logout() {
  //   const url = '/logout';
  //   return DefaultAPIInstance.post(url);
  // },
  getToken() {
    const url = '/authentication/token/new'
    return DefaultAPIInstance.get(process.env.VUE_APP_BASE_URL + url, { params: { api_key: process.env.VUE_APP_API_KEY } })
  },
};