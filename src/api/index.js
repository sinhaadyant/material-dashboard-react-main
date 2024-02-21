import axios from "axios";
const tokenInLocalStorage = localStorage.getItem("token");
export const apiV1Instance = axios.create({
  baseURL: "http://localhost:8000/api/v1/",
  responseType: "json",
  headers: {
    Authorization: localStorage.getItem("token")
      ? `Bearer ${localStorage.getItem("token")}`
      : undefined,
  },
});
apiV1Instance.get("/auth/signin");
