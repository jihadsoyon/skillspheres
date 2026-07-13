import Link from "next/link";

export default function NotFound() {

  return (

    <div className="min-h-[70vh] flex flex-col justify-center items-center text-center">

      <h1 className="text-8xl font-bold text-primary">

        404

      </h1>

      <h2 className="text-3xl font-semibold mt-5">

        Page Not Found

      </h2>

      <p className="mt-3 text-gray-500">

        Sorry, this page doesnt exist.

      </p>

      <Link
        href="/"
        className="btn btn-primary mt-8"
      >
        Back Home
      </Link>

    </div>

  );

}