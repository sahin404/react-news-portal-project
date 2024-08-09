import { SlCalender } from "react-icons/sl";
import p1 from "../../assets/1.png";
import p2 from "../../assets/2.png";
import p3 from "../../assets/3.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data=>setCategories(data));
    },[])
  return (
    <div>
        <p className="text-2xl font-bold">News</p>
        {
            categories.map((category, idx)=><Link
            key={idx}
            className="block mt-4 text-lg ml-5 text-gray-500"
            >{category.name}</Link>)
        }

        {/* Card */}
      <div className="mt-8 card card-compact bg-base-100 shadow-xl">
        <figure>
          <img src={p2} />
        </figure>
        <div className="card-body">
          <p className="text-lg font-bold">
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </p>
          <div className="flex items-center justify-between">
            <h1>Sports</h1>
            <div className="flex items-center gap-2">
              <SlCalender />
              <p>Jan 4, 2022</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 card card-compact bg-base-100 shadow-xl">
        <figure>
          <img src={p3} />
        </figure>
        <div className="card-body">
          <p className="text-lg font-bold">
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </p>
          <div className="flex items-center justify-between">
            <h1>Sports</h1>
            <div className="flex items-center gap-2">
              <SlCalender />
              <p>Jan 4, 2022</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 card card-compact bg-base-100 shadow-xl">
        <figure>
          <img src={p1} />
        </figure>
        <div className="card-body">
          <p className="text-lg font-bold">
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </p>
          <div className="flex items-center justify-between">
            <h1>Sports</h1>
            <div className="flex items-center gap-2">
              <SlCalender />
              <p>Jan 4, 2022</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideNav;
