import { Link } from "react-router-dom";
import Navbar from "../../shared/Navbar/Navbar";

const Login = () => {

    const handleForm=e=>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        e.target.reset();
        // console.log(email,password);
        

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
                  id=""
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
                  id=""
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
        </div>
      </div>
    </div>
  );
};

export default Login;
