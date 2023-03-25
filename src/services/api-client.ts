import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "0e81cd617c20495ea77e5332e2140c87",
  },
});
