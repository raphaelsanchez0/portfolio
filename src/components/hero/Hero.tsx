import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "../ui/separator";

export default function Hero() {
  return (
    <div className="flex w-full pt-12 pb-6 gap-4">
      <div className="flex flex-col gap-4 justify-center w-3/4 ">
        <h1 className="font-semibold lg:text-4xl">Hi, I'm Raphael👋</h1>
        <h2 className="text-md">
          I'm a Computer Science Major @{" "}
          <span>
            <Link
              href="https://www.vt.edu/"
              className="inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
            >
              <Image
                src="/images/vt-logo.png"
                alt="Virginia Tech"
                width={20}
                height={20}
                quality={100}
              />
              Virginia Tech
            </Link>
          </span>
          . I'm an enthusiastic problem solver and love to learn. Fueled by a
          passion for technology, I am always looking for ways to improve and
          innovate.
        </h2>
      </div>
      <div className="rounded-lg overflow-hidden ">
        <Image
          src="/images/profile-img.png"
          alt="Raphael Sanchez"
          width={300}
          height={300}
          quality={100}
        />
      </div>
    </div>
  );
}
