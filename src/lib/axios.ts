import Axios from "axios";

export const axios = Axios.create({
  withCredentials: true,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    accept: "application/json"
  },
});