import Header from "../../shared/Header/Header";
import LeftSideNav from "../../shared/LeftSideNav/LeftSideNav";
import Navbar from "../../shared/Navbar/Navbar";
import ReactMarquee from "../../shared/ReactMarquee/ReactMarquee";
import RightSideNav from './../../shared/RightSideNav/RightSideNav';
import NewsCards from "./NewsCards";


const Home = () => {
  return (
    <div>
      <Header></Header>
      <ReactMarquee></ReactMarquee>
      <Navbar></Navbar>
      <div className="grid grid-cols-4 gap-6">
        <div className="">
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="col-span-2">
          <NewsCards></NewsCards>
        </div>
        <div className="">
          <RightSideNav></RightSideNav>
        </div>
      </div>
      
    </div>
  );
};

export default Home;
