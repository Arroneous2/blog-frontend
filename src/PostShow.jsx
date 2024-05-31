export function PostShow(props) {
  return (
    <div>
      <h2>{props.post.title}</h2>
      <p> {props.post.body}</p>
      <img src={props.post.image} alt="some image" />
      <p>Created at: {props.post.created_at}</p>
      <p>Updated at: {props.post.updated_at}</p>
    </div>
  );
}
