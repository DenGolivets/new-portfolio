import React from 'react';
import useScrollFade from '@/hooks/useScrollPos';
import Menu from '../menu/elements/Menu';

const Navbar = () => {

  const isAtTop = useScrollFade();

  return (
    <div className={`mobile:hidden sticky -mt-14 top-0 z-50 ${isAtTop?'opacity-100':'opacity-0 hover:opacity-100 transition-opacity duration-500'}`} >
      <div className={`flex mobile:hidden desktop:justify-end mobile:justify-end bg-gradient-to-r from-transparent to-black text-white text-2xl h-14 items-center`}>
        <div className="flex justify-evenly w-1/2 mobile:hidden uppercase">
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;