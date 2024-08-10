import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../shared/Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
  const location=useLocation();
  const {signIn} = useContext(AuthContext);
  const [error, setError]=useState('');
  const navigate = useNavigate();
    const handleForm=e=>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        setError('');
        // console.log(email,password);
        signIn(email,password)
        .then(()=>{
          // console.log('Succesfully Logged in');
          e.target.reset();
          {
            location?.state? navigate(location.state):navigate('/')
          }
          
        })
        .catch((err)=>{
          setError(err.message);
        })
        

    }

  return (
    <div className="">
      <Navbar></Navbar>
      <div className="rounded-lg bg-slate-300 w-3/6 mx-auto p-4 ">
        <div className="w-5/6 mx-auto p-4">
          <h1 className="text-center text-3xl font-bold">Login Your Account</h1>
          <hr className="my-6 w-full" />
          {/* Form */}
          <form onSubmit={handleForm}>
            <div className="w-5/6 mx-auto text-lg">
              <span className="space-y-2">
                <h1>Email</h1>
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
                  Login
                </button>
              </span>
            </div>
          </form>
          <h1 className="text-center mt-5">
            Do not Have an Account? Please 
            <Link to="/register" className="text-blue-600"> Register
            </Link>
          </h1>
          <h1>
            {
              error && <p className="text-red-500 mt-5 text-center">Something Wrong! Please Try Again.</p>
            }
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Login;
