'use client';
import classNames from 'classnames';
import { useState } from 'react';
import { RiCloseLine, RiMenuLine } from 'react-icons/ri';

export interface NavbarProps {
  activeSection: number | undefined;
}

const Navbar = (props: NavbarProps) => {
  const menu = [
    {
      name: 'Tentang Kami',
      link: '#tentang-kami',
    },
    {
      name: 'Produk',
      link: '#produk',
    },
    {
      name: 'Trivia',
      link: '#trivia',
    },
    {
      name: 'Pemesanan',
      link: '#pemesanan',
    },
  ];

  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className={classNames(`bg-base-100 hidden md:block px-3 shadow-md`)}>
        <div className='container mx-auto py-3 flex justify-between items-center'>
          <h1 className='text-2xl text-primary font-bold'>
            KWT<br></br>Sradha
          </h1>
          <ul className='flex space-x-10 font-medium'>
            {menu.map((item, index) => (
              <li
                key={index}
                className={`font-bold hover:underline ${
                  props.activeSection === index
                    ? 'text-primary-focus'
                    : 'text-secondary'
                }`}>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <nav
        className={`bg-base-100 block md:hidden px-6 md:px-0 collapse shadow-xl ${
          open ? 'collapse-open' : 'collapse-close'
        }`}>
        <div className='container mx-auto py-3 flex justify-between items-center'>
          <h1 className='text-2xl text-primary font-bold'>
            KWT<br></br>Sradha
          </h1>
          <label className={`swap swap-flip text-3xl peer text-primary`}>
            <input type='checkbox' onChange={() => setOpen(!open)} />
            <RiMenuLine className='swap-off' />
            <RiCloseLine className='swap-on' />
          </label>
        </div>
        <div className={`collapse-content font-medium`}>
          <ul className=''>
            {menu.map((item, index) => (
              <li
                key={index}
                className={`py-3 hover:underline ${
                  props.activeSection === index
                    ? 'text-primary-focus'
                    : 'text-secondary'
                }
            }`}>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
