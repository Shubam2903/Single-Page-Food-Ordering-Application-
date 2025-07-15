import LOGO_URL from "../../utils/constants";
import { use, useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";

const Header = () => {
  // const btnName = "login";
  const [btnNameReact, setbtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const data = useContext(UserContext);
  console.log(data);

  return (
    // <div  className="header    ">
    <div className="flex justify-between bg-pink-200 shadow-lg mb-2">
      <div className="logo-container">
        {/* <img className="logo" src={LOGO_URL}></img> */}
        <img className="w-40" src={LOGO_URL}></img>
      </div>
      {/* <div className="nav-items"> */}
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          {/* <ul> */}
          <li className="px-4">
            Online Status:
            {onlineStatus ? (
              <span className="w-3 h-3 bg-green-500 rounded-full">Active</span>
            ) : (
              <span className="w-3 h-3 bg-gray-400 rounded-full">Offline</span>
            )}
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4"> Cart</li>
        </ul>
        <button
          className="login px-4 py-2 m-4 w-25 bg-green-100 rounded-lg cursor-pointer"
          onClick={() => {
            btnNameReact === "Login"
              ? setbtnNameReact("Logout")
              : setbtnNameReact("Login");
            // ----ternary operator is used in the above statement----
          }}
        >
          {btnNameReact}
        </button>
      </div>
    </div>
  );
};

export default Header;
