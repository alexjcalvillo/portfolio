import React from 'react';

const InputField = (props) => {
  return (
    <label>
      {props.label}
      <input
        className="w-full py-2 px-8 rounded my-2"
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.field}
      />
    </label>
  );
};

export default InputField;
