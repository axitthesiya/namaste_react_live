import { restaurantList } from "../Contants";
import RestaurantCard from "../component/RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "./utils/helper";
import  useOnline  from "./utils/useOnline";
import UserContext from "./utils/UserContext";

  // const searchTxt = "KFC";
  // SearchText is a local state variable automatically rerender the component
  // To create state variable
  //(e) store the input value and typing contain in (e.target.value)
  //returns = [variable nae,function to update the variable]


const Body = () => {
  // how do u randring functional component...
  const [allrestaurants, setAllrestaurants] = useState([]);
  const [filteredrestaurants, setFilteredrestaurant] = useState([]);
  const [SearchText, setSearchText] = useState("");
  const {user, setUser} = useContext(UserContext);

  // empty dependency array => once after render
  // dep array [searchText] => once after initial render + everytime after return (my searchText changes)
    //API call

  useEffect(()=>{
    getRestaurants();

  },[]);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.2628358&lng=70.7867974&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    // Optional Chining
    setAllrestaurants(json.data?.cards[2]?.data?.data?.cards);
    setFilteredrestaurant(json.data?.cards[2]?.data?.data?.cards);
  }
  const isOnline = useOnline();

  if(!isOnline) {
    return <h1>🔴Offline, please cheak your internet connection!!🔴</h1>;
  }
  // Conditional Rendering
  // if restraunt is empty => shimmer UI
  // if restraunt has data => actual data UI

  // not render component (early return)
  if (!allrestaurants) return null;

  // if (filteredrestaurants?.length === 0)
  // return <h1>No Result Found!!!</h1>;

  return allrestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container p-5 bg-cyan-700 my-2 rounded-md">
        <input 
          type="text"
          className="focus:bg-violet-300 p-2 m-2 text-black"
           placeholder="search "
          value={SearchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className=" p-1 m-1 bg-red-300 text-black rounded-full hover:bg-yellow-100"
          onClick={() => {
            //need to filter the data
            const data = filterData(SearchText, allrestaurants);
            // update the state - restaurants
            //rerender all things
            setFilteredrestaurant(data);
          }}
        >
          Search
        </button>
        <input value={user.name} onChange= {
          e => setUser({
            name: e.target.value,
           email:"newemail@gmail.com",
          })
        }></input>
      </div>
      <div className="flex flex-wrap bg-orange-100 ">
      {/* You have to write logic for NO restraurant fount here*/}
        {filteredrestaurants.map((restaurant) => {
          return (
            // use key and card was a clickeable..........
            <Link
              to={"/restaurant/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              <RestaurantCard {...restaurant.data}  />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
