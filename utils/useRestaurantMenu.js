import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [resInfo, setresInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1458004&lng=79.0881546&collection=83637&tags=layout_CCS_Burger&sortBy=&filters=&type=rcv2&offset=0&page_type=null" +
        resId
    );
    const json = await data.json();
    setresInfo(json.data);
  };
  return resInfo;
};

export default useRestaurantMenu;
