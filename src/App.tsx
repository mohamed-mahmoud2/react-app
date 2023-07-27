import { useState, useEffect } from "react";
import "./App.css";
import api from "./Api";
import Cards from "./components/Cards";
function App() {
  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    const fetchData = () => {
      try {
        api
          .get("")
          .then((response) => {
            setProducts(response.data.data);
          })
          .catch((err) => console.log(err));
      } catch {
        console.error("Error fetching data");
      }
    };

    fetchData();
  }, []);
  if (products.length === 0) {
  }

  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          marginTop: 50,
        }}
      >
        {products.length === 0 ? (
          <p style={{ marginTop: 50, textAlign: "center", color: "red" }}>
            We are sorry , try agin later.
          </p>
        ) : (
          products.map((data, index) => {
            return (
              <Cards
                key={index}
                title={data.name}
                price={data.price}
                image_url={data.imageUrl}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

export default App;

export type Products = {
  name: string;
  price: number;
  imageUrl: any;
};
