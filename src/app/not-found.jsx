import React from 'react';
import Link from 'next/link';

const ErrorPage = () => {
    return (
        <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
            <div className="max-w-md text-center bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100 flex flex-col items-center">
                
                <div className="relative mb-6">
                    <h1 className="text-9xl font-extrabold text-amber-500 opacity-20 select-none">
                        404
                    </h1>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl md:text-3xl font-bold text-gray-800">
                            Oops! Lost Way?
                        </span>
                    </div>
                </div>

                <h2 className="text-xl font-bold text-gray-700 mb-2">
                    Page Not Found
                </h2>
                <p className="text-gray-500 mb-8 text-sm md:text-base">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                    <Link href="/" className="flex-1">
                        <button className="btn btn-primary bg-amber-600 border-none hover:bg-amber-700 text-white font-bold w-full rounded-xl transition-all duration-300">
                            Go Home
                        </button>
                    </Link>
                    <Link href="/all-books" className="flex-1">
                        <button className="btn btn-outline border-amber-600 text-amber-600 hover:bg-amber-600 hover:border-amber-600 hover:text-white font-bold w-full rounded-xl transition-all duration-300">
                            All Books
                        </button>
                    </Link>
                </div>

                <p className="mt-8 text-xs text-gray-400">
                    Need help? <Link href="/contact" className="text-amber-600 hover:underline">Contact Support</Link>
                </p>
            </div>
        </div>
    );
};

export default ErrorPage;