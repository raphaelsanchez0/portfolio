import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="flex flex-row items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold">{"<RaphaelSanchez />"}</h1>
      </div>
      <div>
        <Link href="/" className="px-2 hover:text-white">
          Home
        </Link>
        <Link href="/projects" className="px-2 hover:text-white">
          Projects
        </Link>
        <Link href="/about" className="px-2 hover:text-white">
          About
        </Link>
      </div>
    </nav>
  );
}
{
  /* <nav className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative">
        <div className="flex flex-row space-x-0 pr-10">
          <Link href="/" className={linkStyles}>
            home
          </Link>
          <Link href="/projects" className={linkStyles}>
            projects
          </Link>
        </div>
      </nav> */
}
