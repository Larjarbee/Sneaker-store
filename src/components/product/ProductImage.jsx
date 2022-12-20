import React, { useState } from 'react';
import { image } from '../../data';
import { images } from '../../data';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const ProductImage = ({ setShowGellery }) => {
  const [currImg, setCurrImg] = useState(0);

  return (
    <section>
      <div>
        <img
          onClick={() => setShowGellery(true)}
          className=' rounded-none md:rounded-2xl relative'
          src={image[currImg].img}
          alt='img'
          width={500}
        />

        <button
          onClick={() => currImg > 0 && setCurrImg(currImg - 1)}
          className=' absolute top-2/4 left-5 p-2 bg-LightGrayishBlue rounded-full hover:text-Orange block md:hidden'
        >
          <ChevronLeftIcon fontSize='large' />
        </button>
        <button
          onClick={() => currImg < image.length - 1 && setCurrImg(currImg + 1)}
          className=' absolute top-2/4 right-5 p-2 bg-LightGrayishBlue rounded-full hover:text-Orange block md:hidden'
        >
          <ChevronRightIcon fontSize='large' />
        </button>
      </div>
      <div className=' mt-5 hidden md:block'>
        <ul className=' flex'>
          {images.map((image) => (
            <li
              className={
                image.value === currImg
                  ? ' bg-Orange p-1 mx-1 rounded-2xl opacity-70'
                  : ' p-1 mx-1'
              }
              key={image.id}
              onClick={() => setCurrImg(image.value)}
            >
              <img
                className=' rounded-2xl hover:opacity-70'
                src={image.img}
                alt='img'
                width={100}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProductImage;
