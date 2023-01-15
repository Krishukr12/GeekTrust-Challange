import React, { useEffect, useState } from "react";
import classes from "../Products/Products.module.css";
import { ProductCard } from "../../components/Product Card/ProductCard";
import { getProducts } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";
export const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const searchProducts = useSelector((state) => state.searchProducts);
  let data = searchProducts.length > 0 ? searchProducts : products;

  useEffect(() => {
    //GET PRODUCTS FUNCTION
    getProducts(dispatch);
  }, []);

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
        {data.length
          ? data.map((item) => <ProductCard key={item.id} data={item} />)
          : null}
      </div>
    </div>
  );
};
