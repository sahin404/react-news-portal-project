import Header from "../../shared/Header/Header";
import Navbar from "../../shared/Navbar/Navbar";
import ReactMarquee from "../../shared/ReactMarquee/ReactMarquee";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <ReactMarquee></ReactMarquee>
            <Navbar></Navbar>
        </div>
    );
};

export default Home;