"use client";
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const BorrowButton = ({ bookTitle, quantity }) => {
    const handleBorrow = () => {
        if (quantity > 0) 
          toast.success(`You successfully borrowed "${bookTitle}"!`)
    };
    return (
        <>
        <Toaster/>
        <button 
            onClick={handleBorrow}
            disabled={quantity == 0}
            className={`btn btn-primary bg-amber-600 border-none hover:bg-amber-700 px-10 ${quantity == 0 ? 'btn-disabled' : ''}`}
        >
            {quantity > 0 ? "Borrow Now" : "Out of Stock"}
        </button>
        </>
    );
};

export default BorrowButton;