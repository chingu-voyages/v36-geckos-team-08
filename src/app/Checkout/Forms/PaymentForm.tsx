import React from 'react';
import { TextField } from 'components';

interface Props {
  formFields: {
    [key: string]: {
      [key: string]: string;
    };
  };
}

export const PaymentForm = (props: Props) => {
  const { nameOnCard, cardNumber, expiryDate, cvv } = props.formFields;

  return (
    <div>
      <TextField
        label={nameOnCard.label}
        name={nameOnCard.name}
        placeholder="John Doe"
      />
      <TextField
        label={cardNumber.label}
        name={cardNumber.name}
        placeholder="4242 4242 4242 4242"
      />
      <TextField
        label={expiryDate.label}
        name={expiryDate.name}
        placeholder="YY/MM"
      />
      <TextField
        label={cvv.label}
        name={cvv.name}
        placeholder="&bull;&bull;&bull;"
      />
    </div>
  );
};
