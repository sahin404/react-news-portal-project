import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';


const PrivateRouter = ({children}) => {
    const {user} = useContext(AuthContext);
    const location=useLocation();
    // console.log(location.pathname)
    
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

PrivateRouter.propTypes={
    children:PropTypes.node
}
export default PrivateRouter;