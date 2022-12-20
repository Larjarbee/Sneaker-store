import React from 'react';

const Typography = (props) => {
  return (
    <h3 className='py-10 cursor-pointer text-DarkGrayishBlue border-b-4 border-White hover:text-VeryDarkBlue hover:border-b-4 hover:border-Orange ... hover:transition delay-75 duration-100 ease-in-out ...'>
      {props.children}
    </h3>
  );
};

export default Typography;
