const RestaurantCard = (props) => {
  const { resData } = props;

  const { name, cuisines, avgRating, deliveryTime } = resData;
  return (
    // <div className="res-card" style={{ backgroundColor: "brown" }}>
    <div className="res-card  bg-gray-100  m-4 p-4 w-[250px] rounded-lg hover:bg-gray-500 scale-3d">
      <img className="res-logo flex rounded-lg" src={resData.image} />
      {/* 
      <h3>Meghna foods</h3>
      <h4>Biryan,Indian,Chinese</h4>
      <h4>4.5 Stars</h4>
      <h4>Delivery:15mins</h4> */}

      <h3 className="font-bold text-xl py-4">{name}</h3>
      {/* <h3>{cuisines}</h3> */}
      <h3>{cuisines.join(", ")}</h3>
      <h3>{avgRating} Stars</h3>
      {/* <h3>{costForTwo}</h3> */}
      <h3>{deliveryTime} Minutes</h3>
    </div>
  );
};

/*Below is Higher order function which helps us to create label for the different cards. */

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute bg-black text-white px-2 py-1  z-10 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
// absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded-lg z-10
