import React from "react";
import Link from "next/link";
import { BookOpenCheck } from "lucide-react";
const navbar = () => {
  return (
    <nav className=" mb-6">
      <div className="navbar bg-neutral-100">
        <div className="container">
          <div className="flex-1">
            <Link href="/" className="btn btn-ghost text-xl">
              <BookOpenCheck />
            </Link>
          </div>
          <div className="flex-none">
            <Link href="/create" className="btn btn-ghost">
              Create Post
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default navbar;
