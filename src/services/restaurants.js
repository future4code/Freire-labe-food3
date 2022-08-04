import axios from "axios";
import { BASE_URL } from "../constants/url";
import {
  goToRestaurantPage,
  goToRestaurantDetailPage,
} from "../Routes/Coordinator";

export const restaurantList = (navigate) => {
  axios
    .get(`${BASE_URL}/restaurants`, {
      headers: {
        auth: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      goToRestaurantPage(navigate);
    })
    .catch((err) => console.log(err.response.data.message));
};

export const restaurantDetail = (navigate,id) => {
  axios
    .get(`${BASE_URL}/restaurants/${id}`, {
      headers: {
        auth: localStorage.getItem("token"),
      }
    })
    .then((res) => {
    console.log(res)
      goToRestaurantDetailPage(navigate);
    })
    .catch((err) => console.log(err));
};
