import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navLinks = 
    <>
    <Link to={'/'}><li className='text-black'><h2>Home</h2></li></Link>
    <Link to={'/allItems'}><li className='text-black'><h2>All Art & Craft Items</h2></li></Link>
    <Link to={'/addItems'}><li className='text-black'><h2>Add Craft Item</h2></li></Link>
    <Link to={'/myList'}><li className='text-black'><h2>My Art & Cart List</h2></li></Link>
    </>
    return (
        <div className="navbar bg-[#FF8C00] text-black">
            <div className="navbar-start">
                <div className="dropdown ">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu  bg-[#FF8C00] menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl font-satisfy">Art Diary</a>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal  bg-[#FF8C00] px-1">
                   {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
               <Link to={'/'}> <h2 className="btn btn-secondary bg-yellow-400 border-none">Login</h2></Link>
            </div>
        </div>
    );
};

export default Navbar;