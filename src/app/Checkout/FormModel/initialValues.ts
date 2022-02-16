import { checkoutFormModel } from './checkoutFormModel';
const { contact, shipping, payment } = checkoutFormModel.formFields;

export const initialValues = {
  [contact.firstName.name]: '',
  [contact.lastName.name]: '',
  [contact.email.name]: '',
  [contact.address.name]: '',
  [contact.city.name]: '',
  [contact.state.name]: '',
  [contact.zipcode.name]: '',
  [contact.phone.name]: '',
  [contact.useAddressForShipping.name]: false,
  [shipping.firstName.name]: '',
  [shipping.lastName.name]: '',
  [shipping.email.name]: '',
  [shipping.address.name]: '',
  [shipping.city.name]: '',
  [shipping.state.name]: '',
  [shipping.zipcode.name]: '',
  [shipping.phone.name]: '',
  [payment.nameOnCard.name]: '',
  [payment.cardNumber.name]: '',
  [payment.expiryDate.name]: '',
  [payment.cvv.name]: ''
};
