import React from 'react'
import {FaShoppingCart} from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import {useSelector} from  'react-redux';

const Navbar = () => {
  const {cart} = useSelector((state) => state);
  return (
    <div>
      <nav className='flex justify-between items-center h-20 max-w-6xl mx-auto'>
        <NavLink to="/">
          <div className='ml-5'>
            <img src="../logo.png" className='h-14'></img>
          </div>
        </NavLink>
        <div className='flex item-center font-medium text-slate-100 mr-5 space-x-6'>
          <NavLink to="/">
            <div>
              <p>Home</p>
            </div>
          </NavLink>
          <NavLink to="/cart">
            <div className='relative'>
              <FaShoppingCart className='text-2xl'></FaShoppingCart>
              {
                cart.length>0 &&
                <span className='absolute -top-1 -right-2 bg-green-600 w-5 h-5  text-xs
                flex justify-center items-center animate-bounce rounded-full tetx-white'>{cart.length}</span>
              }
            </div>
          </NavLink>
          
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
