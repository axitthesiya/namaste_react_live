import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../Contants";
import useRestaurant  from "./utils/useRestaurant";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { restaurantId } = useParams();
  
const restaurant = useRestaurant(restaurantId);

  return !restaurant ? (  
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h1>Restraunt id: {restaurantId}</h1>
        <h2>{restaurant?.name}</h2>
        <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
        <h3>{restaurant?.area}</h3>
        <h3>{restaurant?.city}</h3>
        <h3>{restaurant?.avgRating} stars </h3>
        <h3>{restaurant?.costForTwoMsg} </h3>
      </div>
      <div>
        <h1>Menu</h1>
      </div>
    </div>
  );
};
// how to read a dynamic URL params
//
// This logic show a menu on Restraunt
export default RestaurantMenu;
