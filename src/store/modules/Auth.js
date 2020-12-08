import { axios } from "./Axios-Common"
import User from "../models/User"

export default {
  state: {
    token: '',
    username: '',
    sentResetPass: false
  },
  getters: {
    getAuthToken_Time: (state) => {
      return localStorage.getItem("authToken_Time");
    },
    getUsername: (state) => {
      return state.username
    },
    getSentResetPass: (state) => {
      return state.sentResetPass
    }
  },
  mutations: {
    setAuthToken_Time: (state, token_time) => {
      localStorage.setItem("authToken_Time", token_time);
    },
    setUsername: (state, username) => {
      state.username = username
    },
    setSentResetPass: (state, isSent) => {
      state.sentResetPass = isSent
    }
  },
  actions: {
    setAuthToken_Time: ({
      commit
    }, token) => {
      commit('setAuthToken_Time', token)
    },
    setUsername: ({
      commit
    }, username) => {
      commit('setUsername', username)
    },
    asyncAuthSignUp: ({
      commit
    }, signUpParmas) => {
      return new Promise((resolve, reject) => {
        let body = {
          email: signUpParmas.email,
          password: signUpParmas.password
        }

        axios.post('register', body).then(res => {
          console.log(res.data);
          commit('setUsername', res.data.username)
          // commit('setAuthToken', res.data.token)
          resolve(res)
        }).catch(err => {
          console.log(err + '\n');
          console.log("unsuccessful");
          reject(err)
        })
      })
    },
    asyncAuthSignIn: ({
      commit,
    }, signIpParmas) => {
      return 200
    },
    asyncAuthChangePassword: ({ commit }, oldPassword, newPassword, confirmNewPassword) => {
      
    }
  },
}
