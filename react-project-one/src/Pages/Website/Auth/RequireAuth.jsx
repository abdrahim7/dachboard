import { useContext } from "react"
import { Navigate, Outlet, useLocation } from "react-router";

import { User } from "../Constext/Context";

const RequireAuth = () => {
    const user = useContext(User);// to access the user information from the Context
    const location = useLocation() // to i can go back from the reacent page
     return user.auth.userDeatails ? <Outlet/> :( <Navigate state={{location}} replace  to="/login"/>)
}

export default RequireAuth