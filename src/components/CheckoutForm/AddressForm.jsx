import React, { useState, useEffect } from "react";
import {
  Grid,
  Typography,
} from "@material-ui/core";

import { commerce } from '../../lib/commerce'
import { useForm, FormProvider } from "react-hook-form";
import FormInput from "./CustomTextField";

const AddressForm = ({checkoutToken}) => {
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState('');
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState('');
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState('');
  const methods = useForm();

  const fetchShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId);

    console.log(countries);
    setShippingCountries(countries);
  }

  useEffect(() => {
    fetchShippingCountries(checkoutToken.id)
  },[])

  return (
    <>
      <Typography variant="h6" gutterBottom>Shipping address </Typography>
      <FormProvider {...methods}>
        <form onSubmit=''>
          <Grid container spacing={3}>
            <FormInput required name="firstName" label="First name" />
            <FormInput required name="lastName" label="Last name" />
            <FormInput required name="address1" label="Address line 1" />
            <FormInput required name="email" label="Email" />
            <FormInput required name="city" label="City" />
            <FormInput required name="zip" label="Zip / Postal code" />
           
          </Grid>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;
