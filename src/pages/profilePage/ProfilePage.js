import './ProfilePage.scss';
import Navbar from '../../components/navbar/Navbar';
import LeftSidebar from '../../components/leftSidebar/LeftSidebar';
import Profile from '../../components/profile/Profile';
import { useContext } from 'react';
import { ModeContext } from '../../contexts/ModeContext';

function ProfilePage() {
  const { mode } = useContext(ModeContext);

  return (
    <div className={mode}>
      <Navbar />
      <div className="profile-page">
        <LeftSidebar />
        <Profile />
      </div>
    </div>
  );
}

export default ProfilePage;
