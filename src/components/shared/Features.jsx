import React from 'react';
import { FaBookReader, FaShieldAlt, FaShippingFast } from 'react-icons/fa';

const Features = () => {
   const features = [
        { id: 1, icon: <FaBookReader />, title: "Huge Collection", desc: "Choose your favorite from a collection of thousands of books." },
        { id: 2, icon: <FaShieldAlt />, title: "Easy Borrow", desc: "A modern system for borrowing books quickly without any hassle." },
        { id: 3, icon: <FaShippingFast />, title: "Quick Update", desc: "Be the first to get updates on all new books." },
    ];

    return (
        <section className="py-16 bg-amber-50 px-[5%]">
            <div className="text-center mb-10">
                <h2 className="text-4xl font-bold text-gray-800">Why Choose Us?</h2>
                <div className="w-24 h-1 bg-amber-500 mx-auto mt-2"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map(f => (
                    <div key={f.id} className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-amber-100">
                        <div className="text-4xl text-amber-600 mb-4">{f.icon}</div>
                        <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                        <p className="text-gray-600 text-sm">{f.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;