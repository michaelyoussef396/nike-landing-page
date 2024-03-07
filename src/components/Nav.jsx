import { useState } from "react";
import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

const Nav = () => {

  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    setOpenNavigation(!openNavigation);
    if (!openNavigation) {
      disablePageScroll();
    } else {
      enablePageScroll();
    }
  };

  const handleClick = () => {
    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div className="padding-x py-6 fixed  top-0 left-0 w-full z-50 border border-b border-primary lg:bg-primary/80 lg:backdrop-blur-sm">
      <nav className={`  flex justify-between items-center max-container`}>
        <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
          <a href='/' className="block xl:mr-8">
            <img
              src={headerLogo}
              alt='logo'
              width={129}
              height={29}
              className='m-0 w-[129px] h-[29px]'
            />
          </a>
        </div>
        <div className={`relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row`}>
          <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className='font-montserrat leading-normal text-lg text-slate-gray block relative hover:text-coral-red  '
                  onClick={handleClick}
                  >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          
        </div>

        <div className={`fixed inset-0 bg-black bg-opacity-75 z-40 flex justify-center items-center transition-opacity duration-300 ${openNavigation ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <ul className="text-white">
            {navLinks.map((item) => (
              <li key={item.label} className="mb-8">
                <a
                  href={item.href}
                  className='text-2xl uppercase'
                  onClick={handleClick}
                >
                  {item.label}
                </a>
              </li>

              
            ))}

            <li>
              <a className="hover:text-coral-red text-2xl uppercase" href='/' onClick={handleClick}>Sign in</a>
            </li>
            <br />
            <li>
              <a className="hover:text-coral-red text-2xl uppercase" href='/' onClick={handleClick}>Explore now</a>
            </li>
          </ul>

          
        </div>

        <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24 relative'>
          <a className="hover:text-coral-red" href='/'>Sign in</a>
          <span>/</span>
          <a className="hover:text-coral-red" href='/'>Explore now</a>
        </div>
        
        <div className='hidden max-lg:block ' onClick={toggleNavigation}>
            <img src={hamburger} alt='hamburger icon' width={25} height={25} />
        </div>
      </nav>
    </div>
  );
};

export default Nav;
