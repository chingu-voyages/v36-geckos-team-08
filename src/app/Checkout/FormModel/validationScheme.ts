import * as Yup from 'yup';
import { checkoutFormModel } from './checkoutFormModel';
const { contact, shipping, payment } = checkoutFormModel.formFields;

const visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const validationScheme = Yup.object().shape({
  // Contact Information Validation
  [contact.firstName.name]: Yup.string().required(
    `${contact.firstName.requiredErrorMsg}`
  ),
  [contact.lastName.name]: Yup.string().required(
    `${contact.lastName.requiredErrorMsg}`
  ),
  [contact.address.name]: Yup.string().required(
    `${contact.address.requiredErrorMsg}`
  ),
  [contact.email.name]: Yup.string()
    .min(3, 'must be at least 3 characters long')
    .email('Must be a valid email')
    .max(255)
    .required(`${contact.email.requiredErrorMsg}`),
  [contact.state.name]: Yup.string()
    .nullable()
    .required(`${contact.state.requiredErrorMsg}`),
  [contact.zipcode.name]: Yup.string()
    .required(`${contact.zipcode.requiredErrorMsg}`)
    .test(
      'len',
      `${contact.zipcode.invalidErrorMsg}`,
      (val: any) => val && val.length === 5
    ),
  [contact.city.name]: Yup.string()
    .nullable()
    .required(`${contact.city.requiredErrorMsg}`),
  [contact.phone.name]: Yup.string()
    .required(`${contact.phone.requiredErrorMsg}`)
    .matches(phoneRegExp, 'Phone number is not valid'),
  // Shipping Address
  [shipping.firstName.name]: Yup.string().required(
    `${shipping.firstName.requiredErrorMsg}`
  ),
  [shipping.lastName.name]: Yup.string().required(
    `${shipping.lastName.requiredErrorMsg}`
  ),
  [shipping.address.name]: Yup.string().required(
    `${shipping.address.requiredErrorMsg}`
  ),
  [shipping.email.name]: Yup.string()
    .min(3, 'must be at least 3 characters long')
    .email('Must be a valid email')
    .max(255)
    .required(`${shipping.email.requiredErrorMsg}`),
  [shipping.state.name]: Yup.string()
    .nullable()
    .required(`${shipping.state.requiredErrorMsg}`),
  [shipping.zipcode.name]: Yup.string()
    .required(`${shipping.zipcode.requiredErrorMsg}`)
    .test(
      'len',
      `${shipping.zipcode.invalidErrorMsg}`,
      (val: any) => val && val.length === 5
    ),
  [shipping.city.name]: Yup.string()
    .nullable()
    .required(`${shipping.city.requiredErrorMsg}`),
  [shipping.phone.name]: Yup.string()
    .required(`${shipping.phone.requiredErrorMsg}`)
    .matches(phoneRegExp, 'Phone number is not valid'),
  // Payment
  [payment.nameOnCard.name]: Yup.string().required(
    `${payment.nameOnCard.requiredErrorMsg}`
  ),
  [payment.cardNumber.name]: Yup.string()
    .required(`${payment.cardNumber.requiredErrorMsg}`)
    .matches(visaRegEx, payment.cardNumber.invalidErrorMsg),
  [payment.expiryDate.name]: Yup.string()
    .nullable()
    .required(`${payment.expiryDate.requiredErrorMsg}`),
  [payment.cvv.name]: Yup.string()
    .required(`${payment.cvv.requiredErrorMsg}`)
    .test(
      'len',
      `${payment.cvv.invalidErrorMsg}`,
      (val: any) => val && val.length === 3
    )
});
