import axios from "axios";
import { Modal } from "./Modal";
import { PostNew } from "./PostNew";
import { PostsIndex } from "./PostsIndex";
import { useEffect, useState } from "react";
import { PostShow } from "./PostShow";

export function Content() {
  const [posts, setPosts] = useState([]);
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);
  const [currentPost, setCurrentPost] = useState({});

  const handleIndexPosts = () => {
    axios.get("http://localhost:3000/posts.json").then((response) => {
      console.log(response.data);
      setPosts(response.data);
    });
  };

  const handleShowPosts = (post) => {
    console.log(post);
    setCurrentPost(post);
    setIsPostsShowVisible(true);
  };

  const handleClose = () => {
    setIsPostsShowVisible(false);
  };

  useEffect(handleIndexPosts, []);

  return (
    <main>
      <PostNew />
      <button onClick={handleIndexPosts}>Get Posts</button>
      <PostsIndex posts={posts} on onShowpost={handleShowPosts} />
      <Modal show={isPostsShowVisible} onClose={handleClose}>
        <PostShow post={currentPost} />
      </Modal>
    </main>
  );
}
