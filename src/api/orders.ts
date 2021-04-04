import axios from "axios";
import { ORDERS } from "./config";

export const continueOrder = () => {
  let data = JSON.stringify({ payment_type: "pay_on_deliver" });

  axios({
    method: "post",
    url: "https://new.otlob.io/api/v1/apiOrders/mac/al-hamra/continue",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    data: data,
  })
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error;
    });
};

export const completeOrder = () => {
  axios({
    method: "post",
    url: "https://new.otlob.io/api/v1/apiOrders/mac/al-hamra/complete",
  })
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error;
    });
};

export const getOrder = (
  restaurant: string,
  branchname: string,
  cookie_id: string
) => {
  let order = axios({
    method: "get",
    url: ORDERS + restaurant + "/" + branchname + "/review",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    params: {
      cookie_id: cookie_id,
    },
  })
    .then(async (response: any) => {
      return response;
    })
    .catch(function (error) {
      // handle error
      window.location.pathname = "/error";
    })
    .finally(function () {
      // always executed
    });
  return order;
};
