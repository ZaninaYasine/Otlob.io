import axios from "axios";
import { RESTAURANT } from "./config";

export const getRestaurant = (slug: string) => {
  let restaurant = axios
    .get(RESTAURANT + slug)
    .then(async (response: any) => {
      return response;
    })
    .catch(function (error) {
      // handle error
      window.location.pathname = "/error";
      console.log("error", error);
    })
    .finally(function () {
      // always executed
    });
  return restaurant;
};
