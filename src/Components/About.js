import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h1>This is Shubham Suryawanshi</h1>
      <User name={"Shubham (function)"} location={"Nagpur"} />
      <UserClass name={"Shubham (class)"} location={"India"} />
    </div>
  );
};

export default About;
