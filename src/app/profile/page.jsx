import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const MyProfile = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    });
    if (!session) {
        redirect("/login");
    }
    const { user } = session;

    return (
        <div className="max-w-4xl mx-auto px-5 py-16">
            <div className="bg-base-100 shadow-2xl rounded-3xl overflow-hidden border border-gray-100">
                <div className="h-32 bg-amber-500 flex justify-center items-center text-white text-3xl">MANGO LIBRARY</div>
                <div className="p-8 -mt-16 flex flex-col items-center">
                    <div className="avatar">
                        <div className="w-32 rounded-full ring ring-amber-500 ring-offset-base-100 ring-offset-2 shadow-xl bg-white">
                            <Image
                                src={user.image}
                                alt={user.name}
                                width={80}
                                height={80}
                            />
                        </div>
                    </div>
                    <h1 className="mt-4 text-3xl font-bold text-gray-800">{user.name}</h1>
                    <div className="divider w-full my-8">User Information</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                        <div className="bg-amber-50 p-5 rounded-2xl border border-amber-100">
                            <span className="text-sm text-amber-800 font-bold uppercase tracking-wider">Full Name</span>
                            <p className="text-lg font-semibold text-gray-700">{user.name}</p>
                        </div>
                        <div className="bg-amber-50 p-5 rounded-2xl border border-amber-100">
                            <span className="text-sm text-amber-800 font-bold uppercase tracking-wider">Email Address</span>
                            <p className="text-lg font-semibold text-gray-700">{user.email}</p>
                        </div>
                    </div>
                    <Link href="/profile/update">
                        <button className="btn btn-primary bg-amber-600 border-none hover:bg-amber-700 mt-10 px-10 text-white font-bold">
                            Update Information
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;