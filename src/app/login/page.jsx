"use client";
import React from 'react';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { authClient } from '@/lib/auth-client';
import toast, { Toaster } from 'react-hot-toast';

const LoginPage = () => {
    const handleLogin = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value

        const {data,error} = await authClient.signIn.email({
            email,
            password,
            callbackURL: "/",
        })
        if (error) 
            toast.error("Invalid Email or Password!");
        else
          toast.success("Successfully Logged In!");
    };
    const handleGoogleLogin = async () => {
    const {data,error} = await authClient.signIn.social({
        provider: "google",
        callbackURL: "/"
    });
     if (error) 
            toast.error("Loggin Failed!");
        else
          toast.success("Successfully Logged In!");
};

    return (
        <div className="hero min-h-screen bg-base-200">
            <Toaster/>
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left mb-4">
                    <h1 className="text-4xl font-bold text-gray-800">Login Now!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border border-gray-100">
                    <form className="card-body" onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Email</span>
                            </label>
                            <input 
                                type="email" 
                                name="email"
                                placeholder="email" 
                                className="input focus:input-warning" 
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
                                placeholder="password" 
                                className="input focus:input-warning" 
                                required 
                            />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-4">
                            <button className="btn btn-primary bg-amber-600 border-none hover:bg-amber-700 text-white font-bold">
                                Login
                            </button>
                        </div>
                        <div className="divider">OR</div>
                        <button 
                            onClick={handleGoogleLogin}
                            type="button"
                            className="btn btn-outline flex items-center gap-2 border-gray-300 hover:bg-gray-50 text-gray-700">
                            <FcGoogle className="text-xl" />
                            Login with Google
                        </button>
                        <p className="text-center mt-4 text-sm">
                            New to Mango Library? 
                            <Link href="/signup" className="text-amber-600 font-bold ml-1 hover:underline">
                                Register
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;