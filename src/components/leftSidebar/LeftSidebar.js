import './LeftSidebar.css';
import { AiFillHome } from 'react-icons/ai';
import { MdExplore } from 'react-icons/md';
import { BsBookmarkFill } from 'react-icons/bs';

function LeftSidebar() {
  return (
    <div className="left-sidebar">
      <button className="left-side-btn">
        <AiFillHome />
        <span>Home</span>
      </button>
      <button className="left-side-btn">
        <MdExplore />
        <span>Explore</span>
      </button>
      <button className="left-side-btn">
        <BsBookmarkFill />
        <span>Bookmark</span>
      </button>
    </div>
  );
}

export default LeftSidebar;
