import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { FaAppleAlt } from 'react-icons/fa';
import { SlArrowRight } from 'react-icons/sl';

const Breadcrumb = (props) => {
  return (
    <div className='bg-apple-white'>
      <div className="mx-auto max-w-screen-lg px-5 py-3">
        <Breadcrumbs separator={<SlArrowRight className='fill-[#d6d6d6]' />} aria-label="breadcrumb">
          <Link to="/"><FaAppleAlt className='fill-[#626266] hover:fill-[#1D1D1F]' /></Link>
          {!!props.breadcrumb &&
            props.breadcrumb.map((item, i) => (
              <span key={i} className="text-sm text-gray-500">
                {item}
              </span>
            ))}
        </Breadcrumbs>
      </div>
    </div>
  );
};

export default Breadcrumb;
