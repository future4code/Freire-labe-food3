import React from "react";
import { goToLastPage } from "../../Routes/Coordinator";
import { useNavigate } from "react-router-dom";
// import useRequestData from "../../hooks/useRequestData";
import { useParams } from "react-router-dom";
// import useProtectedPage from "../../hooks/useProtectedPage";
// import { BASE_URL } from "../../constants/url";
// import { restaurantDetail } from "../../services/restaurants";

const RestaurantDetailPage =() => {
  const navigate = useNavigate();
  // useProtectedPage();
  const params = useParams();
  
  // restaurantDetail(params.id)
  
  console.log(params.id)

  // const restaurantDetails = useRequestData(
  //   [],
  //   `https://us-central1-missao-newton.cloudfunctions.net/fourFoodA/restaurants/${params.id}`
  //   // , {
  //   //   headers: {
  //   //     auth: localStorage.getItem("token"),
  //   //   }},
  // )
  

  return (
    <div>
      {/* {restaurantDetails.map((res)=>{
        return <p>{res.data}</p> 
      })} */}
     
      <h1>LISTA DE RESTAURANTES</h1>
      <button onClick={() => goToLastPage(navigate)}>Voltar</button>
    </div>
  );
}

export default RestaurantDetailPage;
