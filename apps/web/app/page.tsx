"use client"

import { useSession } from "@/hooks/SessionProvider";

const HomePage = () => {
  const { session  } = useSession();
  console.log(session?.user.id)
  return ( 
    <div>
      {JSON.stringify(session?.user.name)}
    </div>
  );
}
 
export default HomePage;