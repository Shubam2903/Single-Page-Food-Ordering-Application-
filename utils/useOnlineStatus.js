import { useEffect, useState } from "react";

const UseOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  // check if online or offline. Also note this window.aaddEventListner functionality is given by windows object.//

  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });

    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);

  //boolean value
  return onlineStatus;
};

export default UseOnlineStatus;
