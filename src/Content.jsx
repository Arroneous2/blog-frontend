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
    <main>
      <PostNew />
      <button onClick={handleIndexPosts}>Get Posts</button>
      <PostsIndex posts={posts} />
    </main>
  );
}
