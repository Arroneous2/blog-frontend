import { useEffect, useState } from "react";
import { PostNew } from "./PostNew";
import { PostsIndex } from "./PostsIndex";
import axios from "axios";

export function Content() {
  const [posts, setPosts] = useState([]);

  const handleIndexPosts = () => {
    axios.get("http://localhost:3000/posts.json").then((response) => {
      console.log(response.data);
      setPosts(response.data);
    });
  };

  useEffect(handleIndexPosts, []);

  return (
    <div>
      <PostNew />
      <PostsIndex posts={posts} />
      <button onClick={handleIndexPosts}></button>
    </div>
  );
}
