import { Trash2 } from "lucide-react";
import Image from "next/image";
import { Separator } from "./ui/separator";

const Comment = () => {
  return (
    <div className="p-4 bg-white rounded-xl mb-0">
      <div className="flex items-center gap-4">
        <Image
          src={"/turborepo-dark.svg"}
          className="w-10 h-10 rounded-full"
          width={40}
          height={40}
          alt="avatar"
        />
        <span className="font-medium">Jhon Doe</span>
        <span className="text-sm text-gray-500">2 days ago</span>


        <span className="text-xs text-red-300 hover:text-red-500 cursor-pointer ml-auto">
            <Trash2/>
        </span>
      </div>
      <Separator className="my-4" />
      <div className="mt-4 ">
        <p className="leading-7 font-sans">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt distinctio iure voluptate assumenda mollitia blanditiis?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt distinctio iure voluptate assumenda mollitia blanditiis?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt distinctio iure voluptate assumenda mollitia blanditiis?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt distinctio iure voluptate assumenda mollitia blanditiis?L</p>
      </div>
    </div>
  );
};

export default Comment;
