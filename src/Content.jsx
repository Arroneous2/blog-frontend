import axios from "axios";
import { Modal } from "./Modal";
import { PostNew } from "./PostNew";
import { PostsIndex } from "./PostsIndex";
import { useEffect, useState } from "react";

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
      <Modal show={true}>
        <p>TEST</p>
      </Modal>
    </main>
  );
}
