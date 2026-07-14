"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const UpdateProfileForm = () => {

  const router = useRouter();

  const { data } = authClient.useSession();

  const user = data?.user;

  const [loading, setLoading] = useState(false);

  const handleUpdate = async (e) => {

    e.preventDefault();

    setLoading(true);

    const name = e.target.name.value;

    const image = e.target.image.value;

    const { error } = await authClient.updateUser({
      name,
      image,
    });

    setLoading(false);

    if (!error) {
      router.push("/my-profile");
      router.refresh();
    }

  };

  if (!user) return null;

  return (

    <div className="max-w-md mx-auto mt-10">

      <div className="card bg-base-100 shadow-xl border">

        <div className="card-body">

          <h2 className="text-2xl font-bold text-center">
            Update Profile
          </h2>

          <form
            onSubmit={handleUpdate}
            className="space-y-5 mt-5"
          >

            <input
              name="name"
              placeholder="Enter your name"
              className="input input-bordered w-full text-white"
            />

            <input
              name="image"
              placeholder="Enter your image url"
              className="input input-bordered w-full text-white"
            />

            <button
              className="btn btn-primary w-full"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner loading-sm"></span>
              ) : (
                "Update Information"
              )}
            </button>

          </form>

        </div>

      </div>

    </div>

  );
};

export default UpdateProfileForm;