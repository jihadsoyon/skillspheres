"use client";

import { useSearchParams } from "next/navigation";

const LoginPage = () => {

  const searchParams = useSearchParams();

  const redirect =
    searchParams.get("redirect") || "/";

  const handleSubmit = (e) => {

    e.preventDefault();

    /*
      Commit-6

      Better Auth Login

      Success হলে

      router.push(redirect)

    */

    console.log(redirect);

  };

  return (

    <div className="card bg-base-100 shadow-xl border max-w-md mx-auto mt-40">

      <div className="card-body">
      <h1 className="text-4xl font-bold mb-8">

        Login

      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >

        <input
          type="email"
          placeholder="Email"
          className="input input-bordered w-full"
        />

        <input
          type="password"
          placeholder="Password"
          className="input input-bordered w-full"
        />

        <button
          className="btn btn-primary w-full"
        >
          Login
        </button>
         
         <div className="divider">
          OR
        </div>

        <button
          className="btn btn-outline w-full"
        >
          Continue with Google
        </button>
        

      </form>
      </div>
    </div>

  );
};

export default LoginPage;