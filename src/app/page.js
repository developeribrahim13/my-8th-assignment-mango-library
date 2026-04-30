import Image from "next/image";
import banner from '@/assets/banner.png'
import Marquee from "react-fast-marquee";
import { fetchBooks } from "@/lib/data";
import FeaturedBooks from "@/components/shared/FeaturedBooks";

const marqueeData = [
    {
        id: 1,
        text: "New Arrivals: The Silent Patient",
        type: "arrival"
    },
    {
        id: 2,
        text: "Special Discount on Memberships - Up to 20% OFF!",
        type: "offer"
    },
    {
        id: 3,
        text: "New Arrivals: Clean Code by Robert C. Martin",
        type: "arrival"
    },
    {
        id: 4,
        text: "Flash Sale: All Science category books at 15% discount!",
        type: "offer"
    },
    {
        id: 5,
        text: "New Arrivals: Thinking, Fast and Slow",
        type: "arrival"
    }
];

export default async function Home() {
  const books = await fetchBooks();
  return (
    <section>
      <div className="bg-lime-50 py-3 border-y border-amber-200">
            <Marquee pauseOnHover={true} speed={50}>
                {marqueeData.map((item) => (
                    <span key={item.id} className="mx-10 font-medium text-amber-900">
                        {item.text} <span className="ml-10 text-amber-300">|</span>
                    </span>
                ))}
            </Marquee>
        </div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2000&auto=format&fit=crop)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Find Your Next Read</h1>
            <p className="mb-5">
              Find your favorite book from our vast collection and borrow it digitally. We are with you on this journey of knowledge.
            </p>
            <button className="btn btn-warning">Get Started</button>
          </div>
        </div>
      </div>
        <FeaturedBooks books={books}></FeaturedBooks>
    </section>
  );
}
