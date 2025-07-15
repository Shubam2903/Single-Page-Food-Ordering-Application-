import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();
  // console.log(err);
  return (
    <div>
      <h1> Opps...</h1>
      <h2> Something went wrong</h2>
      <h3>
        {err.status}:{err.statusText}
      </h3>
      {/* this value is taken from the console output  i.e object which we see when we get error.
       */}
    </div>
  );
};

export default Error;
