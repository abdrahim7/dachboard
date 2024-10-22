import { Link } from "react-router-dom";

const Header = () => {
  function HandelLogOut() {
    window.localStorage.removeItem("email");
    window.location.pathname = "/";
  }
  return (
    <div className="contaner">
      <div className="header_div">
        <li className="list">
          <Link to={"/"} className="link">
            HOME
          </Link>
          <Link to={"/about"} className="link">
            ABOUT
          </Link>
        </li>
        {!window.localStorage.getItem("email") ? (
          <div className="">
            <Link to={"/register"}>
              <button className="Register_btn">Register</button>
            </Link>
            <Link to={"/login"}>
              <button className="Login">Login</button>
            </Link>
            <Link to={"/dashboard"}>
              <button className="Login">Dashboard</button>
            </Link>
          </div>
        ) : (
          <div>
            <button className="Logout" onClick={HandelLogOut}>
              Log Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
