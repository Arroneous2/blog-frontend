import { PostNew } from "./PostNew";
import { PostsIndex } from "./PostsIndex";

export function Content() {
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
