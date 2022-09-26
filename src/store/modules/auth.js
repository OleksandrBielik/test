import { AuthAPI } from '@/api/auth-api';
import { userRoles } from '@/api/auth-api/common/userRoles';

export const auth = {
  namespaced: true,
  state: () => ({
    credentials: {
      token: localStorage.getItem('token') || null,
      userRole: localStorage.getItem('userRole') || userRoles.guest,
      userName: localStorage.getItem('userName') || null,
    }
  }),
  mutations: {
    setToken(state, token) {
      state.credentials.token = token;
      localStorage.setItem('token', token);
    },
    setUserRole(state, userRole) {
      state.credentials.userRole = userRole;
      localStorage.setItem('userRole', userRole);
    },
    setUserName(state, userName) {
      state.credentials.userRole = userName;
      localStorage.setItem('userName', userName);
    },
    deleteToken(state) {
      state.credentials.token = null;
      localStorage.removeItem('token');
    },
    deleteUserRole(state) {
      state.credentials.userRole = null;
      localStorage.removeItem('userRole');
    },
    deleteUserName(state) {
      state.credentials.userName = null;
      localStorage.removeItem('userName');
    },
  },
  actions: {
    onLogin({ commit }, { login,password }) {
      return AuthAPI.login(login, password)
        .then(res => {
          commit('setToken', res.token);
          commit('setRole', res.userRole);
        })
    },
    onLogout({ commit }) {
      commit('deleteToken');
      commit('deleteUserRole');
      commit('deleteUserName')
    },
    getToken({ commit }) {
      return AuthAPI.getToken()
        .then(res => {
          commit('setToken', res.data.request_token.toString())
          commit('setUserRole', userRoles.user)
        })
    },
    setUserName({ commit }, { name }) {
      commit('setUserName', name);
    }
  },
  getters: {
    getUserRole: (state) => state.credentials.userRole,
    getToken: (state) => state.credentials.token,
    getUserName: (state) => state.credentials.userName,
  },
}