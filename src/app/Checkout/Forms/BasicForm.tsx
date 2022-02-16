import React from 'react';
import { TextField } from 'components';

interface MappedStrings {
  [key: string]: string;
}

interface IFormFields {
  [key: string]: MappedStrings;
}

interface Props {
  isContactForm?: boolean;
  isShippingForm?: boolean;
  formFields: IFormFields;
}

export const BasicForm = (props: Props) => {
  const { firstName, lastName, email, address, state, city, zipcode, phone } =
    props.formFields;
  return (
    <>
      <TextField
        id={firstName.name}
        name={firstName.name}
        placeholder="John"
        label={firstName.label}
      />
      <TextField
        id={lastName.name}
        name={lastName.name}
        placeholder="Doe"
        label={lastName.label}
      />
      <TextField
        id={email.name}
        name={email.name}
        placeholder="john@acme.com"
        label={email.label}
      />
      <TextField
        id={address.name}
        name={address.name}
        placeholder="2504 S Wales"
        label={address.label}
      />
      <div className="flex justify-between">
        <TextField
          id={state.name}
          name={state.name}
          placeholder="California"
          label={state.label}
        />
        <TextField
          id={city.name}
          name={city.name}
          placeholder="Los Angeles"
          label={city.label}
        />
      </div>
      <div className="flex justify-between">
        <TextField
          id={zipcode.name}
          name={zipcode.name}
          placeholder="2504 S Wales"
          label={zipcode.label}
        />
        <TextField
          id={phone.name}
          name={phone.name}
          placeholder="123456789"
          label={phone.label}
        />
      </div>
    </>
  );
};
