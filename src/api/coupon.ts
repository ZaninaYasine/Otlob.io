import axios from "axios";
import { COUPON } from "./config";

export const checkCoupon = (
  restaurant: string,
  branch: string,
  coupon: string,
  cookie_id: string
) => {
  let data = JSON.stringify({ coupon: coupon, cookie_id: cookie_id });
  let verifyCookie = axios({
    method: "post",
    url: COUPON + restaurant + "/" + branch + "/use-coupon",
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
  return verifyCookie;
};
