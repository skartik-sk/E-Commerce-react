import { useEffect, React, useState } from "react";
import ProductCard from "./ProductCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchByURL } from "../../redux/reducers/fetchData";

const ProductPage = () => {
  const Data = useSelector((state) => state.fetch.data);
  const loding = useSelector((state) => state.fetch.loading);
  const error = useSelector((state) => state.fetch.error);
  const dispatch = useDispatch();
  // async function FetchData() {
  //   const url = "https://fakestoreapi.com/products";
  //   const option= {method : 'GET'}
  //   try {
  //     const response = await fetch(url,option);
  //    const result = await response.json()
  //     setData(result);

  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  useEffect(() => {
    dispatch(fetchByURL());
  }, []);

  return (
    <>
      {loding === true ? (
        <div class="flex justify-center  items-center space-x-2 w-full">
          <div aria-label="Loading..." role="status">
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
              xmlns="http://www.w3.org/2000/svg"
              class="animate-spin w-10 h-10 stroke-slate-500"
            >
              <path d="M12 3v3m6.366-.366-2.12 2.12M21 12h-3m.366 6.366-2.12-2.12M12 21v-3m-6.366.366 2.12-2.12M3 12h3m-.366-6.366 2.12 2.12"></path>
            </svg>
          </div>
          <span class="text-4xl font-medium text-slate-500">Loading...</span>
        </div>
      ) : (
        <div className="flex flex-wrap justify-center md:w-[85%] w-full  ">
          {Data.map((Data, key) => {
            console.log(Data);
            return <ProductCard data={Data} key={key + 1} />;
          })}
        </div>
      )}
    </>
  );
};

export default ProductPage;
