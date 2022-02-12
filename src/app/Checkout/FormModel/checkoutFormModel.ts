const contact = {
  firstName: {
    name: 'contact-firstName',
    label: 'First Name*',
    requiredErrorMsg: 'First name is required'
  },
  lastName: {
    name: 'contact-lastName',
    label: 'Last Name*',
    requiredErrorMsg: 'Last name is required'
  },
  email: {
    name: 'contact-email',
    label: 'Email*',
    requiredErrorMsg: 'Email is required'
  },
  address: {
    name: 'contact-address',
    label: 'Address*',
    requiredErrorMsg: 'Address is required'
  },
  city: {
    name: 'contact-City',
    label: 'City*',
    requiredErrorMsg: 'City is required'
  },
  state: {
    name: 'contact-state',
    label: 'State*',
    requiredErrorMsg: 'State is required'
  },
  zipcode: {
    name: 'contact-Zip/PostalCode',
    label: 'Zip/PostalCode*',
    requiredErrorMsg: 'Zip/PostalCode is required',
    invalidErrorMsg: 'Zip/PostalCode is not valid (e.g. 70000)'
  },
  phone: {
    name: 'contact-Phone',
    label: 'Phone',
    requiredErrorMsg: 'Phone number is required'
  },
  useAddressForShipping: {
    name: 'contact-useAddressForPaymentDetails',
    label: 'Use this address for payment details'
  }
};

const shipping = {
  firstName: {
    name: 'shipping-firstName',
    label: 'First Name*',
    requiredErrorMsg: 'First name is required'
  },
  lastName: {
    name: 'shipping-lastName',
    label: 'Last Name*',
    requiredErrorMsg: 'Last name is required'
  },
  email: {
    name: 'shipping-email',
    label: 'email*',
    requiredErrorMsg: 'Email is required'
  },
  address: {
    name: 'shipping-address',
    label: 'Address*',
    requiredErrorMsg: 'Address is required'
  },
  city: {
    name: 'shipping-City*',
    label: 'City*',
    requiredErrorMsg: 'City is required'
  },
  state: {
    name: 'shipping-state',
    label: 'State*',
    requiredErrorMsg: 'State is required'
  },
  zipcode: {
    name: 'shipping-Zip/PostalCode',
    label: 'Zip/PostalCode*',
    requiredErrorMsg: 'Zip/PostalCode is required',
    invalidErrorMsg: 'Zip/PostalCode is not valid (e.g. 70000)'
  },
  phone: {
    name: 'shipping-Phone',
    label: 'Phone',
    requiredErrorMsg: 'Phone number is required'
  }
};

const payment = {
  nameOnCard: {
    name: 'nameOnCard',
    label: 'Name on card*',
    requiredErrorMsg: 'Name on card is required'
  },
  cardNumber: {
    name: 'cardNumber',
    label: 'Card Number*',
    requiredErrorMsg: 'Card number is required',
    invalidErrorMsg: 'Card number is not valid (e.g. 4111111111111)'
  },
  expiryDate: {
    name: 'expiryDate',
    label: 'Expiry Date*',
    requiredErrorMsg: 'Expiry date is required',
    invalidErrorMsg: 'Expiry date is not valid'
  },
  cvv: {
    name: 'cvv',
    label: 'CVV*',
    requiredErrorMsg: 'CVV is required',
    invalidErrorMsg: 'CVV is invalid (e.g. 357)'
  }
};
export const checkoutFormModel = {
  formId: 'checkoutForm',
  formFields: {
    contact,
    shipping,
    payment
  }
};
