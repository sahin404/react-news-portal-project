import { Link, useLoaderData, useParams } from "react-router-dom";
import Header from "../../shared/Header/Header";
import Navbar from "../../shared/Navbar/Navbar";
import RightSideNav from "../../shared/RightSideNav/RightSideNav";

const NewsDetails = () => {
  const { id } = useParams();
  const cats = useLoaderData();
  const filterCat = cats.filter((cat) => cat._id === id);
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid grid-cols-4 gap-10 m-5">
        <div className="col-span-3 space-y-6">
          <h1 className="text-2xl font-bold">{filterCat[0].title}</h1>
          <img className="w-full" src={filterCat[0].image_url} alt="" />
          <p className="text-justify">{filterCat[0].details}</p>
          <div>
            <Link to="/" className="text-blue-600 underline">
              Back to Feed
            </Link>
          </div>
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
