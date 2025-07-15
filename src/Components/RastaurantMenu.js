// import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { flushSync } from "react-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);

  // const params = useParams();
  // console.log(params);

  // After destructuring on the fly above statement

  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1458004&lng=79.0881546&collection=83637&tags=layout_CCS_Burger&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
  //   );

  //   const json = await data.json();
  //   console.log(json);

  //   setResInfo(json.data);
  // };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwo, avgRating } =
    resInfo?.cards[3]?.card?.card?.info;

  // const { itemCards } =
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card
  //     ?.itemCards[1]?.card?.info;

  // console.log(itemCards);
  //  resInfo?.cards[3]?.card?.card?.info;
  // return resInfo === null ? (
  //   <Shimmer />
  // ) : (
  return (
    <div className="menu text-center">
      <h1 className="font-bold my-6 text-2xl"> {name}</h1>

      <p className="font-bold my-6 text-2xl">
        {cuisines.join(", ")} - {costForTwo}
      </p>

      <h3 className="font-bold my-6 text-2xl">{avgRating}</h3>
    </div>
  );
};

export default RestaurantMenu;
