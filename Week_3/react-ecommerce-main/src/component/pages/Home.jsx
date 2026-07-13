import React, { useEffect, useState } from "react";
import Header from "../common/Header";
import ProductCard from "../common/ProductCard";
import { GetproductList } from "../../api/product";

function Home() {
  const [products, setProducts] = useState();

  const productList = async () => {
    try {
      const data = await GetproductList();
      if (data) {
        setProducts(data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    productList();
  }, []);

  console.log(products);

  const productdata = {
    name: "Iphone 16 pro max",
    desc: "This is the best smart phone",
    price: 1050,
    img: "https://media.gadgetbytenepal.com/2025/09/iPhone-17-Pro-Max-Cosmic-Orange.jpg",
  };

  return (
    <>
      <div className="mt-20">
        <div>
          <ProductCard data={productdata} />
          <p>hello world</p>
        </div>
      </div>
    </>
  );
}

export default Home;