import React, { useState } from 'react';
import ImageGallery from './ImageGallery';
import ProductImage from './ProductImage';
import ProductItem from './ProductItem';
import img from '../../assets/images/image-product-1.jpg';

const product = {
  id: 1,
  company: 'SNEAKER COMPANY',
  title: 'Fall Limited Edition Sneakers',
  description:
    'These low-profile sneakers are your perfect casual wear companion.Featuring a durable rubber outer sole, they will withstand everythingthe weather can offer.',
  price: 125,
  img: img,
};

const Product = () => {
  const [showGallery, setShowGellery] = useState(false);

  return (
    <>
      {showGallery && <ImageGallery setShowGellery={setShowGellery} />}
      <section className=' w-full mx-auto my-0 mb-20 md:my-20 md:w-3/4'>
        <div className=' flex justify-around flex-col md:space-x-20 md:flex-row'>
          <ProductImage setShowGellery={setShowGellery} />
          <ProductItem
            key={product.id}
            id={product.id}
            company={product.company}
            title={product.title}
            price={product.price}
            description={product.description}
            img={product.img}
          />
        </div>
      </section>
    </>
  );
};

export default Product;
