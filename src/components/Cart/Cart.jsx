import React from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";
// import { Link } from "react-router-dom";

import useStyles from "./styles";

// const Cart = (props) => {
// console.log(props.cart.total_unique_items)
//     return (
//       <h1>{props.cart.total_unique_items}</h1>
//     )
// }

const Cart = ({cart}) => {
  // const { line_items } = cart;
  const classes = useStyles();
  const isEmpty = cart.total_unique_items;
  console.log("LOGS" + isEmpty);
  // const pitem= props.cart.line_items
  // console.log("LOGS" + pitem);
  // console.log(cart);
  // alert(JSON.stringify(cart));


  const EmptyCart = () => (
    <Typography variant="subtitle1">you have no items in cart</Typography>
  )

  const FilledCart = () => (
      <>
        <Grid container spacing={3}>
          {cart.line_items.map((item) => (
            <Grid item xs={12} sm={4} key={item.id}>
              <div>{item.name}</div>
            </Grid>
          ))}
        </Grid>
        <div className={classes.cardDetails}>
          <Typography variant="h4">
            Subtotal: {cart.subtotal.formatted_with_symbol}
          </Typography>
          <div>
            <Button
              className={classes.emptyButton}
              size="large"
              type="button"
              variant="contained"
              color="secondary"
            >
              Empty cart
            </Button>
            <Button
              className={classes.checkoutButton}
              size="large"
              type="button"
              variant="contained"
              color="primary"
            >
              Checkout
            </Button>
          </div>
        </div>
      </>
    )

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom>
        Your Shopping Cart
      </Typography>
      {!isEmpty ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
