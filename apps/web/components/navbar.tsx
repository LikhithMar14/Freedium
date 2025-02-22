"use client";
import { useSession } from "@/hooks/SessionProvider";
import { useIsMobile } from "@/hooks/useMobile";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { HomeIcon, Menu, PartyPopper, TrendingUp, User , NotebookPen} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
import LoginButton from "./auth/LoginButton";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });
const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu size={30} />
      </SheetTrigger>
      <SheetContent className="bg-white h-full w-[65%] sm:w-[50%] flex flex-col " side={"left"}>
        <SheetHeader className="flex flex-row justify-between items-center">
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>

        {/* Scrollable menu items */}
        <div className="flex flex-col flex-grow mt-8 overflow-y-auto">
          {[
            { href: "/", icon: HomeIcon, label: "Home" },
            { href: "/posts?sort=trending", icon: TrendingUp, label: "Trending" },
            { href: "/posts?sort=popular", icon: PartyPopper, label: "Popular" },
            { href: "/write", icon: NotebookPen, label: "Write" },
            { href: "/about", icon: User, label: "About" },
          ].map(({ href, icon: Icon, label }, index) => (
            <Link
              key={index}
              href={href}
              className="flex items-center gap-x-4 px-6 py-4 rounded-lg hover:bg-gray-100 cursor-pointer w-full font-medium"
            >
              <Icon className="w-6 h-6 text-gray-700" />
              <span className="text-gray-800">{label}</span>
            </Link>
          ))}
        </div>


        <div className="py-4 border-t w-full flex justify-center ">
          <LoginButton />
        </div>
      </SheetContent>
    </Sheet>
  );
};

const DesktopNav = () => {
  return (
    <div className="flex items-center gap-6 xl:gap-12 font-medium">
      <Link href={"/"}>Home</Link>
      <Link href={"/posts?sort=trending"}>Trending</Link>
      <Link href={"/posts?sort=popular"} className="whitespace-nowrap">
        Most <span className="whitespace-nowrap">Popular</span>
      </Link>

      <Link href={"/about"}>About</Link>

      <LoginButton />
    </div>
  );
};

const Navbar = () => {
  const session = useSession();
  const mobile = useIsMobile();
  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      <Link href="/" className={`${poppins.className} font-bold text-3xl`}>
        Freedium
      </Link>

      <div>{mobile ? <MobileNav /> : <DesktopNav />}</div>
    </div>
  );
};

export default Navbar;
