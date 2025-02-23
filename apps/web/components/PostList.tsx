import PostItem from "./PostItem";

const PostList = () => {
    return ( 
        <div className="flex flex-col gap-4 mt-4">
            <PostItem/>
            <PostItem/>
            <PostItem/>
            <PostItem/>
            <PostItem/>
            <PostItem/>
        </div>
     );
}
 
export default PostList;