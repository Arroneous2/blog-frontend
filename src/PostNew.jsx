export function PostNew() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <p>
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor
        quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean
        ultricies mi vitae est. Mauris placerat eleifend leo.
      </p>
      <form method="POST" action="http://localhost:3000/posts.json">
        <div>
          <label htmlFor="user_id">User ID:</label>
          <input type="text" name="user_id" />
        </div>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" name="title" />
        </div>
        <div>
          <label htmlFor="body">Body:</label>
          <input type="text" name="body" />
        </div>
        <div>
          <label htmlFor="image">Image:</label>
          <input type="text" name="image" />
        </div>
        <button type="submit">create post</button>
      </form>
    </div>
  );
}
