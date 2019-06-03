import {
  listProductsRequest,
  listProductsFulfilled,
  listProductsRejected,
  detailProductRequest,
  detailProductFulfilled,
  detailProductRejected,
  attProducts
} from "./actions";
import { listProducts, requestProduct } from "./queries";

export const requestProducts = () => async (dispatch, getState) => {
  dispatch(listProductsRequest());
  const response = await listProducts();
  if (!response) {
    const error = "No have products";
    dispatch(listProductsRejected(error));

    throw "Error";
  }

  dispatch(listProductsFulfilled(response));
  return true;
};

export const detailProduct = id => async (dispatch, getState) => {
  dispatch(detailProductRequest());
  const response = await requestProduct(id);

  if (!response) {
    const error = "Fail load product";
    dispatch(detailProductRejected(error));

    throw "Error";
  }
  dispatch(detailProductFulfilled(response));
  return true;
};

export const filterProducts = filtered => async (dispatch, getState) => {
  dispatch(attProducts(filtered));

  return true;
};
