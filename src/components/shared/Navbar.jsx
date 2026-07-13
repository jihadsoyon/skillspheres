"use client";

import Image from "next/image";
import Link from "next/link";
import ActiveLink from "./ActiveLink";

const Navbar = () => {

  // Commit-6 এ BetterAuth বসবে

  const user = null;
  // TODO:
// BetterAuth Session

  return (
    <div className="border-b bg-base-100 sticky top-0 z-50">

      <div className="navbar max-w-7xl mx-auto px-4">

        {/* Left */}

        <div className="navbar-start">

          {/* Mobile */}

          <div className="dropdown">

            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
            >
              ☰
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 shadow"
            >
              <li>
                <ActiveLink href="/">
                  Home
                </ActiveLink>
              </li>

              <li>
                <ActiveLink href="/courses">
                  Courses
                </ActiveLink>
              </li>

              <li>
                <ActiveLink href="/my-profile">
                  My Profile
                </ActiveLink>
              </li>
            </ul>

          </div>

          {/* Logo */}

          <Link
            href="/"
            className="flex items-center gap-2"
          >
            <Image
              src="/skillsphere.png"
              alt="logo"
              width={40}
              height={40}
            />

            <h2 className="font-bold text-2xl">
              SkillSphere
            </h2>
          </Link>

        </div>

        {/* Center */}

        <div className="navbar-center hidden lg:flex">

          <ul className="menu menu-horizontal gap-6">

            <li>
              <ActiveLink href="/">
                Home
              </ActiveLink>
            </li>

            <li>
              <ActiveLink href="/courses">
                Courses
              </ActiveLink>
            </li>

            <li>
              <ActiveLink href="/my-profile">
                My Profile
              </ActiveLink>
            </li>

          </ul>

        </div>

        {/* Right */}

        <div className="navbar-end">

          {!user ? (

            <div className="flex gap-2">

              <Link
                href="/login"
                className="btn btn-outline btn-sm"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="btn btn-primary btn-sm"
              >
                Register
              </Link>

            </div>

          ) : (

            <>

            {/* Commit-6 */}

            </>

          )}

        </div>

      </div>

    </div>
  );
};

export default Navbar;