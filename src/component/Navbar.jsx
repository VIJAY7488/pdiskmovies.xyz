import React, { useEffect, useState } from 'react';

function Navbar() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = (
    <div className='lg:flex justify-center'>
      <li className='hover:text-yellow-400'>
        <a href='/'>Home</a>
      </li>
      <li className='hover:text-yellow-400'>
        <a href='/bollywood'>Bollywood</a>
      </li>
      <li className='hover:text-yellow-400'>
        <a href='/southmovies'>South Movies</a>
      </li>
      <li className='hover:text-yellow-400'>
        <a href='/hollywood'>Hollywood</a>
      </li>
      <li className='hover:text-yellow-400'>
        <a href='/webseries'>Web Series</a>
      </li>
      <li className='hover:text-yellow-400'>
        <a href='/webseries'>Ullu Series</a>
      </li>
    </div>
  );

  return (
    <header>
      {/* Sticky Navbar */}
      <nav className={`bg-slate-800 justify-evenly navbar ${sticky ? 'sticky-navbar duration-300 transition-all ease-in-out' : ''}`}>
        <div>
          <a className="btn btn-ghost text-xl text-white">pdiskmovies.xyz</a>
        </div>
        <div className="navbar-end">
          <label className="flex px-3 py-2 border rounded-2xl items-center gap-2 bg-white">
            <input type="text" className="outline-none text-black flex-grow w-full sm:w-1/2" placeholder="Search" />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-5 h-5 opacity-70">
              <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
            </svg>
          </label>
        </div>
      </nav>

      {/* Dropdown Navbar */}
      <nav className={`bg-blue-500 navbar ${sticky ? 'sticky-navbar duration-300 transition-all ease-in-out' : ''}`}>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navItems}
          </ul>
        </div>
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal text-white text-2xl">
            {navItems}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
