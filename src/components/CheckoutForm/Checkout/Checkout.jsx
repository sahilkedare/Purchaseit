import React, { useState, useEffect } from "react";
import {
    Paper,
    Stepper,
    Step,
    StepLabel,
    Typography,
    // CssBaseline,
//   CircularProgress,
//   Divider,
//   Button,
} from "@material-ui/core";
// import { Link, useHistory } from "react-router-dom";

// import { commerce } from "../../../lib/commerce";
import AddressForm from "../AddressForm";
import PaymentForm from "../PaymentForm";
import useStyles from "./styles";


const steps = ['Shipping address', 'Payment details'];

const Checkout = () => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(2);

    const Form = () => activeStep === 0 ? <AddressForm /> : <PaymentForm />;

    const Confirmation = () => (
        <div>Confirmation</div>
    )
  return (
    <>
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper className={classes.stepper}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
            </Stepper>
               {activeStep === steps.length ? <Confirmation/> : <Form/>}   
        </Paper>
      </main>
    </>
  );
};

export default Checkout;
