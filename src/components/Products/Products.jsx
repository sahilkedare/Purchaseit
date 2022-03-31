import React from "react";
import { Grid } from "@material-ui/core";

import Product from "./Product/Product";
import useStyles from './styles'

// const products = [
//   { id: 1, name: "Shoes", description: "Running Shoes", price: "$10", image:"https://media.istockphoto.com/photos/modern-sport-shoes-picture-id623270836?k=20&m=623270836&s=612x612&w=0&h=C0WdoMeoHYugJy8mVgrTl8p1U8DltiZ25AzzjGY05GA=" },
//   { id: 2, name: "Acer", description: "Running Laptop", price: "$5", image:"https://static.acer.com/up/Resource/Acer/Laptops/Swift_3/Image/20200416/Acer-Swift-3_SF314-42_Silver-FP-Backlit_modelpreview.png" },
// ];

const Products = ({products, onAddToCart}) => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar}/>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
