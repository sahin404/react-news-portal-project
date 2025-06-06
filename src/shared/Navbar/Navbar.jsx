import { Link, NavLink } from "react-router-dom";
import userProfile from "../../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
  const {user,logOut}=useContext(AuthContext);

  const handleLogout=()=>{
    logOut()
    .then(()=>{
      // console.log('succesfully logout');
      toast('Successfully Logged Out!')

    })
    .catch(()=>{

    })
  }

  const list = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/career">Career</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {list}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{list}</ul>
      </div>
      <div className="navbar-end flex items-center gap-2">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <img
              src={userProfile}
            />
          </div>
        </div>
        {
          user? <button onClick={handleLogout} className="btn btn-primary px-8">Logout</button> : <Link to="/login"><button className="btn btn-primary px-8">Login</button></Link>
        }
        
        
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Navbar;
