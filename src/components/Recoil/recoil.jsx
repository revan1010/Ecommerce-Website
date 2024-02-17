import { atom, selector } from "recoil";

export const productsState = atom({
  key: "productState",
  default: [],
});

export const cartState = atom({
  key: "cartState",
  default: [],
});
export const authState = atom({
  key: "authState",
  default: false,
});
export const totalItemCountSelector = selector({
  key: "totalItemCountSelector",
  get: ({ get }) => {
    const cart = get(cartState);
    return cart.reduce((total, item) => total + item.quantity, 0);
  },
});
export const totalAmountSelector = selector({
  key: "totalAmountSelector",
  get: ({ get }) => {
    const cart = get(cartState);
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  },
});
