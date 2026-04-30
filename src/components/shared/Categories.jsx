import Link from 'next/link';
import React from 'react';

const Categories = () => {
        const categories = [
        { name: 'Story', bg: 'bg-blue-100', text: 'text-blue-700' },
        { name: 'Tech', bg: 'bg-green-100', text: 'text-green-700' },
        { name: 'Science', bg: 'bg-purple-100', text: 'text-purple-700' },
    ];

    return (
        <section className="py-16 px-[5%]">
            <h2 className="text-3xl font-bold mb-8">Browse by Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {categories.map((cat) => (
                    <Link key={cat.name} href={`/all-books?category=${cat.name}`}>
                        <div className={`${cat.bg} ${cat.text} p-10 rounded-2xl text-center cursor-pointer hover:scale-102 transition-transform border border-transparent hover:border-current`}>
                            <h3 className="text-2xl font-black">{cat.name}</h3>
                            <p className="mt-2 font-medium">See All Books →</p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default Categories;