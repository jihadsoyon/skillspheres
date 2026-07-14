"use client";

import { authClient } from "@/lib/auth-client";
import { GrGoogle } from "react-icons/gr";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
const LoginPage = () => {
  const router = useRouter();

  const searchParams = useSearchParams();
  const next = searchParams.get("next") || "/";





 const handleSubmit = async (e) => {
  e.preventDefault();

  const email = e.target.email.value;
  const password = e.target.password.value;

  const { data, error } = await authClient.signIn.email({
    email,
    password,
  });

  if (!error) {
    toast.success("Login Successful!");
    router.push(next);
  } else {
    toast.error(error.message || "Invalid email or password");
  }
};

  const handleGoogleSignIn = async () => {
  try {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: next,
    });
  } catch (error) {
    toast.error("Google Login Failed");
  }
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