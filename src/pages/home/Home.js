import './Home.scss';
import Navbar from '../../components/navbar/Navbar';
import LeftSidebar from '../../components/leftSidebar/LeftSidebar';
import Main from '../../components/main/Main';
import RightSidebar from '../../components/rightSidebar/RightSidebar';
import { useContext } from 'react';
import { ModeContext } from '../../contexts/ModeContext';

function Home() {
  const { mode } = useContext(ModeContext);

  return (
    <div className={mode}>
      <Navbar />
      <div className="home">
        <LeftSidebar />
        <Main />
        <RightSidebar />
      </div>
    </div>
  );
}

export default Home;
