const actionTypes = {
  LOGIN_SUCESS: "LOGIN_SUCESS",
  LOGOUT: "LOGOUT",
  LOGIN_FAIL: "LOGIN_FAIL",
  LOGIN_SUBMIT: "LOGIN_SUBMIT",
  GET_PRODUCT: "GET_PRODUCT",
  FETCH_PRODUCTS_REQUEST: "FETCH_PRODUCTS_REQUEST",
  FETCH_PRODUCTS_SUCCESS: "FETCH_PRODUCTS_SUCCESS",
  FETCH_PRODUCTS_FAILURE: "FETCH_PRODUCTS_FAILURE",
  // product
  FETCH_ONE_PRODUCT_REQUEST: "FETCH_ONE_PRODUCT_REQUEST",
  FETCH_ONE_PRODUCT_SUCCESS: "FETCH_ONE_PRODUCT_SUCCESS",
  FETCH_ONE_PRODUCT_FAILURE: "FETCH_ONE_PRODUCT_FAILURE",
  // cart
  REMOVE_ITEM: "REMOVE_ITEM",
  ADD_ITEM: "ADD_ITEM",
  INCREASE_ITEM: "INCREASE_ITEM",
  DECREASE_ITEM: "DECREASE_ITEM",
  // User
  FETCH_USER_DETAILS: "FETCH_USER_DETAILS",
};

export default actionTypes;
