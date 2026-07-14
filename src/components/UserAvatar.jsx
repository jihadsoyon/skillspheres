

"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";

const UserAvatar = ({ user }) => {
  const handleSignOut = async () => {
    await authClient.signOut();

  }
  return (
    <div className="flex items-center gap-4">

      <div className="relative group cursor-pointer">

        {user?.image ? (
          <img
            src={user.image}
            alt={user.name}
            referrerPolicy="no-referrer"
            className="
    w-8 h-8
    rounded-full
    object-cover
    ring-2
    ring-primary
    ring-offset-2
    ring-offset-base-100
    transition-all
    duration-300
    group-hover:ring-4
  "
            
          />
        ) : (
          <div
            className="
              w-10 h-10
              rounded-full
              bg-primary
              text-white
              flex
              items-center
              justify-center
              font-bold
              text-lg
              ring-2
              ring-primary
              ring-offset-2
              ring-offset-base-100
            "
          >
            {user?.name?.charAt(0).toUpperCase()}
          </div>
        )}

        {/* Online Dot */}
        <span
          className="
            absolute
            bottom-0
            right-0
            w-3
            h-3
            rounded-full
            bg-green-500
            border-2
            border-base-100
          "
        />
      </div>

      <button onClick={handleSignOut} className="btn btn-sm btn-outline btn-error">
        Sign Out
      </button>

    </div>
  );
};

export default UserAvatar;