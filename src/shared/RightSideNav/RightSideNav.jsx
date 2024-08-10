import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import q1 from '../../assets/qZone1.png';
import q2 from '../../assets/qZone2.png';
import q3 from '../../assets/qZone3.png';
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const RightSideNav = () => {
  const {GoogleSignIn, GitHubSignIn}=useContext(AuthContext);
  const handleGoogleLogin = ()=>{
    
      GoogleSignIn()
      .then(()=>{
        
      })
      .catch(()=>{
        
      })
  }
  const handleGithubLogin=()=>{
    GitHubSignIn()
    .then(()=>{

    })
    .catch(()=>{
      
    })
  }

  return (
    <div>
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Login With</h1>
        <button onClick={handleGoogleLogin} className="btn w-full btn-outline btn-primary">
          <FaGoogle /> Login With Google
        </button>
        <button onClick={handleGithubLogin} className="btn w-full btn-outline">
          {" "}
          <FaGithub></FaGithub> Login With Github
        </button>
      </div>

      <div className="mt-7">
        <h1 className="text-2xl font-bold mb-4">Find Us on</h1>
        <div className="border flex items-center gap-2 text-blue-700 p-4 text-lg border-gray-400 cursor-pointer rounded-t-lg "><FaFacebook></FaFacebook> Facebook</div>
        <div className="border-x flex items-center gap-2 text-pink-700 p-4 text-lg border-gray-400 cursor-pointer "><FaInstagram></FaInstagram> Instagram</div>
        <div className="border flex items-center gap-2 text-blue-400 p-4 text-lg border-gray-400 cursor-pointer rounded-b-lg "><FaTwitter></FaTwitter> Twitter</div>
      </div>

      <div className="mt-7 bg-gray-200 p-5 rounded-md">
        <h1 className="text-2xl font-bold mb-4">Q-Zone</h1>
        <img  className="mx-auto mb-5 hover:scale-110 duration-300" src={q1} alt="" />
        <img className="mx-auto mb-5 hover:scale-110 duration-300 " src={q2} alt="" />
        <img className="mx-auto mb-5 hover:scale-110 duration-300" src={q3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
