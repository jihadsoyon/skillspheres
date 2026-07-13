"use client";

import Link from "next/link";

export default function RegisterForm() {

  const handleSubmit = (e) => {
    e.preventDefault();

    // Better Auth Register
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
            className="input input-bordered w-full"
            type="text"
            placeholder="Name"
            required
          />

          <input
            className="input input-bordered w-full"
            type="email"
            placeholder="Email"
            required
          />

          <input
            className="input input-bordered w-full"
            type="text"
            placeholder="Photo URL"
            required
          />

          <input
            className="input input-bordered w-full"
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
        >
          Continue with Google
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