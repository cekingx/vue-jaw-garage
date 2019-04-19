const state = {
  products: [
    {
      image: "http://35.244.219.12/custom-kit1.jpg",
      product: "Custom Kit 1",
      price: 200,
      quantity: 2
    },
    {
      image: "http://35.244.219.12/jok-spatbor.jpg",
      product: "Jok custom",
      price: 300,
      quantity: 1
    },
    {
      image: "http://35.244.219.12/jok-spatbor.jpg",
      product: "Jok custom 2",
      price: 300,
      quantity: 1
    }
  ]
};

const getters = {
  getProducts: state => state.products
};

const actions = {
  removeProduct: (context, index) => {
    context.commit("REMOVE_FROM_CART", index);
  }
};

const mutations = {
  REMOVE_FROM_CART: (state, index) => {
    state.products.splice(index, 1);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
