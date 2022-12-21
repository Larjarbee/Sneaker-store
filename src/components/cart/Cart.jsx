import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const Cart = () => {
  const cartItem = useSelector((state) => state.cart.items);

  return (
    <section className='animations absolute bg-White p-3 px-5 shadow-lg rounded-lg z-20 w-11/12 h-68 mt-5 right-4 md:right-10 md:w-1/4'>
      <h2 className='py-5'>Cart</h2>
      <hr className='pb-5' />
      {cartItem.length > 0 ? (
        cartItem.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            quantity={item.quantity}
            img={item.img}
          />
        ))
      ) : (
        <h1 className='text-GrayishBlue p-16 text-center'>
          Your cart is empty.
        </h1>
      )}
    </section>
  );
};

export default Cart;
