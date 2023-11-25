import { useEffect, React, useState } from "react";
import ProductCard from "./ProductCard";

const ProductPage = () => {
  const [Data, setData] = useState([]);
  async function FetchData() {
    const url = "https://fakestoreapi.com/products";
    const option= {method : 'GET'}
    try {
      const response = await fetch(url,option);
     const result = await response.json()
      setData(result);
     
    } catch (error) {
      console.error(error);
    }
  }

  useEffect( () => {
    FetchData()
  
  }, []);

  return (
    <div className="flex flex-wrap justify-center ">
      {Data.map((Data, key) => {
            console.log(Data);
            return <ProductCard data={Data} key={key + 1} />;
          })}
      {/* <ProductCard /> */}
    </div>
  );
};

export default ProductPage;
