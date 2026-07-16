"use client";

import Image from "next/image";
import Link from "next/link";
import ActiveLink from "./ActiveLink";
import { authClient } from "@/lib/auth-client";
import UserAvatar from "../UserAvatar";

const Navbar = () => {

  const userData = authClient.useSession()
  const user = userData.data?.user
  console.log(user)


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

            <h2 className="hidden min-[500px]:block font-bold text-2xl truncate">
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

                {!user && (

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

                ) }

                {
                  user && <UserAvatar user={user} />
                }

              </div>

      </div>

    </div>
  );
};

export default Navbar;