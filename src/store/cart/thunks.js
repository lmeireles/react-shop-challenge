import {
  itemsUpdated,
  attCart,
  show,
  addIdToCart,
  cartItems,
  updatedTotalPrice
} from "./actions";
import { listProductsFulfilled } from "../products/actions";

export const addCart = product => async (dispatch, getState) => {
  const {
    cart: { items, id },
    products
  } = getState();

  // garante que nunca será nulo
  const currentCartItems = items || [];
  let hasStock = false;
  let itemFound = false;
  let newCartList = [];

  // não tem itens na listagem, mata função
  if (!products || products.list.length === 0) return;

  // esse Bloco vai atualizar os estoques
  const newProductsList = products.list.map(p => {
    if (p.id === product.id) {
      if (p.quantity > 0) {
        p.quantity--;
        hasStock = true;
      }
    }
    return p;
  });
  // não tinha no stock, não faz nada
  if (!hasStock) return;
  dispatch(listProductsFulfilled(newProductsList));
  // acabou de atualizar os estoques

  // Esse IF vai atualizar o carrinho
  newCartList = currentCartItems.map(i => {
    if (i.id === product.id) {
      i.quantity++;
      itemFound = true;
    }
    return i;
  });

  // Não encontrou no carrinho, adiciona 1
  if (!itemFound) {
    newCartList = [...currentCartItems, {...product, quantity: 1}]
  }

  const itemsInCart = newCartList.map(n => n.quantity).reduce((a, b) => a + b);
  dispatch(cartItems(itemsInCart));
  dispatch(itemsUpdated(newCartList));

  if (!id) {
    let randomCartId = Math.floor(Math.random() * 10000) + 1;
    dispatch(addIdToCart(randomCartId));
  }

  if (newCartList.length > 0) {
    const list = newCartList.filter(i => i.quantity >= 0);

    if (list.length > 0) {
      const valueCart = list.map(n => n.quantity * n.price).reduce((a, b) => a + b);
      dispatch(updatedTotalPrice(valueCart.toFixed(2)));
      return true;
    }
  }

  dispatch(updatedTotalPrice("0.00"));
  return true;
};

export const subQuantity = sku => async (dispatch, getState) => {
  const {
    cart: { items },
    products
  } = getState();

  let productFoundInCart = false;

  let newList = items
    .map(i => {
      if (i.id === sku) {
        i.quantity--;
        productFoundInCart = true;
      }
      return i;
    })
    .filter(i => i.quantity > 0);

  // esse Bloco vai atualizar os estoques
  if (productFoundInCart) {
    const newProductsList = products.list.map(p => {
      if (p.id === sku) {
        p.quantity++;
      }
      return p;
    });
    dispatch(listProductsFulfilled(newProductsList));
  }
  // acabou de atualizar os estoques

  let itemsInCart = 0;
  if (newList.length > 0) {
    itemsInCart = newList.map(n => n.quantity).reduce((a, b) => a + b);
  }

  dispatch(cartItems(itemsInCart));
  dispatch(itemsUpdated(newList));

  if (newList) {
    let valueCart = 0;
    if (newList.length > 0) {
      valueCart = newList.map(n => n.quantity * n.price).reduce((a, b) => a + b);
    }
    dispatch(updatedTotalPrice(valueCart.toFixed(2)));
  }

  return true;
};

export const addQuantity = sku => async (dispatch, getState) => {
  const { products } = getState();
  // não tem itens na listagem, mata função
  if (!products || products.list.length === 0) return;

  const product = products.list.find(p => p.id === sku);

  if (product) {
    dispatch(addCart(product))
  }
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
