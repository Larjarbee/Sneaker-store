import React from 'react';
import img from '../../assets/images/image-product-1.jpg';
import deletes from '../../assets/images/deletes.svg';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart';

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { title, quantity, total, price, id } = props;

  const deleteFromCartHandler = () => {
    dispatch(cartActions.deleteItemFromCart(id));
  };

  return (
    <>
      <div className='flex space-x-2'>
        <div>
          <img className=' rounded-md' src={img} alt='img' width={50} />
        </div>
        <div>
          <h5 className='text-GrayishBlue'>{title}</h5>
          <div className='flex space-x-2 mb-5'>
            <h5 className='text-GrayishBlue'>${price.toFixed(2)}</h5>
            <h5 className='text-GrayishBlue'>x</h5>
            <h5 className='text-GrayishBlue'>{quantity}</h5>
            <h2>${total.toFixed(2)}</h2>
          </div>
        </div>
        <div>
          <img
            className='mt-7'
            src={deletes}
            alt='icon'
            onClick={deleteFromCartHandler}
          />
        </div>
      </div>
      <button className='flex justify-center align-middle w-full bg-Orange text-White py-3 px-1 my-5 rounded-lg hover:opacity-60'>
        <h2>Checkout</h2>
      </button>
    </>
  );
};

export default CartItem;
