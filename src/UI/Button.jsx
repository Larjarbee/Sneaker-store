import React from 'react';
import { useSelector } from 'react-redux';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Button = ({ setShowCart, showCart }) => {
  const cartItem = useSelector((state) => state.cart.items);
  const numOfItems = cartItem.reduce((curNumber, item) => {
    return curNumber + item.quantity;
  }, 0);

  return (
    <button>
      <div className=' relative '>
        <ShoppingCartOutlinedIcon onClick={() => setShowCart(!showCart)} />
        {cartItem.length > 0 && (
          <span className=' px-2 rounded-full bg-Orange text-sm text-White absolute -top-3 -right-2'>
            {numOfItems}
          </span>
        )}
      </div>
    </button>
  );
};

export default Button;
