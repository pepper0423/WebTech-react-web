import React from 'react';

const VariantSelection = (props) => {
  return (
    <div
      id={props.id}
      className={`py-5 relative ${props.hidden ? 'hidden' : ''}`}
    >
      <div
        className={`${
          props.allowSelect ? 'hidden' : ''
        } absolute bg-gray-800 bg-opacity-25 h-[80%] mt-10 w-full rounded-xl`}
      ></div>
      {props.children}
    </div>
  );
};

export default VariantSelection;
