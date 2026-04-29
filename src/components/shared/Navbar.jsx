import Image from 'next/image';
import React from 'react';
import logo from '@/assets/logo1.png'
import Navlink from './Navlink';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className='border-b border-gray-300'>
            <nav className='max-w-[80%] mx-auto flex justify-between items-center py-5'>
                <Link href={'/'}><Image src={logo} alt='logo' width={50} className='rounded-full'></Image></Link>
                <ul className='flex justify-center items-center gap-3'>
                    <li><Navlink href={'/'}>Home</Navlink></li>
                    <li><Navlink href={'/all-books'}>All Books</Navlink></li>
                    <li><Navlink href={'/profile'}>My Profile</Navlink></li>
                </ul>
                <div>
                    <button className='btn bg-amber-500 rounded-lg text-white font-semibold py-3 px-4'><Link href={'/login'}>Login</Link></button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;