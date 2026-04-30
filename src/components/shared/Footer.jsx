import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import mango from '@/assets/mango1.png';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-amber-50 text-base-content border-t border-amber-100">
            <div className="container mx-auto px-4 py-7">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex flex-col space-y-4">
                        <Link href={'/'}><div className='text-center font-extrabold text-2xl relative'>
                            <Image src={mango} alt='mango' width={100} className='opacity-30'></Image><h2 className='text-3xl absolute top-12'>Library</h2>
                        </div></Link>
                        <p className="max-w-xs text-sm opacity-80 mt-4 text-gray-600">
                            The best online platform to read and collect your favorite books. Borrow books digitally and spread the light of knowledge.
                        </p>
                    </div>
                    <div className="flex flex-col space-y-4 md:items-center pt-4">
                        <div>
                            <h3 className="footer-title opacity-100 text-lg mb-4">Quick Links</h3>
                            <ul className="space-y-2 text-gray-500 font-normal">
                                <li><Link href="/" className="hover:text-lime-600 hover:border-b hover:border-amber-400">Home</Link></li>
                                <li><Link href="/all-books" className="hover:text-lime-600 hover:border-b hover:border-amber-400">All Books</Link></li>
                                <li><Link href="/profile" className="hover:text-lime-600 hover:border-b hover:border-amber-400">My Profile</Link></li>
                                <li><Link href="/login" className="hover:text-lime-600 hover:border-b hover:border-amber-400">Login</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-4 pt-4">
                        <h3 className="footer-title opacity-100 text-lg mb-2">Contact Us</h3>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <FaMapMarkerAlt className="text-warning" />
                                <span className="text-sm">Dhaka, Bangladesh</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaPhone className="text-warning" />
                                <span className="text-sm">+8801846-552436</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaEnvelope className="text-warning" />
                                <span className="text-sm">support@mangolibrary.com</span>
                            </div>
                        </div>
                         <div className="flex gap-4 text-xl">
                            <Link href="#" className="hover:text-warning transition-colors"><FaFacebook /></Link>
                            <Link href="#" className="hover:text-warning transition-colors"><FaTwitter /></Link>
                            <Link href="#" className="hover:text-warning transition-colors"><FaInstagram /></Link>
                            <Link href="#" className="hover:text-warning transition-colors"><FaLinkedin /></Link>
                        </div>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="text-center opacity-70 text-sm">
                    <p>© {new Date().getFullYear()} Mango Library. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;