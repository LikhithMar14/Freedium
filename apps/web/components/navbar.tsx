"use client";
import { useSession } from "@/hooks/SessionProvider";
import { useIsMobile } from "@/hooks/useMobile";
import Link from "next/link";
import { Poppins } from "next/font/google";
import {
  HomeIcon,
  Menu,
  PartyPopper,
  TrendingUp,
  User,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
import LoginButton from "./LoginButton";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu size={30} />
      </SheetTrigger>
      <SheetContent className="bg-white w-[60%]" side={"left"}>
        <SheetHeader className="flex flex-row justify-between items-center">
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <div className="w-full flex flex-col items-center mt-10 min-h-[70%] py-10">
          <div className="flex flex-col gap-y-6 w-full text-lg">
            {[
              { href: "/", icon: HomeIcon, label: "Home" },
              { href: "/posts?sort=trending", icon: TrendingUp, label: "Trending" },
              { href: "/posts?sort=popular", icon: PartyPopper, label: "Popular" },
              { href: "/about", icon: User, label: "About" },
            ].map(({ href, icon: Icon, label }, index) => (
              <Link
                key={index}
                href={href}
                className="flex items-center gap-x-3 px-6 py-3 rounded-lg hover:bg-gray-100 cursor-pointer w-full font-medium"
              >
                <Icon className="w-6 h-6 text-gray-700" />
                <span className="text-gray-800">{label}</span>
              </Link>
            ))}
          </div>
          <div className="mt-auto mb-4 w-full flex justify-center">
            <LoginButton />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

const DesktopNav = () => {
  return (
    <div className="flex items-center gap-8 xl:gap-12 font-medium">
      <Link href={"/"}>Home</Link>
      <Link href={"/posts?sort=trending"}>Trending</Link>
      <Link href={"/posts?sort=popular"}>Most Popular</Link>
      <Link href={"/about"}>About</Link>
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
