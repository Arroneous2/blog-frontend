import axios from "axios";

export function PostShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    axios.patch(`http://localhost:3000/posts/${props.post.id}.json`, params).then((response) => {
      console.log(response.data);
    });
  };

  const handleDelete = (event) => {
    axios.delete(`http://localhost:3000/posts/${props.post.id}.json`).then((response) => {
      console.log(response.data);
    });
  };

  return (
    <div>
      <h2>{props.post.title}</h2>
      <p> {props.post.body}</p>
      <img src={props.post.image} alt="some image" />
      <p>Created at: {props.post.created_at}</p>
      <p>Updated at: {props.post.updated_at}</p>
      <form onSubmit={handleSubmit}>
        <div>
          User ID: <input type="text" name="user_id" defaultValue={props.post.user_id} />
        </div>
        <div>
          Title: <input type="text" name="title" defaultValue={props.post.title} />
        </div>
        <div>
          Body: <input type="text" name="body" defaultValue={props.post.body} />
        </div>
        <div>
          Image: <input type="text" name="image" defaultValue={props.post.image} />
        </div>
        <button type="submit">update post</button>
      </form>
      <button onClick={handleDelete}>delete post</button>
    </div>
  );
}
