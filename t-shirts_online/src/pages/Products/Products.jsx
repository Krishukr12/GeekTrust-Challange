import React, { useEffect, useState } from "react";
import classes from "../Products/Products.module.css";
import { ProductCard } from "../../components/Product Card/ProductCard";

export const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    await fetch(
      "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json",
      {
        method: "GET", // or 'PUT'
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div className={classes.main_container}>
      <div className={classes.sortFilter_container}>
        <section>
          <label>Color</label>
          <br></br>
          <input type="checkbox"></input> Red
          <br></br>
          <input type="checkbox"></input> Blue
          <br></br>
          <input type="checkbox"></input> Green<br></br>
        </section>
        <section>
          <label>Gender</label>
          <br></br>
          <input type="checkbox"></input> Men
          <br></br>
          <input type="checkbox"></input> Women <br></br>
        </section>
        <section>
          <label>Price</label>
          <br></br>
          <input type="checkbox"></input> 0-250₹
          <br></br>
          <input type="checkbox"></input> 251-450₹
          <br></br>
          <input type="checkbox"></input> 450₹<br></br>
        </section>
        <section>
          <label>Type</label>
          <br></br>
          <input type="checkbox"></input> Polo
          <br></br>
          <input type="checkbox"></input> Hoodie
          <br></br>
          <input type="checkbox"></input> Basic<br></br>
        </section>
      </div>
      <div className={classes.products_container}>
        {products.length
          ? products.map((item) => <ProductCard data={item} />)
          : null}
      </div>
    </div>
  );
};
