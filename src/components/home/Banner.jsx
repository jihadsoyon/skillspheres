import Link from "next/link";
import FadeIn from "../shared/FadeIn";

const Banner = () => {
  return (
    <FadeIn>
      <div
        className="hero min-h-[550px] rounded-2xl mt-6"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1600&auto=format&fit=crop')",
        }}
      >
        <div className="hero-overlay bg-black/65 rounded-2xl"></div>

        <div className="hero-content text-center text-neutral-content">

          <div className="max-w-3xl">

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">

              Upgrade Your Skills Today 

            </h1>

            <p className="py-8 text-lg">

              Learn from Industry Experts and build your future with
              professional online courses.

            </p>

            <Link
              href="/courses"
              className="btn btn-primary btn-lg"
            >
              Explore Courses
            </Link>

          </div>

        </div>
      </div>
    </FadeIn>
  );
};

export default Banner;