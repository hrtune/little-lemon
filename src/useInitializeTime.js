import { useEffect, useState } from "react";
import { fetchAPI, dateAPI } from "./mockAPI";

const useInitializeTime = () => {
  const [initializeTime, setInitializeTime] = useState(() => () => []);
  useEffect(() => {
    fetchAPI(dateAPI()).then((result) => {
      setInitializeTime(() => () => result);
    });
  }, []);

  return initializeTime;
};

export default useInitializeTime;
