import {
  axios
} from './Axios-Common'
import Product from '../models/Product'

export default {
  state: {
    productList: []
  },
  getters: {
    getProductsList: (state) => {

    }
  },
  mutations: {
    setProductsList: (state, productList) => {
      state.productList = productList
    }
  },
  actions: {
    asyncProductsList: ({
      commit
    }) => {
      return new Promise((resolve, reject) => {
        axios.get('api/Parts').then(res => {
          console.log(res.data)
          resolve(res)
        }).catch(err => {
          console.log(err);
          reject(err)
        })
      })
    },
    asyncProductData: ({
      commit
    }, id) => {
      return new Promise((resolve, reject) => {
        axios.get('api/Parts/' + id).then(res => {
          resolve(res)
        }).catch(err => {
          console.log(err);
          reject(err)
        })
      })
    }
  }

}
