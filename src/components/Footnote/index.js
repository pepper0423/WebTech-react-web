import React from 'react';

const Footnote = (props) => {
  return (
    <div className='bg-[#1A1A1A]'>
      <div className="mx-auto max-w-screen-lg px-5 pt-5">
        {props.children}
        <hr className="mt-3"/>
      </div>
    </div>
  );
};

export default Footnote;
