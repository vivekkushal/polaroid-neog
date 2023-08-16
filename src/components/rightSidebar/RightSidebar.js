import './RightSidebar.scss';
import Avatar from '@mui/material/Avatar';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { lightBlue } from '@mui/material/colors';
import userOne from '../../assets/users-photos/user-one.jpg';
import userTwo from '../../assets/users-photos/user-two.jpg';
import userThree from '../../assets/users-photos/user-three.jpg';
import userFour from '../../assets/users-photos/user-four.jpg';

function RightSidebar() {
  return (
    <div className="right-sidebar">
      <div className="container">
        <h4>Suggestions for you</h4>
        <div className="user">
          <div className="user-info">
            <Avatar
              sx={{ bgcolor: lightBlue, borderRadius: '5px' }}
              src={userOne}
              variant="square"
            >
              VK
            </Avatar>
            <span>Vivek Kushal</span>
          </div>
          <div className="follow">
            <PersonAddIcon />
          </div>
        </div>
        <div className="user">
          <div className="user-info">
            <Avatar
              sx={{ bgcolor: lightBlue, borderRadius: '5px' }}
              src={userTwo}
              variant="square"
            >
              VK
            </Avatar>
            <span>Neeshu Sharma</span>
          </div>
          <div className="follow">
            <PersonAddIcon />
          </div>
        </div>
        <div className="user">
          <div className="user-info">
            <Avatar
              sx={{ bgcolor: lightBlue, borderRadius: '5px' }}
              src={userThree}
              variant="square"
            >
              VK
            </Avatar>
            <span>Manan Khurana</span>
          </div>
          <div className="follow">
            <PersonAddIcon />
          </div>
        </div>
        <div className="user">
          <div className="user-info">
            <Avatar
              sx={{ bgcolor: lightBlue, borderRadius: '5px' }}
              src={userFour}
              variant="square"
            >
              VK
            </Avatar>
            <span>Rajashree Parhi</span>
          </div>
          <div className="follow">
            <PersonAddIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightSidebar;
