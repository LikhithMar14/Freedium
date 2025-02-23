import { useState } from "react";
import Comment from "./Comment";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Send } from "lucide-react";

const Comments = () => {
  const [comment, setComment] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(false);

  const handleSubmit = () => {
    if (comment.trim() === "") return;
    setComment(""); 
    setIsTyping(false); 
  };

  return (
    <div className="flex flex-col space-y-4">
      <div>
        <h1 className="text-2xl font-semibold text-blue-500">Comments</h1>
      </div>

      <div className="bg-white p-2 rounded-lg border border-gray-300">
        <Textarea
          placeholder="Add a comment..."
          className="p-3 w-full text-base md:text-lg border-none focus:ring-0 focus:outline-none focus:border-transparent focus-visible:ring-0 focus-visible:outline-none placeholder:text-gray-500 bg-transparent resize-y min-h-[150px] shadow-none"
          style={{ resize: "none" }}
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
            setIsTyping(e.target.value.trim() !== "");
          }}
        />

        {isTyping && (
          <div className="flex justify-end space-x-2 mt-2">
            <Button
              className="bg-gray-200 text-black hover:bg-gray-300 px-4 py-1 rounded-lg"
              onClick={() => {
                setComment("");
                setIsTyping(false);
              }}
            >
              Cancel
            </Button>
            <div className="flex gap-x-2 items-center">
              <Button
                className="bg-blue-700 text-white hover:bg-blue-800 px-4 py-1 rounded-lg"
                onClick={handleSubmit}
              >
                <span className="hidden md:inline">Comment</span> <Send />
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Comments List */}
      <div className="flex flex-col gap-y-5">
        <Comment />
        <Comment />
        <Comment />
      </div>
    </div>
  );
};

export default Comments;
