export default {
  state: {
    active: [false, false, false, false, false, false],
    addresses: [],
    avatar: '',
    title: '',
    userColor: false
  },
  getters: {
    getAddresses: (state) => {
      return state.addresses
    },
    getProfileAvatar: (state) => {
      return localStorage.getItem("profileImage");
    },
    getProfileSubject: (state) => {
      return state.title
    },
    getProfileUserColor: (state) => {
      return state.userColor
    }
  },
  mutations: {
    setProfileData: (state, data) => {
      state.addresses = data
    },
    setNewAddress: (state, address) => {
      state.addresses.splice(1, 0, address)
    },
    removeAddress: (state, index) => {
      state.addresses.splice(index, 1)
    },
    setProfileAvatar: (state, avatar) => {
      state.avatar = avatar
    },
    setProfileSubject: (state, name) => {
      state.title = name
    },
    setProfileUserColor: (state, userColor) => {
      state.userColor = userColor
    }
  },
  actions: {
    setProfileData: ({
      commit
    }, data) => {
      commit('setProfileData', data)
    },
    removeAddress: ({
      commit
    }, addresses) => {
      commit('removeAddress', addresses)
    },
    asyncGetProfileData: ({
      commit
    }) => {
      var addresses = [{
          id: 1,
          title: 'عنوان آدرس',
          phone: 'تلفن تماس',
          postalCode: 'کد پستی ',
          type: 'نوع آدرس',
          receiverName: 'نام تحویل گیرنده',
          address: 'آدرس'
        },
        {
          id: 2,
          title: 'عنوان آدرس',
          phone: 'تلفن تماس',
          postalCode: 'کد پستی ',
          type: 'نوع آدرس',
          receiverName: 'نام تحویل گیرنده',
          address: 'آدرس'
        },
        {
          id: 3,
          title: 'عنوان آدرس',
          phone: 'تلفن تماس',
          postalCode: 'کد پستی ',
          type: 'نوع آدرس',
          receiverName: 'نام تحویل گیرنده',
          address: 'آدرس'
        },
        {
          id: 4,
          title: 'عنوان آدرس',
          phone: 'تلفن تماس',
          postalCode: 'کد پستی ',
          type: 'نوع آدرس',
          receiverName: 'نام تحویل گیرنده',
          address: 'آدرس'
        },
        {
          id: 5,
          title: 'عنوان آدرس',
          phone: 'تلفن تماس',
          postalCode: 'کد پستی ',
          type: 'نوع آدرس',
          receiverName: 'نام تحویل گیرنده',
          address: 'آدرس'
        },
        {
          id: 6,
          title: 'عنوان آدرس',
          phone: 'تلفن تماس',
          postalCode: 'کد پستی ',
          type: 'نوع آدرس',
          receiverName: 'نام تحویل گیرنده',
          address: 'آدرس'
        },
        {
          id: 7,
          title: 'عنوان آدرس',
          phone: 'تلفن تماس',
          postalCode: 'کد پستی ',
          type: 'نوع آدرس',
          receiverName: 'نام تحویل گیرنده',
          address: 'آدرس'
        },
        {
          id: 8,
          title: 'عنوان آدرس',
          phone: 'تلفن تماس',
          postalCode: 'کد پستی ',
          type: 'نوع آدرس',
          receiverName: 'نام تحویل گیرنده',
          address: 'آدرس'
        },
        {
          id: 9,
          title: 'عنوان آدرس',
          phone: 'تلفن تماس',
          postalCode: 'کد پستی ',
          type: 'نوع آدرس',
          receiverName: 'نام تحویل گیرنده',
          address: 'آدرس'
        },
        {
          id: 10,
          title: 'عنوان آدرس',
          phone: 'تلفن تماس',
          postalCode: 'کد پستی ',
          type: 'نوع آدرس',
          receiverName: 'نام تحویل گیرنده',
          address: 'آدرس'
        }
      ]

      commit('setProfileData', addresses)
    },
    asyncRemoveProfileAddress: ({
      commit,
      state
    }, index) => {
      commit("removeAddress", index)
      console.log(state.addresses.length + '//' + index);
    }
  }

}
