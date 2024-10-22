import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div
      className="contaner"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <h1>Store</h1>

      <Link to={"/"} className="topbar_link" type="submit">
        Go To The Web Site
      </Link>
    </div>
  );
};

export default TopBar;
