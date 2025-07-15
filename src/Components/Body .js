import { useEffect, useState } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import resList from "../../utils/mockData";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState(resList);
  const [filteredRestaurants, setFilteredRestaurants] = useState(resList);

  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  const handleChange = (e) => {
    setSearchText(e.target.value); //Update state when input changes
  };
  // const [listOfRestaurants, setListOfRestaurant] = useState([
  //   {
  //     id: "1",
  //     name: "Burger King",
  //     cuisines: ["Burgers", "American", "Fast Food"],
  //     avgRating: "3",
  //     deliveryTime: "30 mins",
  //     image:
  //       "https://i.pinimg.com/736x/bf/06/2f/bf062fe1c0af0a3890b71e46dc07753d.jpg",
  //   },
  //   {
  //     id: "2",
  //     name: "KFC",
  //     cuisines: ["Burgers", "American", "Fast Food"],
  //     avgRating: "4.2",
  //     deliveryTime: "30 mins",
  //     image:
  //       "https://i.pinimg.com/736x/bf/06/2f/bf062fe1c0af0a3890b71e46dc07753d.jpg",
  //   },
  //   {
  //     id: "3",
  //     name: "KFC",
  //     cuisines: ["Burgers", "American", "Fast Food"],
  //     avgRating: "4.5",
  //     deliveryTime: "30 mins",
  //     image:
  //       "https://i.pinimg.com/736x/bf/06/2f/bf062fe1c0af0a3890b71e46dc07753d.jpg",
  //   },
  // ]);
  // let listOfRestaurants = [
  //   {
  //     id: "1",
  //     name: "Burger King",
  //     cuisines: ["Burgers", "American", "Fast Food"],
  //     avgRating: "3",
  //     deliveryTime: "30 mins",
  //     image:
  //       "https://i.pinimg.com/736x/bf/06/2f/bf062fe1c0af0a3890b71e46dc07753d.jpg",
  //   },
  //   {
  //     id: "2",
  //     name: "KFC",
  //     cuisines: ["Burgers", "American", "Fast Food"],
  //     avgRating: "4.2",
  //     deliveryTime: "30 mins",
  //     image:
  //       "https://i.pinimg.com/736x/bf/06/2f/bf062fe1c0af0a3890b71e46dc07753d.jpg",
  //   },
  //   {
  //     id: "3",
  //     name: "KFC",
  //     cuisines: ["Burgers", "American", "Fast Food"],
  //     avgRating: "4.5",
  //     deliveryTime: "30 mins",
  //     image:
  //       "https://i.pinimg.com/736x/bf/06/2f/bf062fe1c0af0a3890b71e46dc07753d.jpg",
  //   },
  // ];
  // ---------------------------------------------------------------------
  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.97210&lng=72.82460"
  //   );
  //   const json = await data.json();
  //   console.log(json);
  //   setListOfRestaurant(json?.data?.cards[1].card.card);
  // };
  // ---------------------------------------------------------------------
  // ----conditional rendering---
  // if  (listOfRestaurants.length === 0) {
  //   return <Shimmer />;
  // }

  // ----------ternary operator---------
  // return listOfRestaurants.length === 0 ? (
  //   <Shimmer />
  // ) : (
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        {" "}
        Looks like you are offline. Please check your internet connection.
      </h1>
    );

  if (listOfRestaurants.length === 0) return null;
  return (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="search-box border border-solid border-black"
            placeholder="Search for Restaurants"
            value={searchText}
            onChange={handleChange}
          />
          <button
            className="px-4 py-2 m-4 bg-green-100 rounded-lg cursor-pointer"
            onClick={() => {
              // console.log(searchText);
              const filteredRestaurants = listOfRestaurants.filter(
                (res) =>
                  res.name
                    .toLowerCase()
                    .includes(
                      searchText.toLowerCase()
                    ) /*suppose the restaurant name is of three words and we enter any of the three words in the search box then this INCLUDES function will filter the page as per the entered text (restaurant name). and lowercase is liye dala hai qki we can seach small or capital then also we will get the output*/
              );

              // setListOfRestaurant(
              //   filteredRestaurants
              // ); /*This will rerender the page and show the outputs as per what u search*/
              setFilteredRestaurants(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center ">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg cursor-pointer "
            onClick={() => {
              // listOfRestaurants = listOfRestaurants.filter(
              const filteredList = listOfRestaurants.filter(
                (res) => res.avgRating > 4
              );
              setFilteredRestaurants(filteredList);
              // console.log(listOfRestaurants);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="res-container flex flex-wrap gap-10">
        {/* {resList.map((restaurant) =>  */}
        {/* {listOfRestaurants.map((restaurant) => ( */}
        {filteredRestaurants.map((restaurant) =>
          // -----if the restaurant is promoted then add a promoted label to it---
          {
            return restaurant.promoted ? (
              <RestaurantCardPromoted
                key={restaurant.id}
                resData={restaurant}
              />
            ) : (
              <RestaurantCard key={restaurant.id} resData={restaurant} />
            );
          }
        )}

        {/* <RestaurantCard resData={resList[0]} />
        <RestaurantCard resData={resList[1]} />
        <RestaurantCard resData={resList[2]} />
        <RestaurantCard resData={resList[3]} />
        <RestaurantCard resData={resList[4]} />
        <RestaurantCard resData={resList[5]} />
        <RestaurantCard resData={resList[6]} />
        <RestaurantCard resData={resList[7]} />
        <RestaurantCard resData={resList[8]} />
        <RestaurantCard resData={resList[9]} />
        <RestaurantCard resData={resList[10]} />
        <RestaurantCard resData={resList[11]} />
        <RestaurantCard resData={resList[12]} />
        <RestaurantCard resData={resList[13]} /> */}
        {/* <RestaurantCard restName="KFC" cuisine="Burger,frenshfries,Fast food" /> */}
        {/* <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard /> */}
      </div>
    </div>
  );
};

export default Body;
