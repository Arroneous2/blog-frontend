import axios from "axios";
import { Modal } from "./Modal";
import { PostNew } from "./PostNew";
import { PostsIndex } from "./PostsIndex";
import { useEffect, useState } from "react";
import { PostShow } from "./PostShow";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { Routes, Route } from "react-router-dom";

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

  const handleCreatePost = (theParams) => {
    console.log("creating receiipe....");
    axios.post("http://localhost:3000/posts.json", theParams).then((response) => {
      console.log(response.data);
    });
  };

  useEffect(handleIndexPosts, []);

  return (
    <main>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/postnew" element={<PostNew onCreatePost={handleCreatePost} />} />
      </Routes>

      <button onClick={handleIndexPosts}>Get Posts</button>
      <PostsIndex posts={posts} onShowpost={handleShowPosts} />
      <Modal show={isPostsShowVisible} onClose={handleClose}>
        <PostShow post={currentPost} />
      </Modal>
    </main>
  );
}
