import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";

export function Header() {
  return (
    <header>
      <a href="/">Home</a>
      <Link to="/signup">Signup</Link>
      <Link to="/login">Login</Link>
      <Link to="/new-post">New Post</Link>
      <Link to="/all-posts">All Posts</Link>
      <LogoutLink />
    </header>
  );
}
