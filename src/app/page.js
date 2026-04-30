import Image from "next/image";
import banner from '@/assets/banner.png'
export default function Home() {
  return (
    <section>
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
    </section>
  );
}
