import React from 'react';
import { fetchBooks } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { HiOutlineSearch } from 'react-icons/hi';

const AllBooksPage = async ({ searchParams }) => {
    const params = await searchParams;
    const query = params.search || "";
    const selectedCategory = params.category || "All";
    const allBooks = await fetchBooks();
    const filteredBooks = allBooks.filter(book => {
        const matchesSearch = book.title.toLowerCase().includes(query.toLowerCase());
        const matchesCategory = selectedCategory === "All" || book.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const categories = ["All", "Tech", "Science", "Story"];

    return (
        <div className="container mx-auto px-4 py-10 min-h-screen">
            <form action="/all-books" className="flex justify-center mb-10">
                <div className="relative w-full max-w-2xl">
                    <input 
                        type="text" 
                        name="search"
                        defaultValue={query} 
                        placeholder="Search books by title..." 
                        className=" w-full pl-12 h-14 rounded-full shadow text-lg"
                    />
                   <button type="submit" className="absolute left-4 top-4 text-amber-400">
                        <HiOutlineSearch className="h-6 w-6" />
                    </button>
                </div>
            </form>

            <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-64 bg-base-100 p-6 rounded-2xl shadow-md h-fit border border-gray-100">
                    <h3 className="text-xl font-bold mb-4 text-gray-800">Categories</h3>
                    <div className="flex flex-col gap-2">
                        {categories.map(cat => (
                            <Link 
                                key={cat}
                                href={`/all-books?category=${cat}${query ? `&search=${query}` : ''}`}
                                className={`btn btn-sm justify-start normal-case ${selectedCategory === cat ? 'btn-primary bg-amber-600 border-none text-white' : 'btn-ghost text-gray-600'}`}
                            >
                                {cat}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="flex-1">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredBooks.length > 0 ? (
                            filteredBooks.map(book => (
                                <div key={book.id} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all border border-gray-100 group">
                                    <figure className="px-4 pt-4">
                                        <div className="relative h-64 w-full rounded-xl overflow-hidden">
                                            <Image 
                                                src={book.image_url} 
                                                alt={book.title} 
                                                fill
                                            />
                                        </div>
                                    </figure>
                                    <div className="card-body">
                                        <div className={`badge badge-soft ${book.category=="Science"?"badge-success":book.category=="Tech"?"badge-info":"badge-error"}`}>{book.category}</div>
                                        <h2 className="card-title text-gray-800 line-clamp-1">{book.title}</h2>
                                        <p className="text-sm text-gray-500 mb-4 italic">By {book.author}</p>
                                        <div className="card-actions justify-end">
                                            <Link href={`/bookDetails/${book.id}`} className="w-full">
                                                <button className="btn btn-primary bg-amber-600 border-none hover:bg-amber-700 w-full text-white font-bold">
                                                    Details
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-full text-center py-20">
                                <h2 className="text-2xl text-gray-400 font-semibold">No books found!</h2>
                                <Link href="/all-books" className="text-amber-600 hover:underline mt-2 inline-block">Clear filters</Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllBooksPage;