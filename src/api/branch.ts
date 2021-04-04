import axios from "axios";
import { MENU } from "./config";

export const getBranchInfo = (restaurant: string, branchname: string) => {
  let branch = axios
    .get(MENU + restaurant + "/" + branchname)
    .then(async (response: any) => {
      return response;
    })
    .catch(function (error) {
      // handle error
      window.location.pathname = "/error";
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
  return branch;
};
