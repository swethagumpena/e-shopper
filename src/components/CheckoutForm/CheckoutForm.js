/* eslint-disable react/prop-types */
import { useFormik } from 'formik';
import React, { useState } from 'react';
import axios from 'axios';
import CheckoutSchema from '../../utils/validators/CheckoutSchema';
import styles from './CheckoutForm.module.css';

const CheckoutForm = ({ addNewOrder, onSubmitReset }) => {
  const [checkoutForm, setCheckoutForm] = useState({
    formData: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
    },
    submitted: false,
  });

  const postCartData = async (cartData) => {
    const response = await axios.post('http://localhost:8080/orders', cartData);
    console.log(response);
  };

  const formik = useFormik({
    initialValues: checkoutForm.formData,
    validationSchema: CheckoutSchema,
    onSubmit: (formData) => setCheckoutForm({ formData, submitted: true }),
  });

  return (
    <div className={styles.formContainer}>
      <h1>Checkout</h1>
      {!checkoutForm.submitted ? (
        <>
          <p>Enter your details</p>
          <form className={styles.form} onSubmit={formik.handleSubmit}>
            <label htmlFor="firstName">
              First Name:
              <input
                name="firstName"
                type="text"
                placeholder="Swetha"
                onChange={formik.handleChange}
              />
            </label>
            {formik.errors.firstName && (
            <p>{formik.errors.firstName}</p>
            )}

            <label htmlFor="lastName">
              Last Name:
              <input
                name="lastName"
                type="text"
                placeholder="Gumpena"
                onChange={formik.handleChange}
              />
            </label>
            {formik.errors.lastName && (
            <p>{formik.errors.lastName}</p>
            )}

            <label htmlFor="email">
              Your email:
              <input
                name="email"
                type="email"
                placeholder="swetha_gumpena@example.com"
                onChange={formik.handleChange}
              />
            </label>
            {formik.errors.email && (
            <p>{formik.errors.email}</p>
            )}

            <label htmlFor="phoneNumber">
              Phone Number:
              <input
                name="phoneNumber"
                type="number"
                placeholder="987654321"
                onChange={formik.handleChange}
              />
            </label>
            {formik.errors.phoneNumber && (
            <p>{formik.errors.phoneNumber}</p>
            )}

            <button type="submit" className={styles.submitButton} onClick={() => { postCartData(addNewOrder()); onSubmitReset(); }}>Place order</button>

          </form>
        </>
      ) : (
        <p>{`Thank you for shopping with us ${checkoutForm.formData.firstName}`}</p>
      )}
    </div>
  );
};

export default CheckoutForm;
