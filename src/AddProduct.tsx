import axios from "axios";
import React, { useEffect, useState } from "react";
import Forms from "./components/formik/Forms";
export default function AddProduct() {
  const [values, setValues] = useState({});
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
  const handleChange = (event: any) => {
    setValues((prevValues) => ({
      ...prevValues,
      [event.target.name]: event.target.value,
    }));
  };

  return <div><Forms /></div>;
}
