"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const ActiveLink = ({ href, children }) => {
  const pathname = usePathname();

  const active = pathname === href;

  return (
    <Link
      href={href}
      className={`font-medium transition ${
        active
          ? "text-primary"
          : "hover:text-primary"
      }`}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;