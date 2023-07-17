import './Home.css';
import Navbar from '../../components/navbar/Navbar';
import LeftSidebar from '../../components/leftSidebar/LeftSidebar';
import Main from '../../components/main/Main';
import RightSidebar from '../../components/rightSidebar/RightSidbar';

function Home() {
  return (
    <div>
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
