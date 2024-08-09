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
