import React, { useState } from 'react';
import { image } from '../../data';
import { images } from '../../data';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CloseIcon from '@mui/icons-material/Close';

const ImageGallery = ({ setShowGellery }) => {
  const [currImg, setCurrImg] = useState(0);

  return (
    <div className=' w-full hidden md:block'>
      <div className='fixed left-1/3 z-20'>
        <CloseIcon
          onClick={() => setShowGellery(false)}
          className='text-White mb-3 ml-80 hover:text-Orange'
        />
        <div>
          <img
            className=' rounded-none md:rounded-2xl relative'
            src={image[currImg].img}
            alt='img'
            width={350}
          />

          <button
            onClick={() => currImg > 0 && setCurrImg(currImg - 1)}
            className=' absolute top-52 -left-5 p-1 bg-LightGrayishBlue rounded-full hover:text-Orange'
          >
            <ChevronLeftIcon fontSize='large' />
          </button>
          <button
            onClick={() =>
              currImg < image.length - 1 && setCurrImg(currImg + 1)
            }
            className=' absolute top-52 -right-5 p-1 bg-LightGrayishBlue rounded-full hover:text-Orange'
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
                  width={70}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        onClick={() => setShowGellery(false)}
        className='fixed top-0 z-10 bg-Black w-full h-full opacity-80'
      />
    </div>
  );
};

export default ImageGallery;
