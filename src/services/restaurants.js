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

export const restaurantDetail = (navigate) => {
  axios
    .get(`${BASE_URL}/restaurants/:restaurantId`, {
      headers: {
        auth: localStorage.getItem("token"),
      },
    })
    .then((res) => {
    
      goToRestaurantDetailPage(navigate);
    })
    .catch((err) => alert(err.response.data.message));
};
