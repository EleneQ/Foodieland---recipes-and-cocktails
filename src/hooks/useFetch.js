import useAsync from "../hooks/useAsync";
import axios from "axios";

export default function useFetch(url, options = {}, dependencies = []) {
  return useAsync(() => {
    return axios(url, options)
      .then((res) => {
        if (res.status >= 200 && res.status < 300) {
          return res.data;
        } else {
          return Promise.reject(res.data);
        }
      })
      .catch((error) => Promise.reject(error));
  }, dependencies);
}
