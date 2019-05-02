import ky from "ky";

export const apiClient = ky.extend({
  prefixUrl: "https://conduit.productionready.io/api/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json"
  }
});
