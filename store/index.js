import { fetchCartItem } from '../api/index';

export const FETCH_CART_ITEMS = 'FETCH_CART_ITEMS';

export const state = () => ({
  cartItems: [],
});

export const mutations = {
  addCartItems(state, cartItem) {
    const newCartItem = {
      ...cartItem,
      imageUrl: `${cartItem.imageUrl}?rendom=${Math.random()}`,
    };
    state.cartItems.push(newCartItem);
  },
  setCartItems(state, payload) {
    state.cartItems = payload;
  },
};

export const getters = {
  getCartItems(state) {
    return state.cartItems;
  },
};

export const actions = {
  // nuxtServerInit(storeContext, nuxtContext) {
  //   storeContext.dispatch(FETCH_CART_ITEMS);
  // },
  async [FETCH_CART_ITEMS]({ commit }) {
    const { data } = await fetchCartItem();
    commit('setCartItems', data);
  },
};
