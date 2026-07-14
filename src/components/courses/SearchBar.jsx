"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const SearchBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("search") || "");

  useEffect(() => {
    const timeout = setTimeout(() => {
      const params = new URLSearchParams(searchParams);

      if (search.trim()) {
        params.set("search", search);
      } else {
        params.delete("search");
      }

      router.push(`/courses?${params.toString()}`);
    }, 300);

    return () => clearTimeout(timeout);
  }, [search, router, searchParams]);

  return (
    <div className="my-8">
      <input
        type="text"
        placeholder="Search by course title..."
        className="input input-bordered w-full text-white"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;