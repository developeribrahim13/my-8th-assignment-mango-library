import Image from 'next/image';
import React from 'react';
import mango from '@/assets/mango1.png'
import Navlink from './Navlink';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className="navbar bg-amber-50 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><Navlink href={'/'}>Home</Navlink></li>
                        <li><Navlink href={'/all-books'}>All Books</Navlink></li>
                        <li><Navlink href={'/profile'}>My Profile</Navlink></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl"> <Link href={'/'}><div className='text-center font-extrabold text-2xl relative'>
                            <Image src={mango} alt='mango' width={60} className='opacity-30 pb-5'></Image><h2 className='text-xl absolute top-7'>Library</h2>
                        </div></Link></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Navlink href={'/'}>Home</Navlink></li>
                    <li><Navlink href={'/all-books'}>All Books</Navlink></li>
                    <li><Navlink href={'/profile'}>My Profile</Navlink></li>
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <button className='btn bg-amber-500 rounded-lg text-white font-semibold py-3 px-4'><Link href={'/login'}>Login</Link></button>
                <button className='btn bg-amber-500 rounded-lg text-white font-semibold py-3 px-4'><Link href={'/signup'}>Signup</Link></button>
            </div>
        </div>
    );
};

export default Navbar;