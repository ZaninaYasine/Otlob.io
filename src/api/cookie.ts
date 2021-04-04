import axios from "axios";
import { COOKIE } from "./config";

export const registerUserCookie = (cookie: string) => {
  var data = JSON.stringify({ cookie_id: cookie });

  let response = axios({
    method: "put",
    url: COOKIE,
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
      //   window.location.pathname = "/error";
      return response;
    });

  return response;
};
