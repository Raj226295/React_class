import {Link} from "react-router";

export default function PageNotFound(){
    return(
        <div>
        <h1>404 Page Not Found</h1>
        <Link to="/">Go to Home Page</Link>
        </div>
    );
}