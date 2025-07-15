import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body ";
import About from "./Components/about";
import Error from "./Components/Error";
import Contact from "./Components/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./Components/RastaurantMenu";
import { lazy } from "react";
import { Provider } from "react-redux";
// import Grocery from "./Components/Grocery";

/*--------Outlet is a component which is provided by react-router-dom-------So when ever their is change in the path then the outlet will be filled with the children according to the path. when we see the output in console then we will never see outlet we will see the outlet being replaced by the childrens*/

// const heading = React.createElement("h1",
//         {id:"heading"},
//         "Hello Shubham S"
//       );

//       const root = ReactDOM.createRoot(document.getElementById("root"));

//       root.render(heading);

// ------------------JSX------------------------------------

// const heading=(
//   <h1 className="shubham">
// Shubham Suryawanshi
//   </h1>
// );

// Root.render=heading;
// -----------------------------------------------------------

// const  number=10000;
// const HeadingComp=()=>(
//   <h1 className="Name">
// Shubham     {100+300}
//   </h1>

// );

// const root=ReactDOM.createRoot(document.getElementById("root"));

// root.render(<HeadingComp/>);

// const resObj = {
//   id: "bk001",
//   name: "Burger King",
//   description:
//     "Flame-grilled burgers, crispy fries, and creamy shakes. One of the most loved fast-food chains globally.",
//   image:
//     "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/burgerking.png",
//   cuisines: ["Burgers", "American", "Fast Food"],
//   avgRating: "4.2",
//   totalRatings: "10K+ ratings",
//   deliveryTime: "30 mins",
//   costForTwo: "₹350 for two",
//   location: "Marathahalli, Bangalore",
//   isVeg: false,
//   discountInfo: {
//     header: "FLAT ₹120 OFF",
//     subHeader: "on orders above ₹199",
//     couponCode: "BK120",
//     expiry: "2025-07-31",
//   },
//   safety: {
//     message: "Follows WHO hygiene standards",
//     lastInspection: "2025-06-10",
//   },
//   menu: [
//     {
//       id: "item101",
//       name: "Whopper®",
//       description:
//         "Signature flame-grilled beef burger with cheese, lettuce, tomato & sauces.",
//       image:
//         "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/whopper.png",
//       price: 189,
//       isVeg: false,
//       bestseller: true,
//     },
//     {
//       id: "item102",
//       name: "Veggie Burger",
//       description: "Crispy veggie patty with mayo and lettuce in sesame bun.",
//       image:
//         "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/veggie.png",
//       price: 129,
//       isVeg: true,
//       bestseller: false,
//     },
//     {
//       id: "item103",
//       name: "French Fries (Medium)",
//       description: "Golden, crispy fries seasoned with salt.",
//       image:
//         "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/fries.png",
//       price: 89,
//       isVeg: true,
//       bestseller: false,
//     },
//     {
//       id: "item104",
//       name: "Chocolate Shake",
//       description: "Thick chocolate shake topped with whipped cream.",
//       image:
//         "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/shake.png",
//       price: 109,
//       isVeg: true,
//       bestseller: false,
//     },
//   ],
//   restaurantTimings: {
//     openTime: "10:00 AM",
//     closeTime: "11:00 PM",
//   },
//   deliveryDetails: {
//     distance: "3.2 km",
//     fee: "₹30",
//     freeDeliveryAbove: "₹249",
//     trackingAvailable: true,
//   },
//   paymentMethods: ["Cash", "UPI", "Credit/Debit Card", "Net Banking"],
//   reviews: {
//     total: 10876,
//     topReviews: [
//       {
//         user: "Ravi S.",
//         rating: 5,
//         comment: "Loved the Whopper! Fresh and juicy.",
//         date: "2025-06-12",
//       },
//       {
//         user: "Ananya M.",
//         rating: 4,
//         comment: "Delivery was fast, but shake could be colder.",
//         date: "2025-06-10",
//       },
//     ],
//   },
//   license: {
//     fssai: "11234567000981",
//   },
//   tags: ["Quick Bites", "Family Friendly", "Late Night"],
// };
const Grocery = lazy(() => import("./Components/Grocery"));
const Applayout = () => {
  return (
    <div className="app">
      <Header />
      {/*------ if path=/  ------*/}
      {/* <Body /> */}
      {/*----- if path=/about ------*/}
      {/* <About /> */}
      {/* -----if path=/contact ------*/}
      {/* <Contact />*/}
      <Outlet />
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      } /*Here we are creating contact and about as children of the applayout*/,
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/Restaurants/:resId",
        element: <RestaurantMenu />,

        /*Here 
        resId is dynamic*/
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<Applayout />);
root.render(<RouterProvider router={appRouter} />);
