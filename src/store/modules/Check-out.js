export default {
  state: {
    changeAddress: "/check_out/sending",
    items: [],
    stepsIconOpacity: []
  },
  getters: {
    getCheckOutAddress: (state) => {
      return state.changeAddress
    },
    getCheckOutItems: (state) => {
      return state.items
    }
  },
  mutations: {
    setCheckOutAddress: (state, url) => {
      state.changeAddress = url
    },
    setCheckOutItmes: (state, items) => {
      state.items = items
    },
    removeCheckOutItem: (state, index) => {
      state.items.splice(index, 1)
    }
  },
  actions: {
    setCheckOutItems: ({
      commit
    }, items) => {
      commit('setCheckOutItmes', items)
    },
    removeCheckOutItem: ({
      commit
    }, index) => {
      commit("removeCheckOutItem", index)
    },
    asyncGetCheckOutData: ({
      commit
    }) => {
      var COData = [{
          id: 1,
          name: 'نام کالا',
          quantity: 'مقدار',
          producer: 'تولید کننده',
          type: 'نوع بسته بندی',
          off: 'تخفیف',
          price: 'مبلغ: ۱۸۰۰۰۰۰تومان'
        },
        {
          id: 2,
          name: 'نام کالا',
          quantity: 'مقدار',
          producer: 'تولید کننده',
          type: 'نوع بسته بندی',
          off: 'تخفیف',
          price: 'مبلغ: ۱۸۰۰۰۰۰تومان'
        },
        {
          id: 3,
          name: 'نام کالا',
          quantity: 'مقدار',
          producer: 'تولید کننده',
          type: 'نوع بسته بندی',
          off: 'تخفیف',
          price: 'مبلغ: ۱۸۰۰۰۰۰تومان'
        },
        {
          id: 4,
          name: 'نام کالا',
          quantity: 'مقدار',
          producer: 'تولید کننده',
          type: 'نوع بسته بندی',
          off: 'تخفیف',
          price: 'مبلغ: ۱۸۰۰۰۰۰تومان'
        },
        {
          id: 5,
          name: 'نام کالا',
          quantity: 'مقدار',
          producer: 'تولید کننده',
          type: 'نوع بسته بندی',
          off: 'تخفیف',
          price: 'مبلغ: ۱۸۰۰۰۰۰تومان'
        },
        {
          id: 6,
          name: 'نام کالا',
          quantity: 'مقدار',
          producer: 'تولید کننده',
          type: 'نوع بسته بندی',
          off: 'تخفیف',
          price: 'مبلغ: ۱۸۰۰۰۰۰تومان'
        },
        {
          id: 7,
          name: 'نام کالا',
          quantity: 'مقدار',
          producer: 'تولید کننده',
          type: 'نوع بسته بندی',
          off: 'تخفیف',
          price: 'مبلغ: ۱۸۰۰۰۰۰تومان'
        },
        {
          id: 8,
          name: 'نام کالا',
          quantity: 'مقدار',
          producer: 'تولید کننده',
          type: 'نوع بسته بندی',
          off: 'تخفیف',
          price: 'مبلغ: ۱۸۰۰۰۰۰تومان'
        },
        {
          id: 9,
          name: 'نام کالا',
          quantity: 'مقدار',
          producer: 'تولید کننده',
          type: 'نوع بسته بندی',
          off: 'تخفیف',
          price: 'مبلغ: ۱۸۰۰۰۰۰تومان'
        },
        {
          id: 10,
          name: 'نام کالا',
          quantity: 'مقدار',
          producer: 'تولید کننده',
          type: 'نوع بسته بندی',
          off: 'تخفیف',
          price: 'مبلغ: ۱۸۰۰۰۰۰تومان'
        },
        {
          id: 11,
          name: 'نام کالا',
          quantity: 'مقدار',
          producer: 'تولید کننده',
          type: 'نوع بسته بندی',
          off: 'تخفیف',
          price: 'مبلغ: ۱۸۰۰۰۰۰تومان'
        }
      ]

      console.log(COData);

      commit("setCheckOutItmes", COData)
    },
    asyncRemoveCheckOutItem: ({
      commit,
      state
    }, index) => {
      commit("removeCheckOutItem", index)
      console.log(state.items.length + '//' + index);
    }
  },
}
