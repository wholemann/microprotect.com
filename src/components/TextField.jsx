import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import slugify from 'slugify';

import { setApplicationField } from '../appSlice';

export default function TextField({
  name, label, type, required = false,
}) {
  const dispatch = useDispatch();

  const { value } = useSelector((state) => ({
    value: state.applicationForm[name],
  }));

  const handleChange = (event) => {
    dispatch(setApplicationField({
      key: name,
      value: event.target.value,
    }));
  };

  const id = slugify(`input-${name}`, { lower: true });

  return (
    <div>
      <label htmlFor={id}>
        {label}
        {required ? '*' : ''}
      </label>
      <input
        type={type}
        id={id}
        required={required}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
