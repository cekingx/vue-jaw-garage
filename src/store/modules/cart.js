const state = {
  items: [
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
  getCartItems: state => state.items
};

const actions = {
  addCartItem: (context, product) => {
    product.quantity = 1;
    context.commit("ADD_TO_CART", product);
  },
  removeCartItem: (context, index) => {
    context.commit("REMOVE_FROM_CART", index);
  },
  addItemQuantity: (context, index) => {
    context.commit("ADD_ITEM_QUANTITY", index);
  },
  removeItemQuantity: (context, index) => {
    if (state.items[index].quantity == 1) {
      context.commit("REMOVE_FROM_CART", index);
    } else {
      context.commit("REMOVE_ITEM_QUANTITY", index);
    }
  }
};

const mutations = {
  ADD_TO_CART: (state, product) => {
    state.items.push(product);
  },
  REMOVE_FROM_CART: (state, index) => {
    state.items.splice(index, 1);
  },
  ADD_ITEM_QUANTITY: (state, index) => {
    state.items[index].quantity += 1;
  },
  REMOVE_ITEM_QUANTITY: (state, index) => {
    state.items[index].quantity -= 1;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
