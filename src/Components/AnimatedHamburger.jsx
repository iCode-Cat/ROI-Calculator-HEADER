import React, { useRef } from 'react';

const AnimatedHamburger = ({ setMobActive, mobActive }) => {
  const anim = useRef();
  const animateHandler = () => {
    anim.current.classList.toggle('animate');
    setMobActive(!mobActive);
  };

  return (
    <div onClick={animateHandler} className='menu-wrapper'>
      <div ref={anim} className='hamburger-menu'></div>
    </div>
  );
};

export default AnimatedHamburger;
