

import { useSession } from "@/hooks/SessionProvider";
import { Button } from "../ui/button";
import { LogOut, LogIn } from "lucide-react"; 
import Link from "next/link";

const LoginButton = () => {
  const { session } = useSession();
  const isLoggedIn = session && session.user;

  return (
    <div className="w-full flex justify-center">
      {isLoggedIn ? (
        <a href="/api/auth/signout" className="w-full">
        <Button className="w-full py-2 rounded-full bg-blue-800 text-white shadow-md hover:bg-purple-600 transition-all duration-300 font-medium flex items-center justify-center gap-2" onClick={() => "/auth/signin"}>
          Logout <LogOut size={20} />
        </Button>
        </a>
      ) : (
        <Link href="/auth/signin">
        <Button className="w-full py-2 rounded-full bg-blue-800 text-yellow-50 shadow-md hover:bg-blue-600 transition-all duration-300 font-medium flex items-center justify-center gap-2" onClick={() => "/auth/signout"}>
          Login
        </Button>
        </Link>
      )}
    </div>
  );
};

export default LoginButton;

