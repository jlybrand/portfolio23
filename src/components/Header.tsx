import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

type Props = {};

export default function Header({}: Props) {
  const router = useRouter();
  return (
    <div className="flex justify-between border-b border-white-600 text-3xl px-32  py-5">
      <div className="border rounded-full">
        <Image
          onClick={() => router.push("/")}
          src="https://placehold.co/600x600/png"
          className="border rounded-full cursor-pointer"
          width={160}
          height={160}
          alt="logo"
        />
      </div>
      <nav className="flex items-center space-x-5">
        <Link href="/about" className="font-medium hover:text-purple-400">
          About
        </Link>
        <Link href="/projects" className="font-medium hover:text-purple-400">
          Projects
        </Link>
        <Link href="/contact" className="font-medium hover:text-purple-400">
          Contact
        </Link>
      </nav>
    </div>
  );
}
