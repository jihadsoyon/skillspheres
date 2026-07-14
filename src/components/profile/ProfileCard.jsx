"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ProfileCard = () => {
    const { data, isPending } = authClient.useSession();
    const router = useRouter();
    const user = data?.user;
        useEffect(() => {
        if (!isPending && !user) {
            router.replace("/login");
        }
    }, [isPending, user, router]);

     if (!user) return null;
     return (
        <div className="max-w-lg mx-auto mt-10">
            <div className="card bg-base-100 shadow-xl border">
                <div className="card-body items-center">

                    <img
                        src={user.image}
                        alt={user.name}
                        referrerPolicy="no-referrer"
                        className="w-30 h-30 rounded-full ring-4 ring-primary object-cover"
                    />

                    <h2 className="text-2xl font-bold mt-4">
                        {user.name}
                    </h2>

                    <p className="text-base-content/70">
                        {user.email}
                    </p>

                    <Link
                        href="/update-profile"
                        className="btn btn-primary mt-6"
                    >
                        Update Profile
                    </Link>

                </div>
            </div>
        </div>
    );

};

export default ProfileCard;



