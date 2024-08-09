import logo from '../../assets/logo.png';
import moment from 'moment';
const Header = () => {
    return (
        <div className='text-center pt-5 space-y-2'>
          <img className='mx-auto' src={logo} alt="" />
          <p className='text-[#706F6F]'>Journalism Without Fear or Favour</p>
          <p>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
          
        </div>
    );
};

export default Header;