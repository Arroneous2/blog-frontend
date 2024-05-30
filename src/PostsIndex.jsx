export function PostsIndex(props) {
  return (
    <div id="posts-index">
      <h1>All posts</h1>
      <p>The name is</p>
      <div className="cards">
        {props.posts.map((post) => (
          <div key={post.id} className="posts-index ">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <img src={post.image} alt="" />
            <button>More info</button>
          </div>
        ))}
      </div>
    </div>
  );
}
