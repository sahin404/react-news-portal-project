import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="m-5">
            Page Not Found. Please go back <Link to="/" className="text-blue-600">Home Page</Link>
        </div>
    );
};

export default Error;