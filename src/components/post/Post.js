import './Post.scss';
import { Avatar } from '@mui/material';
import { MdMoreHoriz } from 'react-icons/md';
import { FaRegHeart, FaRegCommentAlt, FaRegBookmark } from 'react-icons/fa';

function Post() {
  return (
    <div className="post">
      <header className="post-header">
        <div className="post-header-author">
          <Avatar>V</Avatar>
          Vivek • <span>21h</span>
        </div>
        <MdMoreHoriz />
      </header>
      <section className="post-body">
        <img
          src="https://images.unsplash.com/photo-1562376552-0d160a2f238d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
          alt=""
        />
      </section>
      <footer className="post-footer">
        <section className="post-footer-icons">
          <div>
            <FaRegHeart />
          </div>
          <div>
            <FaRegCommentAlt />
          </div>
          <div>
            <FaRegBookmark />
          </div>
        </section>
        Liked by 15 people
      </footer>
    </div>
  );
}

export default Post;
