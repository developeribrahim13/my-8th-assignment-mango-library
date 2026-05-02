"use client";
import React from 'react';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';

const UpdateProfile = () => {
    const { data: session } = authClient.useSession();
    const router = useRouter();

    const handleUpdate = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const image = e.target.image.value;

        const { data, error } = await authClient.updateUser({
            name: name,
            image: image,
        });

        if (data) {
            toast.success("Profile updated successfully!");
            router.push("/profile");
            router.refresh(); 
        } else {
            toast.error("Update failed!");
        }
    };

    return (
        <div className="max-w-md mx-auto mt-20 p-6 bg-white shadow-2xl rounded-2xl border border-amber-100">
            <Toaster />
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Update Profile</h2>
            
            <form onSubmit={handleUpdate} className="space-y-4">
                <div className="form-control">
                    <label className="label font-semibold">Full Name</label>
                    <input 
                        type="text" 
                        name="name" 
                        defaultValue={session?.user?.name} 
                        className="input input-bordered focus:input-warning" 
                        placeholder="Enter your name"
                        required 
                    />
                </div>

                <div className="form-control">
                    <label className="label font-semibold">Profile Image URL</label>
                    <input 
                        type="url" 
                        name="image" 
                        defaultValue={session?.user?.image} 
                        className="input input-bordered focus:input-warning" 
                        placeholder="https://example.com/image.jpg"
                        required 
                    />
                </div>

                <button type="submit" className="btn btn-primary w-full bg-amber-600 border-none hover:bg-amber-700 text-white font-bold mt-4">
                    Update Information
                </button>
            </form>
        </div>
    );
};

export default UpdateProfile;