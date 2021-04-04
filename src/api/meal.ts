import axios from "axios";
import { MEAL } from "./config";

export const getMealInfo = (
  restaurant: string,
  branchname: string,
  id: string
) => {
  let meal = axios
    .post(MEAL + restaurant + "/" + branchname + "/meal/" + id)
    .then(async (response: any) => {
      return response.data.data.food;
    })
    .catch(function (error) {
      // handle error
      window.location.pathname = "/error";
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
  return meal;
};
