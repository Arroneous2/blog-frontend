import "./App.css";

function Header() {
  return (
    <header>
      <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
    </header>
  );
}

function PostNew() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <p>
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor
        quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean
        ultricies mi vitae est. Mauris placerat eleifend leo.
      </p>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnkLob1mWBzomOMpCn29Fz4XgykktGN-NuQ6NV8XyH1w&s"
        alt="Some lorem Ipsum"
      />
    </div>
  );
}

function PostsIndex(props) {
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

function Content() {
  let posts = [
    {
      id: 1,
      title: "Milk",
      body: "does a body good",
      image: "https://t3.ftcdn.net/jpg/02/23/71/38/360_F_223713833_IVzWUhbC2t3WdN83GoNCPDjHmefthXoq.jpg",
    },
    {
      id: 2,
      title: "bread",
      body: "carbs 4 life",
      image: "https://thumbs.dreamstime.com/b/bread-cut-14027607.jpg",
    },
    {
      id: 3,
      title: "eggs!",
      body: "Now with more crunch!",
      image:
        "https://media.istockphoto.com/id/1028690210/photo/set-of-egg-isolated.jpg?s=612x612&w=0&k=20&c=Twc1V5iG4XmGT-_6JQ7Wqejk19D_sK6OI84sxTs8W7U=",
    },
  ];
  return (
    <div>
      <PostNew />
      <PostsIndex posts={posts} />
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <p>Copyright 20XX</p>
    </footer>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
