import { navLinks } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { SignedOut, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="flex justify-between p-3">
      <div className="flex items-center gap-2">
        <Link href={"/"} className="flex items-center gap-2">
          <Image
            src="/assets/logo/logo.png"
            width={100}
            height={100}
            className="h-10 w-auto"
            alt="logo"
          />
          <h1 className="text-2xl font-bold">Tindi</h1>
        </Link>
        <ul className="ml-5 flex flex-row gap-3">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>
                <p className="font-medium">{link.label}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-3">
        <UserButton />
        <SignedOut>
          <Link href={"/sign-in"}>
            <Button className="rounded-2xl">Đăng nhập</Button>
          </Link>
        </SignedOut>
      </div>
    </nav>
  );
};

export default Navbar;
