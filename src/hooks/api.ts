import React, { useEffect, useState } from "react";
import axios from "axios";
export default function Api() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = () => {
      try {
        axios
          .get("../../public/data/tot.json")
          .then((response) => {
            console.log(response.data.inputs);
            setData(response.data.inputs);
          })
          .catch((err) => console.log(err));
      } catch {
        console.error("Error fetching data");
      }
    };

    fetchData();
  }, []);
  return {
    data
  };
}
