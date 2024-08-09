import Header from "../../shared/Header/Header";
import Navbar from "../../shared/Navbar/Navbar";
import ReactMarquee from "../../shared/ReactMarquee/ReactMarquee";

const About = () => {
  return (
    <div>
      <Header></Header>

      <ReactMarquee></ReactMarquee>
      <Navbar></Navbar>
      <div className="text-center mt-10 text-lg font-bold">Page Not Found</div>
    </div>
  );
};

export default About;
