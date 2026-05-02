import { fetchBookById } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import BorrowButton from "@/components/BorrowButton";

const BookDetails = async ({ params }) => {
    const session = await auth.api.getSession({
        headers: await headers()
    });
    if (!session) {
        redirect("/login");
    }

    const { id } = await params;
    const book = await fetchBookById(id);
    if (!book) {
        return <div className="text-center py-20 text-2xl text-amber-600">Book not found!</div>;
    }
    return (
        <div className="max-w-[80%] mx-auto px-5 py-16">
            <div className="flex flex-col md:flex-row gap-10 bg-base-100 shadow-2xl rounded-3xl p-8 border border-gray-100 animate__animated animate__fadeInUp">
                <div className="w-full md:w-1/3">
                    <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src={book.image_url}
                            alt={book.title}
                            width={300}
                            height={450}
                        />
                    </div>
                </div>

                <div className="w-full md:w-2/3 flex flex-col justify-center">
                    <div className="badge badge-primary mb-4">{book.category}</div>
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">{book.title}</h1>
                    <p className="text-xl text-amber-600 font-semibold mb-6">By {book.author}</p>
                    <div className="divider"></div>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        <span className="font-bold text-gray-800">Description:</span> <br />
                        {book.description}
                    </p>
                    <div className="flex items-center gap-4 mb-8">
                        <span className="font-bold">Available Quantity:</span>
                        <div className={`badge whitespace-nowrap ${book.available_quantity > 0 ? 'badge-success' : 'badge-error'} text-white`}>
                            {book.available_quantity} copies
                        </div>
                    </div>
                    <div className="card-actions justify-start gap-4">
                        <BorrowButton
                            bookTitle={book.title}
                            quantity={book.available_quantity} />
                        <Link href="/">
                            <button className="btn btn-outline border-amber-600 text-amber-600 hover:bg-amber-600 hover:border-amber-600">
                                Back to Home
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;