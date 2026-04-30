import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FeaturedBooks = ({books}) => {
    const sliceBooks = books.slice(0,4)
    return (
       <div className="py-16 px-[5%] bg-white">
            <div className="text-center mb-10">
                <h2 className="text-4xl font-bold text-gray-800">Featured Books</h2>
                <div className="w-24 h-1 bg-amber-500 mx-auto mt-2"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {sliceBooks.map((book) => (
                    <div key={book.id} className="card bg-gray-200 shadow-lg hover:shadow-xl transition-shadow border border-amber-50">
                        <figure className="px-4 pt-4">
                            <Image
                                src={book.image_url} 
                                alt={book.title} 
                                width={300}
                                height={600}
                                className="rounded-xl h-64 w-full object-cover" 
                            />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h3 className="card-title text-lg font-bold">{book.title}</h3>
                            <p className="text-sm text-gray-500">By {book.author}</p>
                            <div className={`badge badge-soft ${book.category=="Science"?"badge-success":book.category=="Tech"?"badge-info":"badge-error"}`}>{book.category}</div>
                            <div className="card-actions mt-4">
                                <Link href={`/book/${book.id}`}>
                                    <button className="btn btn-primary btn-sm bg-amber-600 border-none hover:bg-amber-700 text-white">
                                        View Details
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedBooks;