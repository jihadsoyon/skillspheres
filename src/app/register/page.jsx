"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { GrGoogle } from "react-icons/gr";
import toast from "react-hot-toast";

export default function RegisterForm() {

  const router = useRouter()

const handleSubmit = async (e) => {
  e.preventDefault();

  const name = e.target.name.value;
  const image = e.target.image.value;
  const email = e.target.email.value;
  const password = e.target.password.value;

  const { data, error } = await authClient.signUp.email({
    name,
    email,
    password,
    image,
  });

  if (!error) {
    toast.success("Registration Successful!");
    router.push("/login");
  } else {
    toast.error(error.message || "Registration Failed");
  }
};

const handleGoogleSignIn = async () => {
  try {
    await authClient.signIn.social({
      provider: "google",
    });
  } catch (error) {
    toast.error("Google Sign Up Failed");
  }
};

  return (

    <div className="card bg-base-100 shadow-xl border max-w-md mx-auto mt-40">

      <div className="card-body">

        <h1 className="text-3xl font-bold text-center">
          Register
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 mt-6"
        >

          <input
            className="input input-bordered w-full text-white"
            name="name"
            type="text"
            placeholder="Name"
            required
          />

          <input
            className="input input-bordered w-full text-white"
            name="email"
            type="email"
            placeholder="Email"
            required
          />

          <input
            className="input input-bordered w-full text-white"
            name="image"
            type="text"
            placeholder="Photo URL"
            required
          />

          <input
            className="input input-bordered w-full text-white"
            name="password"
            type="password"
            placeholder="Password"
            required
          />

          <button
            className="btn btn-primary w-full"
          >
            Register
          </button>

        </form>

        <div className="divider">
          OR
        </div>

        <button
          className="btn btn-outline w-full"
          onClick={handleGoogleSignIn}
        >
        <GrGoogle />  Continue with Google
        </button>

        <p className="text-center mt-5">

          Already have an account?

          <Link
            href="/login"
            className="text-primary ml-2"
          >
            Login
          </Link>

        </p>

      </div>

    </div>
  );
}