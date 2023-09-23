import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h2>OOPS SORRY !</h2>
            <Link to="/">GO BACK HOME</Link>
        </div>
    );
};

export default ErrorPage;