import Logo from '../assets/logo.svg';
import cart from '../assets/icon-cart.svg';
import avatar from '../assets/image-avatar.png';
import Menu from '../assets/icon-menu.svg';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Cart from './Cart';
import { NavLink } from 'react-router-dom';
import { IoClose } from 'react-icons/io5';

function Nav() {
  const [menu, setMenu] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const { amount, isChecked } = useSelector((store) => store.cart);
  return (
    <header>
      <nav>
        <div
          className='menu-icon'
          onClick={() => {
            setMenu(!menu);
          }}
        >
          {!menu ? (
            <img src={Menu} alt='/' />
          ) : (
            <IoClose size={20} className='nav-close' />
          )}
        </div>
        <img src={Logo} alt='logo' />
        <ul className='nav--items'>
          <li>
            <NavLink to='/collections'>Collections</NavLink>
          </li>
          <li>
            <NavLink to='/men'>Men</NavLink>
          </li>
          <li>
            <NavLink to='/'>Women</NavLink>
          </li>
          <li>
            <NavLink to='/about'>About</NavLink>
          </li>
          <li>
            <NavLink to='/contact'>Contact</NavLink>
          </li>
        </ul>
        <ul className={menu ? 'mobile--menu menu-active' : 'mobile--menu'}>
          <li>
            <NavLink to='/collections'>Collections</NavLink>
          </li>
          <li>
            <NavLink to='/men'>Men</NavLink>
          </li>
          <li>
            <NavLink to='/'>Women</NavLink>
          </li>
          <li>
            <NavLink to='/about'>About</NavLink>
          </li>
          <li>
            <NavLink to='/contact'>Contact</NavLink>
          </li>
        </ul>
        <div className='checkout-parent '>
          <div
            className='cart'
            onClick={() => {
              setShowCart(!showCart);
            }}
          >
            <img src={cart} alt='/' />
            <span>{isChecked ? amount : '0'}</span>
          </div>
          <img src={avatar} alt='/' width='50px' className='avatar' />
          {showCart && (
            <div className='checkout'>
              <Cart />
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Nav;
