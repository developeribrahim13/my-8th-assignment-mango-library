"use client";
import React from 'react';
import Link from 'next/link';
import { authClient } from '@/lib/auth-client';
import toast, { Toaster } from 'react-hot-toast';

const SignupPage = () => {
    
    const handleRegister = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const image = e.target.photo.value;

        const { data, error } = await authClient.signUp.email({
            email,
            password,
            name,
            image,
            autoSignIn: false,
        });

        if (error) {
            toast.error("Registration failed!");
            console.error("Signup Error:", error);
        } 
        else 
            toast.success("Account created successfully!");
            e.target.reset();
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <Toaster />
            <div className="hero-content flex-col">
                <div className="text-center mb-4">
                    <h1 className="text-4xl font-bold text-gray-800">Create Account</h1>
                    <p className="py-2 text-gray-600">Join Mango Library Today!</p>
                </div>
                <div className="card shrink-0 w-full max-w-md shadow-2xl bg-base-100 border border-gray-100">
                    <form className="card-body" onSubmit={handleRegister}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Full Name</span>
                            </label>
                            <input 
                                type="text" 
                                name="name"
                                placeholder="Your Name" 
                                className="input input-bordered focus:input-warning" 
                                required 
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Photo URL</span>
                            </label>
                            <input 
                                type="url" 
                                name="photo"
                                placeholder="https://example.com/photo.jpg" 
                                className="input input-bordered focus:input-warning" 
                                required 
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Email</span>
                            </label>
                            <input 
                                type="email" 
                                name="email"
                                placeholder="email@example.com" 
                                className="input input-bordered focus:input-warning" 
                                required 
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Password</span>
                            </label>
                            <input 
                                type="password" 
                                name="password"
                                placeholder="min 6 characters" 
                                className="input input-bordered focus:input-warning" 
                                required 
                            />
                        </div>
                        <div className="form-control mt-6 space-x-2.5">
                            <button className="btn btn-primary bg-amber-600 border-none hover:bg-amber-700 text-white font-bold">
                                Signup
                            </button>
                            <button type="reset" className="btn btn-primary bg-amber-600 border-none hover:bg-amber-700 text-white font-bold">
                                Reset
                            </button>
                        </div>
                        <p className="text-center mt-4 text-sm text-gray-600">
                            Already have an account? 
                            <Link href="/login" className="text-amber-600 font-bold ml-1 hover:underline">
                                Login Here
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;