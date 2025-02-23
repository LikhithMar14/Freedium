"use client"

import SinglePostPage from "@/components/SinglePost";
import { useSession } from "@/hooks/SessionProvider";

const HomePage = () => {
  const { session  } = useSession();
  console.log(session?.user.id)
  return ( 
    <div>
      {JSON.stringify(session?.user.name)}
        <SinglePostPage/>
    </div>
  );
}
 
export default HomePage;