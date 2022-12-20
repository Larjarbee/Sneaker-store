import React from 'react';

const NavText = (props) => {
  return (
    <h1 className='cursor-pointer text-VeryDarkBlue  hover:text-DarkGrayishBlue '>
      {props.children}
    </h1>
  );
};

export default NavText;
