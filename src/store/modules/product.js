const state = {
  products: [
    {
      image: "http://35.244.219.12/custom-kit1.jpg",
      product: "Custom Kit 1",
      price: 299000,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      quantity: 0
    },
    {
      image: "http://35.244.219.12/custom-kit2.jpg",
      product: "Custom Kit 2",
      price: 299000,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      quantity: 0
    },
    {
      image: "http://35.244.219.12/jok-spatbor.jpg",
      product: "Jok Spatbor",
      price: 100000,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      quantity: 0
    },
    {
      image: "http://35.244.219.12/skit-plate.jpg",
      product: "Skit Plate",
      price: 75000,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      quantity: 0
    },
    {
      image: "http://35.244.219.12/stang.jpg",
      product: "Stang Camar",
      price: 250000,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      quantity: 0
    },
    {
      image: "http://35.244.219.12/swing-arm.jpg",
      product: "Swing Arm",
      price: 300000,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      quantity: 0
    }
  ]
};

const getters = {
  getProducts: state => state.products
};

const actions = {};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations
};
