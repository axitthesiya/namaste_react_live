import { useContext } from "react";
import { IMG_CDN_URL } from "../Contants";
import UserContext from "./utils/UserContext";

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,

  
}) => {
  const { user } = useContext(UserContext);
  return (
    <div className="card w-56 p-2 m-2 shadow-lg bg-gray-300">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{cuisines.join(" , ")}</h3>
      <h4>{lastMileTravelString}</h4>
      <h5 className="font-bold">
        {user.name} - {user.email}
      </h5>
    </div>
  );
};

export default RestaurantCard;
