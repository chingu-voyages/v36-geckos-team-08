import { Field, Form, Formik } from "formik";
import React from "react";

export const CheckoutForm = () => {
  return (
    <div className="flex">
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          address: "",
          stateProvince: "",
          city: "",
          zipPostalCode: "",
          phone: "",
          sameBillingAddress: false,
        }}
        onSubmit={(values) => {
          console.log({ values });
        }}
      >
        <Form>
          <div className="checkout-form">
            <label htmlFor="firstName" className="label">
              First Name
            </label>
            <Field
              id="firstName"
              name="firstName"
              placeholder="John"
              className="input"
            />
          </div>
          <div className="checkout-form">
            <label htmlFor="lastName" className="label">
              Last Name
            </label>
            <Field
              id="lastName"
              name="lastName"
              placeholder="Doe"
              className="input"
            />
          </div>
          <div className="checkout-form">
            <label htmlFor="email" className="label">
              Email
            </label>
            <Field
              id="email"
              name="email"
              placeholder="john@acme.com"
              type="email"
              className="input"
            />
          </div>
          <div className="checkout-form">
            <label htmlFor="address" className="label">
              Street address
            </label>
            <Field
              id="address"
              name="address"
              placeholder="2504 S Wales"
              className="input"
            />
          </div>

          <div className="flex">
            <div className="checkout-form">
              <label htmlFor="stateProvince" className="label">
                State/Province
              </label>
              <Field
                id="stateProvince"
                name="stateProvince"
                placeholder="California"
                className="input"
              />
            </div>
            <div className="checkout-form">
              <label htmlFor="city" className="label">
                city
              </label>
              <Field
                id="city"
                name="city"
                placeholder="Los Angeles"
                className="input"
              />
            </div>
          </div>
          <div className="flex">
            <div className="checkout-form">
              <label htmlFor="zipPostalCode" className="label">
                Zip/PostalCode
              </label>
              <Field
                id="zipPostalCode"
                name="zipPostalCode"
                placeholder="2504 S Wales"
                className="input"
              />
            </div>
            <div className="checkout-form">
              <label htmlFor="phone" className="label">
                Phone
              </label>
              <Field
                id="phone"
                name="phone"
                placeholder="123456789"
                className="input"
              />
            </div>
          </div>
          <div>
            <Field
              id="sameBillingAddress"
              name="sameBillingAddress"
              type="checkbox"
            />
            <label htmlFor="sameBillingAddress">
              My billing and shipping address are the same
            </label>
          </div>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};
