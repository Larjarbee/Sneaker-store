import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const ProductItem = (props) => {
  const [quantity, setQuantity] = useState(1);
  const increment = () => setQuantity(quantity + 1);
  let decrement = () => setQuantity(quantity - 1);
  if (quantity <= 1) {
    decrement = () => setQuantity(1);
  }

  const dispatch = useDispatch();

  const { company, title, description, price, img, id } = props;

  const addToCartHandler = () => {
    dispatch(cartActions.addItemToCart({ id, title, price, img, quantity }));
  };

  return (
    <section className=' w-4/5 space-y-5 mt-10 mx-auto md:w-1/2'>
      <h2 className=' text-Orange font-bold'>{company}</h2>
      <h1 className=' text-4xl'>{title}</h1>
      <h5 className='text-DarkGrayishBlue'>{description}</h5>

      <div className='flex flex-row md:flex-col'>
        <div className='flex align-middle'>
          <h1 className=' text-2xl'>${price.toFixed(2)}</h1>
          <h5 className=' bg-PaleOrange text-Orange p-1 px-2 ml-5 rounded-lg'>
            50%
          </h5>
        </div>
        <h2 className=' line-through text-GrayishBlue p-1 ml-24 md:ml-0'>
          $250.00
        </h2>
      </div>

      <div className='flex flex-col space-x-0 md:space-x-2 md:flex-row'>
        <div className='flex justify-between w-full py-3 rounded-lg px-4 mb-5 bg-LightGrayishBlue md:w-1/2'>
          <button className='hover:text-Orange' onClick={decrement}>
            <RemoveIcon />
          </button>
          <h2 className=' my-auto'>{quantity}</h2>
          <button className='hover:text-Orange ' onClick={increment}>
            <AddIcon />
          </button>
        </div>
        <div className='w-full md:w-2/3'>
          <button
            onClick={addToCartHandler}
            className='flex justify-center align-middle w-full bg-Orange text-White py-3 px-1 rounded-lg hover:opacity-60'
          >
            <ShoppingCartOutlinedIcon />
            <h2 className=' ml-3'>Add to cart</h2>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductItem;
