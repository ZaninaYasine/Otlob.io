import axios from "axios";
import { PHONE } from "./config";

export const checkPhone = (
  restaurant: string,
  branchname: string,
  phone: string
) => {
  let data = JSON.stringify({ phone: phone });
  axios({
    method: "post",
    url: PHONE! + restaurant + "/" + branchname + "/send-sms",
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
};

export const checkCode = (
  restaurant: string,
  branchname: string,
  code: string
) => {
  let data = JSON.stringify({ code: code });
  let codeVerification = axios({
    method: "put",
    url: PHONE! + restaurant + "/" + branchname + "/confirm",
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
      return response;
    });
  return codeVerification;
};
