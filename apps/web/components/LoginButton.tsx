"use client";

import { useSession } from "@/hooks/SessionProvider";
import { Button } from "./ui/button";

const LoginButton = () => {
  const { session } = useSession();
  const isLoggedIn = session && session.user;

  return (
    <div className="w-full flex justify-center">
      {isLoggedIn ? (
        <Button
          className="w-[80%] py-2 rounded-full bg-purple-500 text-white font-semibold shadow-md hover:bg-purple-600 transition-all duration-300"
        >
          Logout
        </Button>
      ) : (
        <Button
          className="w-[80%] py-2 rounded-full bg-purple-500 text-yellow-50 font-semibold shadow-md  hover:bg-blue-600 transition-all duration-300"
        >
          Login
        </Button>
      )}
    </div>
  );
};

export default LoginButton;
