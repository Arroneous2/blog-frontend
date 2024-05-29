export function PostsIndex(props) {
  console.log("The props are", props);
  return (
    <div id="posts-index">
      <h1>All posts</h1>
      <p>The name is</p>
      {props.posts.map((item) => (
        <div className="posts-index ">
          <h2>{item.title}</h2>
          <p>{item.body}</p>
          <img src={item.image} alt="" />
          <button>More info</button>
        </div>
      ))}
    </div>
  );
}
