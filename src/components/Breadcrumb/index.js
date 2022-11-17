import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { FaAppleAlt } from 'react-icons/fa';
import { SlArrowRight } from 'react-icons/sl';

const Breadcrumb = (props) => {
  return (
    <div className='bg-[#1A1A1A]'>
      <div className="mx-auto max-w-screen-lg px-5 py-3">
        <Breadcrumbs separator={<SlArrowRight className='fill-[#bdbdc0]' />} aria-label="breadcrumb">
          <Link to="/"><FaAppleAlt className='fill-[#bdbdc0] hover:fill-[#9c9c9e]' /></Link>
          {!!props.breadcrumb &&
            props.breadcrumb.map((item, i) => (
              <span key={i} className="text-sm text-gray-300">
                {item}
              </span>
            ))}
        </Breadcrumbs>
      </div>
    </div>
  );
};

export default Breadcrumb;
