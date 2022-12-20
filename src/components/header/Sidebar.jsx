import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import NavText from '../../UI/NavText';

const Sidebar = ({ setShowToggle }) => {
  return (
    <>
      <aside className='animation fixed z-20 top-0 bg-White h-full w-2/3 p-5'>
        <CloseIcon
          onClick={() => setShowToggle(false)}
          className=' hover:text-Orange'
        />
        <div className='flex flex-col space-y-5 mt-10'>
          <NavText>Collections</NavText>
          <NavText>Men</NavText>
          <NavText>Women</NavText>
          <NavText>About</NavText>
          <NavText>Contact</NavText>
        </div>
      </aside>
      <div
        onClick={() => setShowToggle(false)}
        className='fixed top-0 z-10 bg-Black w-full h-full opacity-80'
      />
    </>
  );
};

export default Sidebar;
