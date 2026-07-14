"use client";

import { authClient } from "@/lib/auth-client";
import { useSearchParams } from "next/navigation";
import { GrGoogle } from "react-icons/gr";

const LoginPage = () => {

  const searchParams = useSearchParams();

  const redirect =
    searchParams.get("redirect") || "/";

  const handleSubmit = async(e) => {

    e.preventDefault();
    
    const email = e.target.email.value;
    const password = e.target.password.value;
    const { data, error } = await authClient.signIn.email({  
      email,
      password,
      callbackURL: '/'
    })
    console.log({ data, error });
    
    console.log(redirect)
  };
    const handleGoogleSignIn = async() => {
    await authClient.signIn.social({
      provider: 'google'
    })
  }

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
            name="email"
            type="email"
            placeholder="Email"
            className="input input-bordered w-full"
          />

          <input
            name="password"
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
            onClick={handleGoogleSignIn}
          >
          <GrGoogle />  Continue with Google
          </button>


        </form>
      </div>
    </div>

  );
};

export default LoginPage;