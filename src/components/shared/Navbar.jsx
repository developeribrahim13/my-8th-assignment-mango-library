import Image from 'next/image';
import React from 'react';
import mango from '@/assets/mango1.png'
import Navlink from './Navlink';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className='border-b border-gray-300 bg-amber-50'>
            <nav className='max-w-[80%] mx-auto flex justify-between items-center pt-1.5 pb-5'>
                <Link href={'/'}><div className='text-center font-extrabold text-2xl relative'>
                    <Image src={mango} alt='mango' width={100} className='opacity-30'></Image><h2 className='text-3xl absolute top-12'>Library</h2>
                </div></Link>
                <ul className='flex justify-center items-center gap-3 font-medium text-gray-500 pt-4'>
                    <li><Navlink href={'/'}>Home</Navlink></li>
                    <li><Navlink href={'/all-books'}>All Books</Navlink></li>
                    <li><Navlink href={'/profile'}>My Profile</Navlink></li>
                </ul>
                <div className='space-x-1.5 pt-4'>
                    <button className='btn bg-amber-500 rounded-lg text-white font-semibold py-3 px-4'><Link href={'/login'}>Login</Link></button>
                    <button className='btn bg-amber-500 rounded-lg text-white font-semibold py-3 px-4'><Link href={'/signup'}>Signup</Link></button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;