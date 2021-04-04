import axios from "axios";
import { CREATE_ORDER } from "./config";

//types
type productType = {
  is_food: boolean;
  food_id: number;
  type: "add" | "update" | "remove";
  cookie_id: string;
  quantity: number;
};

type AdditionType = {
  is_food: boolean;
  food_id: number;
  type: "add" | "update";
  cookie_id: string;
  item_id: number;
  quantity: number;
};

export const addProduct = (
  restaurant: string,
  branchname: string,
  product: productType
) => {
  let data = JSON.stringify({
    is_food: true,
    food_id: product.food_id,
    type: "create",
    cookie_id: product.cookie_id,
    quantity: product.quantity,
  });

  let response = axios({
    method: "post",
    url: CREATE_ORDER + restaurant + "/" + branchname + "/create",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    data: data,
  })
    .then(function (response) {
      //handle success
      return response;
    })
    .catch(function (response) {
      //handle error
      // window.location.pathname = "/error";
      return response;
    });

  return response;
};

export const removeProduct = (
  restaurant: string,
  branchname: string,
  product: productType
) => {
  let data = JSON.stringify({
    is_food: true,
    food_id: product.food_id,
    type: "remove",
    cookie_id: product.cookie_id,
  });

  let response = axios({
    method: "post",
    url: CREATE_ORDER + restaurant + "/" + branchname + "/create",
    // url: ORDERS_REVIEW + "review/" + restaurant + "/" + branchname + "/remove-from-order",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    data: data,
  })
    .then(function (response) {
      //handle success
      return response;
    })
    .catch(function (response) {
      //handle error
      window.location.pathname = "/error";
      return response;
    });

  return response;
};

export const addAddition = (
  restaurant: string,
  branchname: string,
  product: AdditionType
) => {
  let data = JSON.stringify({
    is_food: true,
    food_id: product.food_id,
    type: "add",
    cookie_id: product.cookie_id,
    item_id: product.item_id,
    quantity: product.quantity,
  });

  let response = axios({
    method: "post",
    url: CREATE_ORDER + restaurant + "/" + branchname + "/create",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Cookie: "otlob_session=r4fhTNPSc6cKQJWuZ6WPNFJgOL8nHNOqxWGdbMBv",
    },
    data: data,
  })
    .then(function (response) {
      //handle success
      return response;
    })
    .catch(function (response) {
      //handle error
      window.location.pathname = "/error";
      return response;
    });

  return response;
};
