import { Field, useField } from 'formik';
import React from 'react';
import { at } from 'lodash';
interface Props {
  label: string;
  id?: string;
  name: string;
  placeholder: string;
  type?: string;
}

export const TextField = (props: Props) => {
  const [field, meta] = useField(props);

  function renderHelperText() {
    const [touched, error] = at(meta, 'touched', 'error');
    if (touched && error) {
      return (
        <p className="text-red-600 -mt-2 mb-2  ml-2 text-xs">{meta.error}</p>
      );
    }
  }
  return (
    <div>
      <div className="checkout-form">
        <label htmlFor={props.id} className="label">
          {props.label}
        </label>
        <Field
          id={props.id}
          placeholder={props.placeholder}
          className="input"
          type={props.type}
          {...field}
        />
      </div>
      {renderHelperText()}
    </div>
  );
};
