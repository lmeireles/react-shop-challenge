import {
  itemsUpdated,
  attCart,
  show,
  addIdToCart,
  cartItems,
  updatedTotalPrice
} from "./actions";
import { attDetailProduct } from "../products/actions";

export const addCart = product => async (dispatch, getState) => {
  const {
    cart: { items, id },
    products
  } = getState();

  let itemFound = false;
  let newList = [];
  // let attProduct = products.product
  if (items) {
    newList = items.map(i => {
      if (i.sku === product.sku) {
        i.quantity++;
        // attProduct.quantity = attProduct.quantity - i.quantity
        itemFound = true;
      } else {
        itemFound = false;
      }
      return i;
    });
    // dispatch(attDetailProduct())
  }

  if (!itemFound) {
    product.quantity = 1;
    newList.push(product);
  }

  let itemsInCart = newList.map(n => n.quantity).reduce((a, b) => a + b);
  dispatch(cartItems(itemsInCart));
  dispatch(itemsUpdated(newList));

  if (!id) {
    let randomCartId = Math.floor(Math.random() * 10000) + 1;
    dispatch(addIdToCart(randomCartId));
  }

  let list = [];
  let valueCart;

  if (newList) {
    list = newList.filter(i => i.quantity > 0);
    valueCart = list.map(n => n.quantity * n.price).reduce((a, b) => a + b);
    if (list) {
      dispatch(updatedTotalPrice(valueCart.toFixed(2)));
    } else {
      dispatch(updatedTotalPrice("0.00"));
    }
  } else {
    list = items.filter(i => i.quantity > 0);
    valueCart = list.map(n => n.quantity * n.price).reduce((a, b) => a + b);
    if (list) {
      dispatch(updatedTotalPrice(valueCart.toFixed(2)));
    } else {
      dispatch(updatedTotalPrice("0.00"));
    }
  }

  return true;
};

export const subQuantity = sku => async (dispatch, getState) => {
  const {
    cart: { items }
  } = getState();

  let newList = items
    .map(i => {
      if (i.sku === sku) {
        i.quantity--;
      }
      return i;
    })
    .filter(i => i.quantity > 0);

  let itemsInCart;
  if (newList.length > 0) {
    itemsInCart = newList.map(n => n.quantity).reduce((a, b) => a + b);
  } else {
    itemsInCart = 0;
  }
  dispatch(cartItems(itemsInCart));
  dispatch(itemsUpdated(newList));

  if (items) {
    let list = items.filter(i => i.quantity > 0);
    let valueCart;
    if (list.length > 0) {
      valueCart = list.map(n => n.quantity * n.price).reduce((a, b) => a + b);
    } else {
      valueCart = 0;
    }

    dispatch(updatedTotalPrice(valueCart.toFixed(2)));
  }

  return true;
};

export const addQuantity = sku => async (dispatch, getState) => {
  const {
    cart: { items },
    products: { product }
  } = getState();

  let newList;

  if (product.quantity !== 0) {
    newList = items
      .map(i => {
        if (i.sku === sku) {
          i.quantity++;
        }
        return i;
      })
      .filter(i => i.quantity > 0);
  }

  let itemsInCart = newList.map(n => n.quantity).reduce((a, b) => a + b);
  dispatch(cartItems(itemsInCart));

  if (product.quantity > 0) {
    dispatch(itemsUpdated(newList));
  }

  if (items) {
    let list = items.filter(i => i.quantity > 0);
    let valueCart = list.map(n => n.quantity * n.price).reduce((a, b) => a + b);

    dispatch(updatedTotalPrice(valueCart.toFixed(2)));
  }

  return true;
};

export const showCart = param => async (dispatch, getState) => {
  dispatch(show(param));
  return true;
};

export const clearCart = () => async (dispatch, getState) => {
  let cart = [];

  dispatch(itemsUpdated(cart));
  dispatch(updatedTotalPrice(0.0));
  dispatch(cartItems(0));
  return true;
};
