import { useState, useEffect} from "react";
import { FETCH_MENU_URL } from "../../Contants";
//This is state for maintening restruart
const useRestaurant = (restaurantId) => {
  const [restaurant, setRestaurant] = useState(null);
   // This state will upadated whenever this data was fetch from API
  
   // Get data from API
   useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(FETCH_MENU_URL + restaurantId);
    const json = await data.json();
    setRestaurant(json.data);
  }
   //return restraunt Data
   return restaurant;
  };

export default useRestaurant;
 
