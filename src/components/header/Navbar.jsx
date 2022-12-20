import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import avatar from '../../assets/images/avatar.png';
import Typography from '../../UI/Typography';
import Button from '../../UI/Button';
import Sidebar from './Sidebar';
import Cart from '../cart/Cart';

const Navbar = () => {
  const [showToggle, setShowToggle] = useState(false);
  const [showCart, setShowCart] = useState(false);

  return (
    <>
      <nav>
        <div className=' w-4/5 mx-auto flex justify-between border-b-2'>
          <div className=' flex justify-between space-x-10'>
            <div className=' py-8 flex space-x-4'>
              <span className=' block md:hidden'>
                <MenuIcon
                  className=' hover:text-Orange'
                  fontSize='large'
                  onClick={() => setShowToggle(true)}
                />
              </span>
              <h1 className=' text-3xl'>SNEAKERS</h1>
            </div>
            <div className=' hidden justify-between space-x-10 md:flex'>
              <Typography>Collections</Typography>
              <Typography>Men</Typography>
              <Typography>Women</Typography>
              <Typography>About</Typography>
              <Typography>Contact</Typography>
            </div>
          </div>
          <div className=' flex space-x-5 py-6 md:space-x-10'>
            <Button setShowCart={setShowCart} showCart={showCart} />
            <div className=' -mt-1'>
              <img
                className=' mt-0 p-1 hover:bg-Orange hover:transition delay-100 duration-700 ease-in-out ... rounded-full md:mt-1'
                src={avatar}
                alt='img'
                width={50}
              />
            </div>
          </div>
        </div>
      </nav>
      {showCart && <Cart />}
      {showToggle && <Sidebar setShowToggle={setShowToggle} />}
    </>
  );
};

export default Navbar;
