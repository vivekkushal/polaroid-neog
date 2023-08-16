import './Main.scss';
import Post from '../post/Post';

function Main() {
  return (
    <div className="main">
      <div className="main-create-post">Create Post</div>
      <div className="main-posts">
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}

export default Main;
