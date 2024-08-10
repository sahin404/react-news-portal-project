import { Link } from "react-router-dom";
import Navbar from "../../shared/Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const [error, setError]=useState('');
    const {signUp}  = useContext(AuthContext);
  const handleForm = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // const name = e.target.name.value;
    // const url = e.target.url.value;
    
    setError('');
    signUp(email,password)
    .then(()=>{
        toast("Succesfully Created Account");
        e.target.reset();
    })
    .catch((err)=>{
      console.error(err.message);
        setError(err.message)
    })
    
  };
  return (
    <div className="">
      <Navbar></Navbar>
      <div className="rounded-lg bg-slate-300 w-3/6 mx-auto p-4 ">
        <div className="w-5/6 mx-auto p-4">
          <h1 className="text-center text-3xl font-bold">
            Register Your Account
          </h1>
          <hr className="my-6 w-full" />
          {/* Form */}
          <form onSubmit={handleForm}>
            <div className="w-5/6 mx-auto text-lg">
              {/* Name */}
              <span className="space-y-2">
                <h1>Name</h1>
                <input
                  type="text"
                  name="name"
                  className="block w-full p-3 rounded-lg"
                  required
                  placeholder="write your name"
                />
              </span>

              {/* Photo Url */}
              <span className="space-y-2">
                <h1 className="mt-5">Photo URL</h1>
                <input
                  type="text"
                  name="url"
                  className="block w-full p-3 rounded-lg"
                  required
                  placeholder="provide your photo url"
                />
              </span>

              {/* Email */}
              <span className="space-y-2">
                <h1 className="mt-5">Email</h1>
                <input
                  type="email"
                  name="email"
                  className="block w-full p-3 rounded-lg"
                  required
                  placeholder="write your email"
                />
              </span>
              <span className="space-y-2">
                <h1 className="mt-5">Password</h1>
                <input
                  className="w-full p-3 rounded-lg"
                  type="password"
                  name="password"
                  required
                  placeholder="write your password"
                />
              </span>
              <span>
                <button className="text-white rounded-lg bg-black py-4 w-full text-lg mt-6">
                  Register
                </button>
              </span>
            </div>
          </form>
          <h1 className="text-center mt-5">
            Already Have an Account? Please
            <Link to="/login" className="text-blue-600">
              {" "}
              Login
            </Link>
          </h1>
          <h1 className="text-red-600 text-center mt-5">
            {
                error && <p>{error}</p>
            }
          </h1>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
